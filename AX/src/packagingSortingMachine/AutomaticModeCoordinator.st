USING SortingMachine;
USING IEC;
USING Siemens.Simatic.Alarming;

NAMESPACE SortingMachine
    /// Function block for coordinating automatic mode operation of the sorting machine
    /// Handles the automatic flow of boxes through conveyor stations and elevator
    /// Manages the sequence: ConveyorStation1 → Elevator → ConveyorStation2/3 based on box properties
    FUNCTION_BLOCK AutomaticModeCoordinator
        //=============================================================================
        //SIEMENS AG
        //(c)Copyright 2025 All Rights Reserved
        //-----------------------------------------------------------------------------
        //Tested with:   S7-1500 FW V4.0 
        //Engineering:   SIMATIC AX Logic Control Engineering
        //Requirements:  none
        //Functionality: Automatic mode coordinator for sorting machine
        //-----------------------------------------------------------------------------
        //Change log table:
        //Version  Date       Expert in charge                Changes applied
        //01.00.00 28.11.2025 Siemens Industry Online Support First Release 
        //=============================================================================
        VAR_INPUT
            /// Enable automatic mode operation
            enable : BOOL;
            /// Reset the automatic sequence to initial state
            reset : BOOL;
        END_VAR
        VAR_OUTPUT
            /// Automatic mode is active and running
            active : BOOL;
            /// Error occurred during automatic operation
            error : BOOL;
            /// Status code describing current operation
            status : WORD;
            /// Stored boxes after output conveyors
            storedBoxes : typeStorageInterface;
        END_VAR
        VAR_IN_OUT
            /// Reference to input conveyor station
            conveyorStation1 : ConveyorStation;
            /// Reference to elevator station
            elevatorStation : ElevatorBiStateStation;
            /// Reference to upper output conveyor station
            conveyorStation2 : ConveyorStation;
            /// Reference to lower output conveyor station  
            conveyorStation3 : ConveyorStation;
            /// Initial box to use for starting the sequence
            initialBox : BasicBox;
        END_VAR
        VAR PRIVATE
            /// Maximum timeout for operations (30 seconds)
            _maxOperationTime : TIME := T#30s;
            /// Scaner simulation timer to continue
            _scanStationTime : TON;
            /// Elevator delay time for the visualization
            _elevatorDelayTime : TON;
            /// Coordinator was previously reset
            _prevReset : BOOL;
            /// S7-1500 program Alarm for Automatic mode coordenator
            {S7.Alarm = NoAck, "Automatic Mode in Error"}
            alarmAutomaticMode : ProgramAlarm;
        END_VAR
        VAR_TEMP
            elevatorPosition : typeElevatorPosition;
        END_VAR
        VAR CONSTANT   
            // Scanner simulation time 
            SCAN_SIMULATION_TIME : LTIME := LTIME#2S;
            // Elevator Delay simulation time 
            ELEVATOR_SIMULATION_TIME : LTIME := LTIME#1S;
        END_VAR
        // Handle reset request
        IF reset AND NOT _prevReset THEN
            error := FALSE;
            _scanStationTime(IN := FALSE);
            _elevatorDelayTime(IN := FALSE);
            status := typeAutomaticModeCoordinatorStatus#STATUS_RESET_COMPLETE;
        END_IF;
        // Update active status
        active := enable AND NOT error;
        _scanStationTime(IN := conveyorStation1.ReadyToRemoveBox(), PT := SCAN_SIMULATION_TIME);
        _elevatorDelayTime(IN := elevatorStation.ReadyToRemoveBox(), PT := ELEVATOR_SIMULATION_TIME);
        // Update previous flags
        _prevReset := reset;
        // Automatic mode alarm
        alarmAutomaticMode(sig := error);
        // Only run if enabled
        IF NOT (enable OR error) THEN
            status := typeAutomaticModeCoordinatorStatus#STATUS_AUTOMATIC_MODE_DISABLED;
            RETURN;
        END_IF;
        // Check for errors in stations and stop if there are errors
        IF conveyorStation1.GetError() 
            OR elevatorStation.GetError() 
            OR conveyorStation2.GetError() 
            OR conveyorStation3.GetError() 
            OR error THEN
            error := TRUE;
            status := typeAutomaticModeCoordinatorStatus#ERR_STATION_FAULT;
            RETURN;
        ELSE
            status := typeAutomaticModeCoordinatorStatus#STATUS_NO_CALL;
        END_IF;

        // Automatic handling for each station
        // Conveyor Station 1:
        // Add initial box if needed
        IF initialBox.BoxData.isPresent AND conveyorStation1.ReadyToReciveBox() THEN
            conveyorStation1.AddNewBox(initialBox);
            initialBox.ClearData();
        // Move box from conv1 to elevator if needed
        ELSIF _scanStationTime.Q AND elevatorStation.ReadyToReciveBox() THEN
            elevatorStation.AddNewBox(conveyorStation1.RemoveBox());
        // Move conveyor boxes
        ELSIF NOT conveyorStation1.GetIsMoving() THEN
                conveyorStation1.MoveIncrementForward();
        END_IF;
        
        // Elevator 1:
        // Move box from elevator to conveyors
        IF _elevatorDelayTime.Q  OR TRUE THEN
            elevatorPosition := elevatorStation.GetElevatorPositionEnum();
            CASE elevatorPosition OF
                typeElevatorPosition#WORK_POS_1, typeElevatorPosition#HOME:
                    // Transfer to lower output conveyor (ConveyorStation3)
                    IF conveyorStation3.ReadyToReciveBox() THEN
                        conveyorStation3.AddNewBox(elevatorStation.RemoveBox());
                    END_IF;
                typeElevatorPosition#WORK_POS_2:
                    // Transfer to upper output conveyor (ConveyorStation2)
                    IF conveyorStation2.ReadyToReciveBox() THEN
                        conveyorStation2.AddNewBox(elevatorStation.RemoveBox());
                    END_IF;
            END_CASE;
        END_IF;

        // Conveyor 2:
        // Remove boxes from output conveyor 2
        IF conveyorStation2.ReadyToRemoveBox() THEN
            conveyorStation2.RemoveBox();
            storedBoxes.totalBoxesY := storedBoxes.totalBoxesY + 1;
            storedBoxes.totalBoxes := storedBoxes.totalBoxes + 1;
        // Continue moving Conveyor
        ELSIF NOT conveyorStation2.GetIsMoving() THEN
            conveyorStation2.MoveIncrementForward();
        END_IF;
        // Conveyor 3:
        // Remove boxes from output conveyor 3
        IF conveyorStation3.ReadyToRemoveBox() THEN
            conveyorStation3.RemoveBox();
            storedBoxes.totalBoxesX := storedBoxes.totalBoxesX + 1;
            storedBoxes.totalBoxes := storedBoxes.totalBoxes + 1;
        // Continue moving Conveyor
        ELSIF NOT conveyorStation3.GetIsMoving() THEN
            conveyorStation3.MoveIncrementForward();
        END_IF;
    END_FUNCTION_BLOCK
END_NAMESPACE