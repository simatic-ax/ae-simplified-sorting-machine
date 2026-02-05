USING System.Math;

NAMESPACE ControlModules

    /// Simulated conveyor class for transport operations without hardware dependency
    /// Extends TransportDevice to provide simulated drive control functionality
    /// Similar to ConveyorSinaPos but uses increment-based movement simulation like Elevator
    CLASS ConveyorSim
        EXTENDS TransportDevice
        //=============================================================================
        //SIEMENS AG
        //(c)Copyright 2025 All Rights Reserved
        //-----------------------------------------------------------------------------
        //Tested with:   S7-1500 FW V4.0 
        //Engineering:   SIMATIC AX Logic Control Engineering
        //Requirements:  none
        //Functionality: Simulation of a conveyor control module 
        //-----------------------------------------------------------------------------
        //Change log table:
        //Version  Date       Expert in charge                Changes applied
        //01.00.00 28.11.2025 Siemens Industry Online Support First Release 
        //=============================================================================
        VAR PROTECTED
            /// Movement increment per execution cycle
            _cycleIncrement : INT := DEFAULT_CYCLE_INCREMENT;
            /// Stores last velocity for positioning commands
            _lastVelocity : INT := INT#0;
            /// Enable the movement simulation
            _moveEnable : BOOL := FALSE;
            /// Direction of movement for relative positioning
            _moveDirection : INT := INT#1; // 1 for positive, -1 for negative
            /// Target position for absolute positioning
            _targetPosition : INT := INT#0;
            /// Flag indicating if positioning is active
            _positioningActive : BOOL := FALSE;
            /// Mode of operation (similar to SinaPos modes)
            _operationMode : typeConveyorModuleMode := typeConveyorModuleMode#IDLE;
        END_VAR
        VAR CONSTANT
            /// Default cycle increment for movement simulation
            DEFAULT_CYCLE_INCREMENT : INT := INT#10;
        END_VAR
        /// Configures the simulated conveyor parameters
        /// @param cycleIncrement: Movement increment per execution cycle (absolute value will be used)

        METHOD PUBLIC SetConfig
            VAR_INPUT
                cycleIncrement : INT := INT#10;
            END_VAR
            _cycleIncrement := ABS(cycleIncrement);
        END_METHOD
        /// Stops the simulated conveyor and disables all commands
        /// Clears all pending commands and disables movement

        METHOD PUBLIC OVERRIDE Stop
            THIS.clearCommands();
        END_METHOD
        /// Moves the simulated drive at a specified constant velocity
        /// Simulates continuous movement in positive direction
        /// @param velocity: Velocity in LU (Length Units) for the drive (sign determines direction)
        /// @return: TRUE if movement command was accepted, FALSE otherwise

        METHOD PUBLIC OVERRIDE MoveVelocity : BOOL
            VAR_INPUT
                velocity : INT;
            END_VAR
            // Clear possible remaining commands before triggering new commands
            THIS.clearCommands();
            // Set operation mode and parameters for velocity movement
            _operationMode := typeConveyorModuleMode#JOG;
            _lastVelocity := ABS(velocity); // Store absolute velocity
            // Determine direction based on velocity sign
            IF velocity >= 0 THEN
                _moveDirection := INT#1;
            ELSE
                _moveDirection := INT#-1;
            END_IF;
            // Set feedback variables
            _moveEnable := TRUE;
            _done := FALSE;
            MoveVelocity := _moveEnable;
        END_METHOD
        /// Executes a relative positioning movement
        /// Moves the drive by a specified increment from current position
        /// @param posIncrement: Position increment in LU to move relative to current position
        /// @param velocity: Velocity for the movement (uses last velocity if 0)
        /// @return: TRUE if movement command was accepted, FALSE otherwise

        METHOD PUBLIC OVERRIDE PosRelative : BOOL
            VAR_INPUT
                posIncrement : INT;
                velocity : INT := INT#0;
            END_VAR
            // Clear actual commands before starting new command
            THIS.clearCommands();
            // Use velocity input in case a velocity is given
            IF velocity <> INT#0 THEN
                _lastVelocity := ABS(velocity);
            END_IF;
            // Set parameters for relative positioning
            _operationMode := typeConveyorModuleMode#RELATIVE_POSITIONING;
            _targetPosition := _actualPos + posIncrement;
            // Determine direction based on increment sign
            IF posIncrement >= 0 THEN
                _moveDirection := INT#1;
            ELSE
                _moveDirection := INT#-1;
            END_IF;
            // Set feedback variables
            _positioningActive := TRUE;
            _moveEnable := TRUE;
            _done := FALSE;
            PosRelative := _moveEnable;
        END_METHOD
        /// Executes an absolute positioning movement
        /// Moves the drive to a specified absolute position
        /// @param targetPos: Target position for the movement
        /// @return: TRUE if movement command was accepted, FALSE otherwise

        METHOD PUBLIC OVERRIDE PosAbsolute : BOOL
            VAR_INPUT
                targetPos : INT;
                velocity : INT := INT#0;
            END_VAR
            // Clear actual commands before starting new command
            THIS.clearCommands();
            // Set parameters for absolute positioning
            _operationMode := typeConveyorModuleMode#ABSOLUTE_POSITIONING;
            _targetPosition := targetPos;
            // Determine direction based on target vs current position
            IF targetPos >= _actualPos THEN
                _moveDirection := INT#1;
            ELSE
                _moveDirection := INT#-1;
            END_IF;
            // Use velocity input in case a velocity is given
            IF velocity <> INT#0 THEN
                _lastVelocity := ABS(velocity);
            END_IF;
            _positioningActive := TRUE;
            _moveEnable := TRUE;
            _done := FALSE;
            PosAbsolute := TRUE;
        END_METHOD
        /// Sets the current position as the home/reference position
        /// Simulates homing by setting current position to zero

        METHOD PUBLIC SetHomePosition
            THIS.clearCommands();
            _actualPos := INT#0;
            _operationMode := typeConveyorModuleMode#SET_HOME_POSITION;
        END_METHOD
        /// Checks if the drive axis has been referenced/homed
        /// For simulation, always returns TRUE as homing is instant
        /// @return: TRUE (always referenced in simulation)

        METHOD PUBLIC IsHomed : BOOL
            IsHomed := TRUE; // Always homed in simulation
        END_METHOD
        /// Gets the completion status of positioning operations
        /// @return: TRUE if positioning operation is completed, FALSE if still moving

        METHOD PUBLIC OVERRIDE GetIsDone : BOOL
            GetIsDone := _done;
        END_METHOD
        /// Clears all active commands and resets drive parameters
        /// Used internally when starting a new command to prevent conflicts

        METHOD PROTECTED clearCommands
            _moveEnable := FALSE;
            _positioningActive := FALSE;
            _operationMode := typeConveyorModuleMode#IDLE;
            _moveDirection := INT#1;
        END_METHOD
        /// Executes the simulated conveyor control logic cyclically
        /// Simulates movement by incrementing position values
        /// This method should be called in every cycle of the main program

        METHOD PUBLIC OVERRIDE Execute
            VAR_TEMP
                increment : INT := INT#0;
                positionDifference : INT := INT#0;
            END_VAR
            // Handle error acknowledgment
            IF _ackError THEN
                _error := FALSE;
                _status := typeTransportDeviceBaseStatus#STATUS_NO_CALL;
                _ackError := FALSE;
            END_IF;
            // Only move if enabled and movement is active
            IF _enable AND _moveEnable AND NOT _error THEN
                CASE _operationMode OF
                    typeConveyorModuleMode#IDLE:
                        // Idle mode - no movement
                        _status := typeTransportDeviceBaseStatus#STATUS_IDLE;
                        _done := TRUE;
                        _moveEnable := FALSE;
                    typeConveyorModuleMode#JOG:
                        // Continuous movement based on velocity
                        increment := _moveDirection * _cycleIncrement;
                        _actualPos := _actualPos + increment;
                        _done := FALSE; // Jog mode never completes
                        _status := typeTransportDeviceBaseStatus#STATUS_MOVING;
                    typeConveyorModuleMode#RELATIVE_POSITIONING, typeConveyorModuleMode#ABSOLUTE_POSITIONING:
                        // Positioning movement towards target
                        IF _positioningActive THEN
                            positionDifference := _targetPosition - _actualPos;
                            _status := typeTransportDeviceBaseStatus#STATUS_POSITIONING;
                            // Check if target is reached
                            IF ABS(positionDifference) <= _cycleIncrement THEN
                                // Target reached - set exact position and stop
                                _actualPos := _targetPosition;
                                _moveEnable := FALSE;
                                _positioningActive := FALSE;
                                _done := TRUE;
                                _operationMode := typeConveyorModuleMode#IDLE;
                            ELSE
                                // Continue moving towards target
                                increment := _moveDirection * _cycleIncrement;
                                _actualPos := _actualPos + increment;
                                _done := FALSE;
                            END_IF;
                        END_IF;
                    typeConveyorModuleMode#SET_HOME_POSITION:
                        // Home position setting is instant in simulation
                        _operationMode := typeConveyorModuleMode#IDLE;
                        _done := TRUE;
                END_CASE;
            ELSE
                // Not enabled or error - ensure stopped state
                _moveEnable := FALSE;
                _positioningActive := FALSE;
            END_IF;
        END_METHOD
    END_CLASS

END_NAMESPACE
