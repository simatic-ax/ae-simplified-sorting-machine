USING ControlModules;
NAMESPACE SortingMachine
    /// Elevator bi-state station for handling boxes with two-position elevator system
    /// Extends BaseStation to provide elevator-specific functionality for sorting operations
    /// Supports moving boxes to different positions based on box properties
    CLASS ElevatorBiStateStation EXTENDS BaseStation
        //=============================================================================
        //SIEMENS AG
        //(c)Copyright 2025 All Rights Reserved
        //-----------------------------------------------------------------------------
        //Tested with:   S7-1500 FW V4.0 
        //Engineering:   SIMATIC AX Logic Control Engineering
        //Requirements:  none
        //Functionality: Elevator bi-state station for sorting machine
        //-----------------------------------------------------------------------------
        //Change log table:
        //Version  Date       Expert in charge                Changes applied
        //01.00.00 28.11.2025 Siemens Industry Online Support First Release 
        //=============================================================================
        VAR
            /// Elevator Controller
            _elevatorControl : IElevator;
            /// Calculated position of elevator
            _elevatorPosition : INT ;
            /// Request to remove the boxfrom elevator. 
            _readyToRemoveBox : BOOL;
            /// Box was removed and needs to be cleared
            _pendingBoxClear : BOOL := FALSE;
            // Elevator specific variables
            /// Box that should be handled in the call. Elevator can handle only 1 box at a time
            _box : BasicBox;
            /// Station configurations
            _stationConfig : typeElevatorBiStateStationConfig;
        END_VAR        
        
        /// Constructor - Initializes the elevator bi-state station
        /// @param stationID: Unique identifier for this station
        /// @param stationPosLeft: Position of station in relation to left reference
        /// @param elevatorControl: Interface to the elevator control module
        /// @param stationConfig: Configuration parameters for the station
        METHOD PUBLIC CONSTRUCTOR
            VAR_INPUT
                stationID : UINT;
                stationPosLeft : INT;
                elevatorControl : IElevator;
                stationConfig : typeElevatorBiStateStationConfig;
            END_VAR
            THIS.CONSTRUCTOR(stationID, stationPosLeft);
            _elevatorControl := elevatorControl;
            _stationConfig := stationConfig;
        END_METHOD

        /// Set elevator control interface
        /// @param elevatorControl: Interface to the elevator control module
        METHOD PUBLIC SetElevatorControl
            VAR_INPUT
                elevatorControl : IElevator;
            END_VAR
            _elevatorControl := elevatorControl;
        END_METHOD

        /// Gets the box data currently handled by the elevator station
        /// @return: Interface to the box data of the current box on the elevator
        METHOD PUBLIC GetBoxData : typeBoxData
            GetBoxData := _box.BoxData;
        END_METHOD

        /// Gets the actual position of the elevator
        /// @return: Actual elevator position as calculated by the station
        METHOD PUBLIC GetElevatorPositionValue : INT
            GetElevatorPositionValue := _elevatorPosition;
        END_METHOD

        /// Set manual commands to be done during execute
        /// @param manualCommands: Commands to be executed manually on the elevator
        METHOD PUBLIC SetManualCommands 
            VAR_INPUT
                manualCommands : typeElevatorCommand;
            END_VAR
            IF manualCommands.stop THEN
                _elevatorControl.Stop(); 
            ELSIF manualCommands.moveUp THEN
                _elevatorControl.MoveUp();
            ELSIF manualCommands.moveDown THEN 
                _elevatorControl.MoveDown();
            END_IF;
        END_METHOD

        /// Gets the current elevator position as an enumerated value
        /// Converts numeric position to corresponding position enum based on configuration
        /// @return: typeElevatorPosition enum value (HOME, WORK_POS_1, WORK_POS_2, or UNDEF)
        METHOD PUBLIC GetElevatorPositionEnum : typeElevatorPosition
            // Determine position based on configured positions
            IF _elevatorPosition = _stationConfig.PositionHome  THEN
                GetElevatorPositionEnum := typeElevatorPosition#HOME;
            ELSIF  _elevatorPosition = _stationConfig.PositionDownLimit THEN
                GetElevatorPositionEnum := typeElevatorPosition#WORK_POS_1;
            ELSIF  _elevatorPosition = _stationConfig.PositionUpLimit THEN
                GetElevatorPositionEnum := typeElevatorPosition#WORK_POS_2;
            ELSE // Unknown position
                GetElevatorPositionEnum := typeElevatorPosition#UNDEF;
            END_IF;
        END_METHOD
        
        /// Try to add a new box to the elevator. A box can only be added when the elevator is at the right position
        /// and it is free.
        /// @param newBox: IBasicBox interface containing the box data and triggers adding a new box
        /// @return: TRUE if box added to the station. FALSE if rejected
        METHOD PUBLIC AddNewBox : BOOL
            VAR_INPUT
            newBox : IBasicBox;
            END_VAR
            IF newBox = NULL THEN
                AddNewBox := FALSE;
                RETURN;
            END_IF;
            // check if possible to add new box, or already waiting to add new box
            IF NOT THIS.ReadyToReciveBox() THEN
                AddNewBox := FALSE;
                RETURN;
            END_IF;
            // Add the box
            _box.CONSTRUCT(newBox.GetBoxData());
            _box.BoxData.stationNr := (_stationID);
            _box.BoxData.posLeft := (_stationPosLeft);
            AddNewBox := TRUE;
        END_METHOD

        /// Checks if the station is ready to receive a new box 
        /// Box can only be added when elevator is at home position and no box is present
        /// @return: TRUE if station is ready to remove the box, FALSE otherwise
        METHOD PUBLIC ReadyToRemoveBox : BOOL
            ReadyToRemoveBox := _readyToRemoveBox;
        END_METHOD

        /// Removes the box from the elevator station when ready
        /// Can only remove box when the station indicates it's ready for removal
        /// @return: Interface to the removed box, or invalid interface if no box to remove
        METHOD PUBLIC RemoveBox : IBasicBox
            IF _readyToRemoveBox THEN
                RemoveBox := (_box);
                _readyToRemoveBox := FALSE;
                _pendingBoxClear := TRUE;
            END_IF;
        END_METHOD

        /// Checks if the station is ready to receive a new box
        /// Station is ready when no box is present and elevator is at home position
        /// @return: TRUE if ready to receive a box, FALSE otherwise
        METHOD PUBLIC ReadyToReciveBox : BOOL
            ReadyToReciveBox := NOT _box.BoxData.isPresent AND (_elevatorPosition = _stationConfig.PositionHome);
        END_METHOD
    
        /// Implementation of station-specific reset operations
        /// Acknowledges any elevator control errors during reset
        METHOD PROTECTED OVERRIDE onReset
            _elevatorControl.AckError();
            _box.ClearData();
            _state := typeStationState#STATE_IDLE;
            _readyToRemoveBox := FALSE;
        END_METHOD

        
        /// Clears error condition for both station and elevator control
        /// Extends base class error clearing to include elevator control acknowledgment
        METHOD PROTECTED OVERRIDE clearError
            SUPER.clearError();
            _elevatorControl.AckError();
        END_METHOD

        /// Determines target position based on box properties and station configuration
        /// Uses box base color to determine if elevator should move up, down, or to home
        /// @return: Target position for the elevator based on box properties
        METHOD PROTECTED getTargetPosition : INT
            VAR_TEMP
                boxData : typeBoxData;
            END_VAR
            boxData := _box.BoxData;
            // When there is no box, go to home position
            IF NOT boxData.isPresent THEN
                getTargetPosition := _stationConfig.PositionHome;
                RETURN;
            END_IF;
            // Determine target position based on box base color
            IF boxData.baseColor = _stationConfig.ConditionUp THEN
                getTargetPosition := _stationConfig.PositionUpLimit;
            ELSIF boxData.baseColor = _stationConfig.ConditionDown THEN
                getTargetPosition := _stationConfig.PositionDownLimit;
            ELSE // Unknown box properties, trigger error
                _error := TRUE;
                _status := typeStationStatus#ERR_UNKWNON_BOX;
                getTargetPosition := INT#0;
            END_IF;

        END_METHOD

        /// Checks if the elevator is at the target position within precision limits
        /// Uses configured precision offset to determine if position is acceptable
        /// @return: TRUE if elevator is at target position within tolerance, FALSE otherwise
        METHOD PROTECTED isAtTarget : BOOL
            // Check if the position is within the limits
            IF      (_elevatorPosition) >= (THIS.getTargetPosition() - _stationConfig.PrecisionOffset)
                AND (_elevatorPosition) <= (THIS.getTargetPosition() + _stationConfig.PrecisionOffset)  THEN
                isAtTarget := TRUE;
            ELSE
                isAtTarget := FALSE;
            END_IF;
        END_METHOD
        
        /// Commands the elevator to move towards the target position
        /// Determines direction based on current vs target position and sends appropriate command
        METHOD PROTECTED moveElevator
            // If already at target, don't move
            IF THIS.isAtTarget() THEN
                RETURN;
            END_IF;
            // Get direction to move
            IF _elevatorPosition < THIS.getTargetPosition() THEN
                _elevatorControl.MoveUp();
            ELSE
                _elevatorControl.MoveDown();
            END_IF;
        END_METHOD

        
        /// Enables both the station and elevator control for operation
        /// Extends base class enable to include elevator control enabling
        METHOD PUBLIC OVERRIDE Enable
            SUPER.Enable();
            _elevatorControl.Enable();
        END_METHOD

        /// Main execution method for the elevator bi-state station
        /// Handles state machine logic for box processing and elevator movement
        /// States: 0=Idle, 1=Moving, 2=Wait Remove Box, 3=Go to Home, 99=Error
        /// This method should be called cyclically to process station operations
        METHOD PUBLIC OVERRIDE Execute
            // check if station or control module is in error to set state machine to error
            IF _elevatorControl.GetIsError() THEN
                THIS.setError(_elevatorControl.GetStatus());
            END_IF;
            // Handle common reset functionality
            THis.handleReset();
            // Clear the input box when pending
            IF _pendingBoxClear THEN
                // Clear all box data
                _box.ClearData();
                _pendingBoxClear := FALSE;
            END_IF;
            // Main state machine
            CASE _state OF
                typeStationState#STATE_IDLE: // Idle State
                    THIS.handleIdleState();
                    // Handle when ready
                    IF _ready AND NOT _manualModeEn THEN      
                        // Handle step movement request
                        IF _box.BoxData.isPresent THEN
                            _state := typeStationState#STATE_MOVE_TO_TARGET_POS; // Go to moving state
                        END_IF;
                        // Handle go to Home position after Error or manual mode
                        // with no boxes.
                        IF NOT THIS.isAtTarget() THEN
                            _state := typeStationState#STATE_GO_TO_POS_FOR_NEW_BOX;
                        END_IF;
                    END_IF;
                    
                typeStationState#STATE_MOVE_TO_TARGET_POS: // Moving State
                    _ready := FALSE;
                    _busy := TRUE;
                    // Call for Control module control
                    THIS.moveElevator();
                    // Wait for movement timer
                    IF THIS.isAtTarget() THEN
                        _state := typeStationState#STATE_WAIT_REMOVE_BOX; // Go to removing box state
                        _readyToRemoveBox := TRUE;
                    END_IF;
                    
                typeStationState#STATE_WAIT_REMOVE_BOX:  // Wait Remove Box
                    _ready := FALSE;
                    _busy := TRUE;
                    // When box is removed
                    IF NOT _readyToRemoveBox THEN
                        // Go to home position to be able to accept new boxes
                        _state := typeStationState#STATE_GO_TO_POS_FOR_NEW_BOX; 
                    END_IF;

                typeStationState#STATE_GO_TO_POS_FOR_NEW_BOX: // Go to Position to accept new boxes
                    _ready := FALSE;
                    _busy := TRUE;
                    // Call for Control module control
                    THIS.moveElevator();
                    // When Elevator is at the target position
                    IF THIS.isAtTarget() THEN
                        // Go to idle state to wait for further commands
                        _state := typeStationState#STATE_IDLE; 
                    END_IF;
                    
                typeStationState#STATE_ERROR_ON: // Error State
                    THIS.handleErrorState();
            END_CASE;
            // Execute call from controller for main logic
            _elevatorControl.Execute();
            // Get position from controller
            _elevatorPosition := _elevatorControl.GetActualPosition();
        END_METHOD
    END_CLASS
END_NAMESPACE