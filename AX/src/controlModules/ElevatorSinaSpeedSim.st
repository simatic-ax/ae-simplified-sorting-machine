USING Simatic.Ax.Sinamics;

NAMESPACE ControlModules

    CLASS ElevatorSinaSpeedSim EXTENDS ElevatorSim
        //=============================================================================
        //SIEMENS AG
        //(c)Copyright 2025 All Rights Reserved
        //-----------------------------------------------------------------------------
        //Tested with:   S7-1500 FW V4.0 
        //Engineering:   SIMATIC AX Logic Control Engineering
        //Requirements:  none
        //Functionality: Elevator control with Sinamics drive using SinaSpeed telegram 
        //-----------------------------------------------------------------------------
        //Change log table:
        //Version  Date       Expert in charge                Changes applied
        //01.00.00 28.11.2025 Siemens Industry Online Support First Release 
        //=============================================================================
        VAR PROTECTED   
            /// Controller for Sina Speed supported telegrams
            _sinaSpeedDrive : SinaSpeed;
            /// Default Speed when none is given
            _defaultVelocity : INT;
        END_VAR
        /// Configures the SinaSpeed drive parameters and elevator limits
        /// @param sinaSpeedConfig: Configuration for SinaSpeed axis parameters
        /// @param sinaRefSpeed: Reference speed for the drive in engineering units
        /// @param hwidSTW: Hardware ID of the SIMATIC S7-1200/1500 setpoint slot
        /// @param hwidZSW: Hardware ID of the SIMATIC S7-1200/1500 actual value slot
        METHOD PUBLIC SetConfigSina
            VAR_INPUT
                sinaSpeedConfig : SinaSpeedConfiguration;
                sinaRefSpeed : REAL;
                defaultVelocity : INT;
                hwidSTW : UINT;
                hwidZSW : UINT;
            END_VAR
            // Set sina settings
            _sinaSpeedDrive.config := sinaSpeedConfig;
            _sinaSpeedDrive.referenceSpeed := sinaRefSpeed;
            _sinaSpeedDrive.hwidSTW := hwidSTW;
            _sinaSpeedDrive.hwidZSW := hwidZSW;
            _defaultVelocity := defaultVelocity;
        END_METHOD

        METHOD PUBLIC OVERRIDE Execute
            // Call SinaSpeed control to write and read data
            _sinaSpeedDrive(enableAxis := _enable AND _moveEnable, acknowledgeError :=  _ackError, 
            error => _error, status => _status);
            SUPER.Execute();
        END_METHOD
    
        METHOD PUBLIC OVERRIDE Disable
            SUPER.Disable();
            // Call SinaSpeed control to write and read data
            _sinaSpeedDrive(enableAxis := _enable AND _moveEnable, acknowledgeError :=  _ackError, 
            error => _error, status => _status);
        END_METHOD

        /// Commands the elevator to move upward continuously until upper limit is reached
        /// Enables movement without a specific target position
        /// @param velocity: Velocity for upward movement (absolute value will be used)
        METHOD PUBLIC OVERRIDE MoveUp
            VAR_INPUT
                velocity : INT;
            END_VAR
            VAR_TEMP
                velocityValue : INT;
            END_VAR
            // Do not move Up when at upper limit
            IF _actualPos >= _upperLimit THEN // TODO: error/warning? also in the super?
                RETURN;
            END_IF;
            // Set velocity for MoveVelocity with default or input velocity
            IF velocity = INT#0 THEN
                velocityValue := _defaultVelocity;
            ELSE
                velocityValue := System.Math.Abs(velocity);
            END_IF;
            // Call base method to handle most configuration
            SUPER.MoveUp();
            // Enable movement without target
            THIS.MoveVelocity(velocityValue);
        END_METHOD

        /// Commands the elevator to move downward continuously until lower limit is reached
        /// Enables movement without a specific target position
        /// @param velocity: Velocity for downward movement (absolute value will be used)
        METHOD PUBLIC OVERRIDE MoveDown
            VAR_INPUT
                velocity : INT;
            END_VAR
            VAR_TEMP
                velocityValue : INT;
            END_VAR
            // Do not move Down when at lower limit
            IF _actualPos <= _lowerLimit THEN // TODO: error/warning? also in the super?
                RETURN;
            END_IF;
            // Set velocity for MoveVelocity with default ot input velocity
            IF velocity = INT#0 THEN
                velocityValue := - _defaultVelocity;
            ELSE
                velocityValue := - System.Math.Abs(velocity);
            END_IF;
            // Call base mathod to handle most configuration
            SUPER.MoveDown();
            // Enable movement witout target
            THIS.MoveVelocity(velocityValue);
        END_METHOD

        
        METHOD PUBLIC OVERRIDE MoveVelocity : BOOL
            VAR_INPUT
                velocity : INT;
            END_VAR
            // Ge movement direction
            IF velocity >= INT#0 THEN
                _direction := DIRECTION_UP;
            ELSE
                _direction := DIRECTION_DOWN;
            END_IF;
            // Enable movement witout target
            _moveUntilLimit := TRUE;
            _moveEnable := TRUE;
            // Set speed to sina speed block
            _sinaSpeedDrive.speedSetpoint := velocity;
            MoveVelocity := TRUE;
        END_METHOD

        /// Get Diagnostics ID from Sina Speed for troubleshooting
        METHOD PUBLIC GetDiagId : WORD
            GetDiagId := _sinaSpeedDrive.diagnosticsId;
        END_METHOD
    END_CLASS
END_NAMESPACE