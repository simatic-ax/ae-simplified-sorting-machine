NAMESPACE ControlModules

    INTERFACE ITransportDevice
        //=============================================================================
        //SIEMENS AG
        //(c)Copyright 2025 All Rights Reserved
        //-----------------------------------------------------------------------------
        //Tested with:   S7-1500 FW V4.0 
        //Engineering:   SIMATIC AX Logic Control Engineering
        //Requirements:  none
        //Functionality: Interface used for control modules implemented as transport devices
        //-----------------------------------------------------------------------------
        //Change log table:
        //Version  Date       Expert in charge                Changes applied
        //01.00.00 28.11.2025 Siemens Industry Online Support First Release 
        //=============================================================================

        /// Enables the transport device for operation
        /// Sets the internal enable flag to allow movement commands
        METHOD Enable
        END_METHOD

        /// Disables the transport device for operation
        /// Sets the internal enable flag to disable movement commands
        METHOD  Disable
        END_METHOD

        /// Stops the transport device operation
        /// Disables the device by setting the enable flag to FALSE
        METHOD  Stop
        END_METHOD

        /// Acknowledges errors on the transport device
        /// Sets the internal error acknowledgment flag to clear error conditions
        METHOD  AckError
        END_METHOD

        /// Gets the enable status of the transport device
        /// @return: TRUE if device is enabled, FALSE otherwise
        METHOD  GetIsEnabled : BOOL
        END_METHOD

        /// Gets the feedback status of the transport device
        /// @return: TRUE if movement is done, FALSE otherwise
        METHOD  GetIsDone : BOOL
        END_METHOD

        /// Gets the actual position of the transport device
        /// @return: Actual position in INT
        METHOD  GetActualPosition : INT
        END_METHOD

        /// Commands the transport device to move to a specified position
        /// @param targetPos: Target position for the movement command
        /// @return: TRUE if movement command was accepted (device enabled), FALSE otherwise
        METHOD  PosAbsolute : BOOL
            VAR_INPUT
                targetPos : INT;
                velocity : INT := INT#0;
            END_VAR

        END_METHOD

        /// Moves the drive at a specified constant velocity
        /// Sets the drive to jog mode and starts continuous movement
        /// @param velocity: Velocity in LU (Length Units) for the drive
        /// @return: TRUE if movement command was accepted (device enabled), FALSE otherwise
        METHOD MoveVelocity : BOOL
            VAR_INPUT
                velocity    : INT;
            END_VAR
        END_METHOD

        /// Executes a relative positioning movement
        /// Moves the drive by a specified increment from current position
        /// @param posIncrement: Position increment in LU to move relative to current position
        /// @param velocity: Velocity for the movement (uses last velocity if 0)
        /// @return: TRUE if movement command was accepted (device enabled), FALSE otherwise
        METHOD PosRelative : BOOL
            VAR_INPUT
                posIncrement   : INT;
                velocity    : INT   := INT#0;
            END_VAR
        END_METHOD

        /// Retrieves the current status of the transport device
        /// @return: Status word containing device state information
        METHOD  GetStatus : WORD
        END_METHOD

        /// Get is the transport device in error state
        /// @return: TRUE if device is in error state, FALSE otherwise
        METHOD  GetIsError : BOOL
        END_METHOD

        /// Executes the transport device control logic
        /// This method should be called cyclically in the main program loop
        /// Abstract method that must be implemented by derived classes
        METHOD Execute
        END_METHOD
    END_INTERFACE


END_NAMESPACE
