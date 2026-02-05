USING System.Math;

NAMESPACE ControlModules

    /// Elevator class for vertical transport operations
    /// Extends TransportDevice to provide elevator-specific functionality for material handling
    CLASS ElevatorSim EXTENDS TransportDevice IMPLEMENTS IElevator
        //=============================================================================
        //SIEMENS AG
        //(c)Copyright 2025 All Rights Reserved
        //-----------------------------------------------------------------------------
        //Tested with:   S7-1500 FW V4.0 
        //Engineering:   SIMATIC AX Logic Control Engineering
        //Requirements:  none
        //Functionality: Simulation of an elevator control module 
        //-----------------------------------------------------------------------------
        //Change log table:
        //Version  Date       Expert in charge                Changes applied
        //01.00.00 28.11.2025 Siemens Industry Online Support First Release 
        //=============================================================================
        VAR PROTECTED
            /// Move positioning increment for each execute call
            _cycleIncrement : INT  := INT#10;
            /// Max upper value for actual position
            _upperLimit : INT  := INT#100;
            /// Min lower value for actual position
            _lowerLimit : INT  := INT#0;
            /// Direction of movement. TRUE for up and FALSE for down
            _direction : BOOL  := TRUE;
            /// Enable the Movement
            _moveEnable : BOOL  := FALSE;
            /// Movement without target enabled
            _moveUntilLimit : BOOL  := FALSE;
        END_VAR
        VAR CONSTANT
            DIRECTION_UP : BOOL  := TRUE;
            DIRECTION_DOWN : BOOL  := FALSE;
        END_VAR
        
        /// Configures the elevator movement parameters and position limits
        /// @param cycleIncrement: Movement increment per execution cycle (absolute value will be used)
        /// @param upperLimit: Maximum allowed position for elevator movement
        /// @param lowerLimit: Minimum allowed position for elevator movement
        METHOD PUBLIC SetConfigLimits
            VAR_INPUT
                cycleIncrement : INT;
                upperLimit : INT;
                lowerLimit : INT;
            END_VAR
            // Take Absolute value of increment
            _cycleIncrement := ABS(cycleIncrement);
            _upperLimit := upperLimit;
            _lowerLimit := lowerLimit;
            _actualPos := lowerLimit;
        END_METHOD

        /// Returns the inverted elevator position for HMI display (0 = up, 100 = down)
        /// Due to specific assembly crane SVG requirements
        /// @return: Inverted position value (100 - actual position)
        METHOD PUBLIC GetInvertedPosition : INT
            GetInvertedPosition := 100 - _actualPos;
        END_METHOD

        /// Commands the elevator to move upward continuously until upper limit is reached
        /// Enables movement without a specific target position
        /// @param velocity: Velocity for upward movement (optional, uses current if 0)
        METHOD PUBLIC MoveUp 
            VAR_INPUT
                velocity : INT;
            END_VAR
            // Enable movement witout target
            _moveUntilLimit := TRUE;
            _direction := DIRECTION_UP;
            _moveEnable := TRUE;
            // Set velocity if value given
            IF NOT (velocity = INT#0) THEN
                _cycleIncrement := velocity;
            END_IF;
        END_METHOD

        /// Commands the elevator to move downward continuously until lower limit is reached
        /// Enables movement without a specific target position
        /// @param velocity: Velocity for downward movement (optional, uses current if 0)
        METHOD PUBLIC MoveDown
            VAR_INPUT
                velocity : INT;
            END_VAR
            // Enable movement witout target
            _moveUntilLimit := TRUE;
            _direction := DIRECTION_DOWN;
            _moveEnable := TRUE;
            // Set velocity if value given
            IF NOT (velocity = INT#0) THEN
                _cycleIncrement := velocity;
            END_IF;
        END_METHOD

        
        /// Stops all elevator movement operations
        /// Disables both targeted and continuous movement modes
        METHOD PUBLIC OVERRIDE Stop
            _moveUntilLimit := FALSE;
            _moveEnable := FALSE;
        END_METHOD
        
        /// Commands the elevator to move to a specific target position
        /// Validates target position against configured limits and determines movement direction
        /// @param targetPos: Target position for the elevator movement
        /// @return: TRUE if movement command was accepted, FALSE if target is out of limits or error occurred
        METHOD PUBLIC  OVERRIDE PosAbsolute : BOOL
            VAR_INPUT
                targetPos : INT;
                velocity : INT := INT#0;
            END_VAR
            // Disable movement without target if active
            _moveUntilLimit := FALSE;
            // Define return value if operation not accepted
            PosAbsolute := FALSE;
            // If target position is outide of limits, trigger error.
            IF (targetPos < _lowerLimit) OR (targetPos > _upperLimit) THEN
                _error := TRUE;
                _status := typeTransportDeviceBaseStatus#ERR_TARGET_OUT_OF_LIMITS;
                RETURN;
            END_IF;
            // Set cycle increment velocity if velocity is unequal 0
            IF (velocity <> INT#0) THEN
                _cycleIncrement := velocity;
            END_IF;
            // Update target position
            _targetPos := targetPos;
            // Get the direction to move to
            IF _actualPos < _targetPos THEN
                _direction := DIRECTION_UP;
            ELSIF _actualPos > _targetPos THEN
                _direction := DIRECTION_DOWN;
            ELSE
                // Already at target, no movement needed
                _moveEnable := FALSE;
                _done := TRUE;
                RETURN;
            END_IF;
            // Enable flag for movement
            _moveEnable := TRUE;
            _done := FALSE;
            PosAbsolute := TRUE;
        END_METHOD

    
        /// Executes the elevator control logic cyclically
        /// Handles position updates, target reaching detection, and limit enforcement
        /// This method should be called in every cycle of the main program
        METHOD PUBLIC OVERRIDE Execute
            VAR_TEMP
                increment : INT := INT#0;
            END_VAR
            /// Resets pending error.
            IF _ackError THEN
                _error := FALSE;
                _status := typeTransportDeviceBaseStatus#STATUS_NO_CALL;
                _ackError := FALSE;
            END_IF;

            // Exit if module not enabled to run
            IF NOT (_enable AND _moveEnable AND NOT _error) THEN
                RETURN;
            END_IF;
            // Cycle increment direction adaption
            IF _direction = DIRECTION_UP THEN
                // Direction up, increment positive
                increment := _cycleIncrement;
            ELSE
                // Direction down, increment negative
                increment := - _cycleIncrement;
            END_IF;
            // Update the actual position adding the cycle increment
            _actualPos := _actualPos + increment;
            // Mode with Target is active
            IF NOT _moveUntilLimit THEN
                // If the target is reached OR it over/under shoot the value, set actual position 
                // as target position and stop movement
                IF (_actualPos = _targetPos)
                    OR (_direction = DIRECTION_UP AND _actualPos > _targetPos)
                    OR (_direction = DIRECTION_DOWN AND _actualPos < _targetPos) THEN
                    _actualPos := _targetPos;
                    _moveEnable := FALSE;
                    _done := TRUE;
                ELSE
                    _done := FALSE;
                END_IF;
            END_IF;
            // Get if Elevator is over the limit because of the cycle increment
            IF _actualPos > _upperLimit THEN
                _actualPos := _upperLimit;
                _moveEnable := FALSE;
            ELSIF _actualPos < _lowerLimit THEN
                _actualPos := _lowerLimit;
                _moveEnable := FALSE; 
            END_IF;
        END_METHOD
    END_CLASS
END_NAMESPACE