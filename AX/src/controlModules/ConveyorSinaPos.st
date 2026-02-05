USING Simatic.Ax.Sinamics;

NAMESPACE ControlModules

    
    /// Class for controlling a SinaPos control module as a transport device
    /// Extends TransportDevice to provide Sinamics drive control functionality
    CLASS ConveyorSinaPos EXTENDS TransportDevice       
        //=============================================================================
        //SIEMENS AG
        //(c)Copyright 2025 All Rights Reserved
        //-----------------------------------------------------------------------------
        //Tested with:   S7-1500 FW V4.0 
        //Engineering:   SIMATIC AX Logic Control Engineering
        //Requirements:  none
        //Functionality: Conveyor control with Sinamics drive using SinaPos telegram 
        //-----------------------------------------------------------------------------
        //Change log table:
        //Version  Date       Expert in charge                Changes applied
        //01.00.00 28.11.2025 Siemens Industry Online Support First Release 
        //============================================================================= 
        VAR PROTECTED
            _sinaPosDrive   : SinaPos;              // Sina Pos FB call to control the drive
            _lastVelocity   : INT       := INT#0;   // Stores last velocity for positioning commands
        END_VAR
        
        /// Configures the SinaPos drive parameters and hardware connections
        /// @param configSinaPos: Configuration for axis parameters
        /// @param hwidSTW: Hardware ID of the SIMATIC S7-1200/1500 setpoint slot
        /// @param hwidZSW: Hardware ID of the SIMATIC S7-1200/1500 actual value slot
        /// @param mode: Set Sina Pos mode of operation
        METHOD PUBLIC SetConfigSina
            VAR_INPUT
                configSinaPos : SinaPosConfiguration;
                hwidSTW : UINT;
                hwidZSW : UINT;
                mode : SinaPosMode;
            END_VAR
            _sinaPosDrive.config := configSinaPos;
            _sinaPosDrive.hwidSTW := hwidSTW;
            _sinaPosDrive.hwidZSW := hwidZSW;
            _sinaPosDrive.mode := mode;
        END_METHOD

        /// Stops the SinaPos drive and disables all commands
        /// Clears all pending commands and disables the drive
        METHOD PUBLIC OVERRIDE Stop
            THIS.clearCommands();
            _enable := FALSE;
        END_METHOD

        /// Moves the drive at a specified constant velocity
        /// Sets the drive to jog mode and starts continuous movement
        /// @return: TRUE if movement command was accepted, FALSE otherwise
        METHOD PUBLIC OVERRIDE MoveVelocity : BOOL
            VAR_INPUT
                velocity    : INT;
            END_VAR
            // Clear possible remaining commands befor triggering new commands
            THIS.clearCommands();
            // Set Velocity and jog mode to run as Move velocity
            _sinaPosDrive.mode := SinaPosMode#Jog;
            _sinaPosDrive.velocity := velocity;
            _sinaPosDrive.jog1 := TRUE;
            MoveVelocity := TRUE;
        END_METHOD

        /// Executes a relative positioning movement
        /// Moves the drive by a specified increment from current position
        /// @param posIncrement: Position increment in LU to move relative to current position
        /// @param velocity: Velocity for the movement (uses last velocity if 0)
        /// @return: TRUE if movement command was accepted, FALSE otherwise
        METHOD PUBLIC OVERRIDE PosRelative : BOOL
            VAR_INPUT
                posIncrement   : INT;
                velocity    : INT   := INT#0;
            END_VAR
            // Clear actual commands before starting new command
            THIS.clearCommands();
            // Use velocity input incase no velocity is given
            IF (NOT (velocity = INT#0)) THEN
                _lastVelocity := velocity;
            END_IF;
            // Set Sina pos parameters for relative positioning
            _sinaPosDrive.mode := SinaPosMode#RelativePositioning;
            _sinaPosDrive.position := posIncrement;
            _sinaPosDrive.velocity := _lastVelocity; 
            _sinaPosDrive.executeMode := TRUE;
            PosRelative := TRUE;
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
            // Use velocity input incase no velocity is given
            IF (NOT (velocity = INT#0)) THEN
                _lastVelocity := velocity;
            END_IF;
            // Set Sina pos parameters for relative positioning
            _sinaPosDrive.mode := SinaPosMode#AbsolutePositioning;
            _sinaPosDrive.position := targetPos;
            _sinaPosDrive.velocity := _lastVelocity; 
            _sinaPosDrive.executeMode := TRUE;
            PosAbsolute := TRUE;
        END_METHOD


        /// Sets the current position as the home/reference position
        /// Establishes the current drive position as the zero reference point
        METHOD PUBLIC SetHomePosition
            THIS.clearCommands();
            _sinaPosDrive.mode := SinaPosMode#SetHomePosition;
            _sinaPosDrive.executeMode := TRUE;
        END_METHOD


        /// Checks if the drive axis has been referenced/homed
        /// @return: TRUE if axis is referenced and ready for positioning, FALSE otherwise
        METHOD PUBLIC IsHomed : BOOL
            IsHomed := _sinaPosDrive.axisReferenced;
        END_METHOD

        /// Clears all active commands and resets drive parameters
        /// Used internally when starting a new command to prevent conflicts
        METHOD PROTECTED clearCommands 
            _sinaPosDrive.position := INT#0;
            _sinaPosDrive.jog1 := FALSE;
            _sinaPosDrive.jog2 := FALSE;
            _sinaPosDrive.executeMode := FALSE;
        END_METHOD
        
        /// Executes the SinaPos drive control logic cyclically
        /// Calls the SinaPos function block and updates status information
        /// This method should be called in every cycle of the main program
        METHOD PUBLIC OVERRIDE Execute
            // Call Sina Pos FB for Drive control and feedback
            _sinaPosDrive(
                enableAxis := _enable, 
                AcknowledgeError := _ackError,
                error => _error,
                status => _status,
                axisPositionOk => _done
                );
            // Get feedback from Drive call
            _actualPos := TO_INT(_sinaPosDrive.actualPosition); // Sina Pos gets the Value in DINT with LU units
            // Reset acknowledge error flag after processing
            IF _ackError AND  NOT _sinaPosDrive.error THEN
                _ackError := FALSE;
                _status := typeTransportDeviceBaseStatus#STATUS_NO_CALL;
            END_IF;
            IF _done THEN
                THIS.clearCommands();
            END_IF;
        END_METHOD
    END_CLASS
END_NAMESPACE