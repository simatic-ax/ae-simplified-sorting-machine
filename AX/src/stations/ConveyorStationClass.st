USING ControlModules;
USING System.EdgeDetection;
USING System.Timer;
USING Simatic.Ax.Sinamics;

NAMESPACE SortingMachine
    CLASS ConveyorStation EXTENDS BaseStation
        //=============================================================================
        //SIEMENS AG
        //(c)Copyright 2025 All Rights Reserved
        //-----------------------------------------------------------------------------
        //Tested with:   S7-1500 FW V4.0 
        //Engineering:   SIMATIC AX Logic Control Engineering
        //Requirements:  none
        //Functionality: Conveyor station class for sorting machine
        //-----------------------------------------------------------------------------
        //Change log table:
        //Version  Date       Expert in charge                Changes applied
        //01.00.00 28.11.2025 Siemens Industry Online Support First Release 
        //=============================================================================
        VAR PROTECTED
            // Conveyor specific input variables
            /// Rising edge triggers one step movement
            _move : BOOL;
            /// Add new box at position 0
            _addBox : BOOL;
            /// Data for new box being added
            _newBoxData : BasicBox;
            
            // Conveyor specific output variables
            /// Conveyor is currently moving
            _moving : BOOL;
            /// Current number of boxes on conveyor
            _boxCount : DINT := DINT#0;
            /// Request to remove the box from conveyor output position
            _readyToRemoveBox : BOOL;
            /// Box was removed and needs to be cleared
            _pendingBoxClear : BOOL := FALSE;
            
            // Conveyor specific variables
            /// Array of Boxes that should be handled in the call. So the boxes on the Conveyor
            _boxes : ARRAY[BOXES_LOWER_LIMIT..BOXES_UPPER_LIMIT] OF BasicBox;
            /// Size of array 'Boxes'
            _boxesArraySize : DINT := BOXES_UPPER_LIMIT  - BOXES_LOWER_LIMIT + DINT#1 ;
            
            // Conveyor specific control variables
            /// Rising edge detection for moving conveyor
            _moveTrigger : RisingEdge;
            /// Rising edge detection for add box
            _addBoxTrigger : RisingEdge;
            /// Conveyor control with SinaPos drives
            _conveyorControl : ITransportDevice;
            
            // Movement control variables
            /// Increment for Moving the boxes to the next position
            _moveIncrement : INT;
            /// Last conveyor position
            _lastConveyorPos : INT := INT#0;
            /// Input Index for next box
            _boxInputIndex  : DINT := DINT#6;
            /// Backward mode enabled
            _conveyorBackwardsEn : BOOL := FALSE;
        END_VAR        
        
        VAR CONSTANT
            BOXES_UPPER_LIMIT : DINT := DINT#6;
            BOXES_LOWER_LIMIT : DINT := DINT#0;
        END_VAR

        /// Constructor - Initializes the conveyor station with control interface and settings
        /// @param stationID: Unique identifier for this station
        /// @param stationPosLeft: Position of station in relation to left reference
        /// @param moveIncrement: Distance increment for each box position movement (default: 128)
        /// @param conveyorControl: Interface to the conveyor transport device
        /// @param boxInputIndex: Index position for new box input (default: BOXES_UPPER_LIMIT)
        METHOD PUBLIC CONSTRUCTOR
            VAR_INPUT
                stationID : UINT;
                stationPosLeft : INT;
                moveIncrement : INT := INT#128;
                conveyorControl : ITransportDevice;
                boxInputIndex : DINT := BOXES_UPPER_LIMIT;
            END_VAR
            THIS.CONSTRUCTOR(stationID, stationPosLeft);
            _conveyorControl := conveyorControl;
            _moveIncrement := moveIncrement;  // Default move increment
            // Set new input index if within range
            IF boxInputIndex >= BOXES_UPPER_LIMIT THEN
                _boxInputIndex := BOXES_UPPER_LIMIT;
            ELSE
                _boxInputIndex := boxInputIndex;
            END_IF;
        END_METHOD

        /// Set conveyor control interface
        /// @param conveyorControl: Interface to the conveyor transport device
        METHOD PUBLIC SetConveyorControl
            VAR_INPUT
                conveyorControl : ITransportDevice;
            END_VAR
            _conveyorControl := conveyorControl;
        END_METHOD

        /// Implementation of station-specific reset operations.
        /// Clears conveyor-specific data during reset
        METHOD PROTECTED OVERRIDE onReset
            VAR_TEMP
                index : DINT;
            END_VAR
            // Clear all boxes after reset
            FOR index := BOXES_LOWER_LIMIT TO BOXES_UPPER_LIMIT DO
                _boxes[index].ClearData();
            END_FOR;
            _newBoxData.ClearData();
            _boxCount := INT#0;
            _moving := FALSE;
            _move := FALSE;
            _addBox := FALSE;
            _readyToRemoveBox := FALSE;
            _pendingBoxClear := FALSE;
        END_METHOD

        /// Clears error condition and resets to idle state.
        /// Also triggers new box addition in case there is one in line
        METHOD PROTECTED OVERRIDE clearError
            SUPER.clearError();
            // Re-trigger adding box in case box addition was not completed
            _addBox := _newBoxData.BoxData.isPresent;
        END_METHOD

        /// Set manual commands to be done during execute
        /// @param manualCommands: Commands to be executed manually on the elevator
        METHOD PUBLIC SetManualCommands 
            VAR_INPUT
                manualCommands : typeConveyorCommand;
            END_VAR
            // manualCommands.stop is not implemented
            IF manualCommands.moveForward THEN
                THIS.MoveIncrementForward();
            ELSIF manualCommands.moveBackward THEN 
                THIS.MoveIncrementBackward();
            END_IF;
        END_METHOD

        /// Sets the add box signal to add a new box at position 0
        /// @param newBox: IBasicBox interface containing the box data and triggers adding a new box
        /// @return: TRUE if box prepared to be added to the station. FALSE if rejected
        METHOD PUBLIC AddNewBox : BOOL
            VAR_INPUT
                newBox : IBasicBox;
            END_VAR
            IF newBox = NULL THEN
                AddNewBox := FALSE;
                RETURN;
            END_IF;
            // check if possible to add new box, or already waiting to add new box
            IF NOT (_newBoxData.BoxData.isPresent OR _boxes[_boxInputIndex].BoxData.isPresent) THEN
                _newBoxData.CONSTRUCT(newBox.GetBoxData());
                _newBoxData.BoxData.stationNr := _stationID;
                _newBoxData.BoxData.posLeft := _stationPosLeft;
                _addBox := TRUE;
                AddNewBox := TRUE;
            // Deny box addition
            ELSE
                AddNewBox := FALSE;
            END_IF;
        END_METHOD

        /// Checks if the station is ready to remove a box
        /// @return: TRUE if station has a box ready for removal, FALSE otherwise
        METHOD PUBLIC ReadyToRemoveBox : BOOL
            ReadyToRemoveBox := _readyToRemoveBox;
        END_METHOD

        /// Checks if the station is ready to receive a new box
        /// Station is ready when no box is present and elevator is at home position
        /// @return: TRUE if ready to receive a box, FALSE otherwise
        METHOD PUBLIC ReadyToReciveBox : BOOL
            ReadyToReciveBox := NOT (_boxes[_boxInputIndex].BoxData.isPresent OR _moving);
        END_METHOD

        /// Removes the box from the conveyor output position when ready
        /// Can only remove box when the station indicates it's ready for removal
        /// @return: Interface to the removed box, or invalid interface if no box to remove
        METHOD PUBLIC RemoveBox : IBasicBox
            IF _readyToRemoveBox THEN
                RemoveBox := _boxes[BOXES_LOWER_LIMIT];
                _boxCount := _boxCount - 1;
                _pendingBoxClear := TRUE;
                _readyToRemoveBox := FALSE;
            END_IF;
        END_METHOD

        // Conveyor specific property getters
        /// Gets the moving status of the conveyor station
        /// @return: TRUE if conveyor is currently moving, FALSE if stationary
        METHOD PUBLIC GetIsMoving : BOOL
            GetIsMoving := _moving;
        END_METHOD

        /// Initiates an incremental movement operation on the conveyor
        /// Sets the conveyor to moving state to trigger box advancement
        /// This method can be used to manually trigger a single movement step
        METHOD PUBLIC MoveIncrementForward 
            IF _boxCount > 0 AND NOT _move THEN  
            _conveyorBackwardsEn := FALSE;
            _move := TRUE;
            END_IF;
        END_METHOD

        /// Initiates an incremental movement operation on the conveyor
        /// Sets the conveyor to moving state to trigger box advancement
        /// This method can be used to manually trigger a single movement step
        METHOD PUBLIC MoveIncrementBackward 
            IF _boxCount > 0 AND NOT _move THEN  
            _conveyorBackwardsEn := TRUE;
            _move := TRUE;
            END_IF;
        END_METHOD

        /// Gets the current number of boxes on the conveyor
        /// @return: Number of boxes currently present on the conveyor
        METHOD PUBLIC GetBoxCount : DINT
            GetBoxCount := _boxCount;
        END_METHOD

        /// Gets if the move action is completed
        /// Can be overridden so that other movement methods can be used, like SinaPos
        /// @return: TRUE if move action completed, FALSE if still moving
        METHOD PROTECTED moveDone : BOOL
            moveDone := _conveyorControl.GetIsDone();
        END_METHOD
        
        METHOD PUBLIC OVERRIDE Enable
            SUPER.Enable();
            _conveyorControl.Enable();
        END_METHOD

        
        METHOD PUBLIC OVERRIDE Disable
            SUPER.Disable();
            _conveyorControl.Disable();
        END_METHOD

        /// Updates box positions based on conveyor movement
        /// Calculates position delta and moves boxes forward while preventing collisions
        METHOD PROTECTED moveBoxForward
            VAR_TEMP
                deltaPos : INT;
                boxDataFront : typeBoxData;
                boxDataAct : typeBoxData;
                index : DINT;
            END_VAR
            deltaPos := _conveyorControl.GetActualPosition() - _lastConveyorPos;
            // updates all boxes positions. Output box should not move, so start at index 1
            FOR index := BOXES_LOWER_LIMIT + 1 TO _boxInputIndex BY 1 DO
                boxDataAct      := _boxes[index].BoxData;
                // Only continue checking if there is a box in the index
                IF boxDataAct.isPresent THEN
                    boxDataFront    := _boxes[index - 1].BoxData;
                    // Check if move is valid and will not conflict with a box in front of it. 
                    // In case there is no box in front, move increment is possible.
                    IF ((boxDataAct.posLeft + deltaPos + boxDataAct.width) <= boxDataFront.posLeft)
                        OR (NOT boxDataFront.isPresent) THEN
                        // Move the box one increment forward
                        _boxes[index].MoveIncrement(deltaPos);
                    END_IF;
                END_IF;
            END_FOR;
            //Update last position
            _lastConveyorPos := _conveyorControl.GetActualPosition();
        END_METHOD

        /// Updates box positions based on conveyor movement
        /// Calculates position delta and moves boxes backwards while preventing collisions
        METHOD PROTECTED moveBoxBackward
            VAR_TEMP
                deltaPos : INT;
                boxDataBack : typeBoxData;
                boxDataAct : typeBoxData;
                index : DINT; 
            END_VAR
            deltaPos := _lastConveyorPos - _conveyorControl.GetActualPosition();
            // Updates all boxes positions moving backwards. Start from output box (index 0)
            FOR index := BOXES_LOWER_LIMIT TO (_boxInputIndex - 1) BY 1 DO
                boxDataAct := _boxes[index].BoxData;
                // Only continue checking if there is a box in the index
                IF boxDataAct.isPresent THEN
                    boxDataBack := _boxes[index + 1].BoxData;
                    // Check if move is valid and will not conflict with a box behind it. 
                    // In case there is no box behind, move increment is possible.
                    IF ((boxDataAct.posLeft - deltaPos) >= (boxDataBack.posLeft + boxDataBack.width))
                        OR (NOT boxDataBack.isPresent) THEN
                        // Move the box one increment backward
                        _boxes[index].MoveIncrement(- deltaPos);
                    END_IF;
                END_IF;
            END_FOR;
            //Update last position
            _lastConveyorPos := _conveyorControl.GetActualPosition();
        END_METHOD

        /// Main execution method that handles the conveyor station logic
        /// This method should be called cyclically to process conveyor operations
        /// Handles state machine, box movement, error detection, and all conveyor functionality
        METHOD PUBLIC OVERRIDE Execute            
            VAR_TEMP
                /// Loop counter
                index : DINT;
            END_VAR
            // Initialize triggers
            _moveTrigger(signal := _move);
            _addBoxTrigger(signal := _addBox);
            // Handle common reset functionality
            THIS.handleReset();
            // Main state machine
            CASE _state OF
                typeStationState#STATE_IDLE: // Idle State
                    THIS.handleIdleState();
                    _moving := FALSE;
                    // Act when station is ready
                    IF _ready THEN
                        // Handle add box request
                        IF _addBoxTrigger.detected  THEN 
                            IF _boxCount < _boxesArraySize THEN
                                // Check if last position is free
                                IF NOT _boxes[_boxInputIndex].BoxData.isPresent THEN 
                                    // Add new box to the end of the array 
                                    _boxes[_boxInputIndex].CONSTRUCT(_newBoxData);      
                                    _newBoxData.ClearData(); // Clear newBoxData for next box addition                             
                                    _boxCount := _boxCount + DINT#1;
                                ELSE
                                    THIS.setError(typeStationStatus#ERR_INPUT_POSITION_OCUPIED); // Add Position occupied
                                END_IF;
                            ELSE
                                THIS.setError(typeStationStatus#ERR_CONV_FULL); // Conveyor full
                            END_IF;
                        END_IF;
                        // Handle step movement request
                        IF _moveTrigger.detected THEN
                            IF  (_boxCount < (_boxInputIndex + 1)) THEN
                                IF _conveyorBackwardsEn THEN
                                    _state := typeStationState#STATE_MOVING_BACKWARD; // Go to moving state
                                    _conveyorControl.PosRelative( - _moveIncrement);
                                    _moving := TRUE;
                                ELSE
                                    _state := typeStationState#STATE_MOVING_FORWARD; // Go to moving state
                                    _conveyorControl.PosRelative(   _moveIncrement);
                                    _moving := TRUE;
                                END_IF;
                            END_IF;
                        END_IF;
                        // Pending clear box
                        IF _pendingBoxClear THEN
                            _boxes[BOXES_LOWER_LIMIT].ClearData();
                            _pendingBoxClear:= FALSE;
                        END_IF;
                        // Check if there's a box at output position and set ready to remove flag
                        IF _boxes[BOXES_LOWER_LIMIT].BoxData.isPresent THEN
                            _readyToRemoveBox := TRUE;
                        END_IF;
                    END_IF;
                    
                typeStationState#STATE_MOVING_FORWARD: // Moving Forward State
                    _moving := TRUE;
                    _ready := FALSE;
                    _busy := TRUE;
                    // Call for Control module control
                    THIS.moveBoxForward();
                    // Wait for movement timer
                    IF THIS.moveDone() THEN 
                        // Move all boxes one position forward
                        // Start from the end to avoid overwriting
                        FOR index := BOXES_LOWER_LIMIT TO (_boxInputIndex - 1) BY 1 DO
                            IF _boxes[index + 1].BoxData.isPresent THEN
                                // Check if target position is free
                                IF NOT _boxes[index].BoxData.isPresent THEN
                                    // Move box forward
                                    _boxes[index] := _boxes[index + 1];                              
                                    // Clear previous position
                                    _boxes[index + 1].ClearData();
                                END_IF;
                            END_IF;
                        END_FOR;
                        _state := typeStationState#STATE_IDLE; // Return to idle state
                    END_IF;

                typeStationState#STATE_MOVING_BACKWARD: // Moving Backward State //TODO: possible to combine with foward?
                    _moving := TRUE;
                    _ready := FALSE;
                    _busy := TRUE;
                    // Call for Control module control
                    THIS.moveBoxBackward();
                    // Wait for movement timer
                    IF THIS.moveDone() THEN
                        // Move all boxes one position backward
                        FOR index := (_boxInputIndex) TO (BOXES_LOWER_LIMIT + 1) BY -1 DO
                            IF _boxes[index - 1].BoxData.isPresent THEN
                                // Check if target position is free. Next entry in case of colision
                                IF _boxes[index].BoxData.isPresent THEN 
                                    CONTINUE;
                                END_IF;
                                // Move box backward
                                _boxes[index] := _boxes[index - 1];
                                // Clear previous position
                                _boxes[index - 1].ClearData();
                            END_IF;
                        END_FOR;
                        // Return to idle state
                        _state := typeStationState#STATE_IDLE; 
                    END_IF; 

                typeStationState#STATE_ERROR_ON: // Error State
                    THIS.handleErrorState();
                    _moving := FALSE;   
            END_CASE;
            // Call overwritable call for moving the system
            _conveyorControl.Execute();
            // Reset trigger variables, so that if the variable is not being set, the trigger can be triggered
            THIS.resetTriggers();
        END_METHOD

        /// Resets trigger variables to allow new triggers to be detected
        /// Called at end of execution cycle to clear trigger flags
        METHOD PROTECTED resetTriggers
            _move := FALSE;
            _addBox := FALSE;
        END_METHOD
        
        /// Get from an array of boxes, all boxes data
        /// @return: Array of all box data
        METHOD PUBLIC GetAllBoxData : ARRAY[0.. BOXES_UPPER_LIMIT] OF SortingMachine.typeBoxData
            VAR_TEMP
                /// Temporary Iterator
                index : DINT;
            END_VAR
            FOR index := BOXES_LOWER_LIMIT TO BOXES_UPPER_LIMIT DO
                GetAllBoxData[index] := _boxes[index].BoxData;
            END_FOR;
        END_METHOD

        /// Get from an array of boxes, a box data at specific index
        /// @param index: Index of the box to retrieve data from
        /// @return: Box data at the specified index
        METHOD PUBLIC GetBoxDataAtIndex : typeBoxData
            VAR_INPUT
                index : DINT;
            END_VAR
            GetBoxDataAtIndex := _boxes[index].BoxData;
        END_METHOD

        /// Sets the movement increment value for box positioning
        /// @param increment: Distance increment for each box position movement
        METHOD PUBLIC SetMoveIncrement
            VAR_INPUT
                increment : INT;
            END_VAR
            _moveIncrement := increment;
        END_METHOD

        /// Gets the current movement increment value
        /// @return: Current movement increment used for box positioning
        METHOD PUBLIC GetMoveIncrement : INT
            GetMoveIncrement := _moveIncrement;
        END_METHOD
    END_CLASS
END_NAMESPACE