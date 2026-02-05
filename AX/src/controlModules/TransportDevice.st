
NAMESPACE ControlModules
    /// Transport device class for controlling movement and positioning
    /// Used in sorting machine applications to handle material transport
    CLASS ABSTRACT TransportDevice IMPLEMENTS ITransportDevice
        //=============================================================================
        //SIEMENS AG
        //(c)Copyright 2025 All Rights Reserved
        //-----------------------------------------------------------------------------
        //Tested with:   S7-1500 FW V4.0 
        //Engineering:   SIMATIC AX Logic Control Engineering
        //Requirements:  none
        //Functionality: Basis abstract class for transport device control modules
        //-----------------------------------------------------------------------------
        //Change log table:
        //Version  Date       Expert in charge                Changes applied
        //01.00.00 28.11.2025 Siemens Industry Online Support First Release 
        //=============================================================================
        VAR PROTECTED
            /// Enable flag for device operation
            _enable : BOOL := FALSE;      
            /// Feedback flag for movement done
            _done : BOOL := FALSE;
            /// Current actual position of the transport device 
            _actualPos : INT := INT#0;   
            /// Target position for movement commands
            _targetPos : INT := INT#0;   
            /// Error flag indicating device fault state
            _error : BOOL := FALSE;      
            /// Acknowkledge Error during Execute
            _ackError : BOOL := FALSE;
            /// Status word containing device state information
            _status : typeTransportDeviceBaseStatus; 
        END_VAR
        /// Enables the transport device for operation
        /// Sets the internal enable flag to allow movement commands
        METHOD PUBLIC Enable
            _enable := TRUE;
        END_METHOD

        /// Disables the transport device for operation
        /// Sets the internal enable flag to disable movement commands
        METHOD PUBLIC Disable
            _enable := FALSE;
            _done := FALSE;
        END_METHOD

        /// Stops the transport device operation
        /// Disables the device by setting the enable flag to FALSE
        METHOD PUBLIC Stop
            _enable := FALSE;
            _done := FALSE;
        END_METHOD

        /// Acknowledges errors on the transport device
        /// Sets the internal error acknowledgment flag to clear error conditions
        METHOD PUBLIC AckError
            _ackError := TRUE;
        END_METHOD

        /// Gets the enable status of the transport device
        /// @return: TRUE if device is enabled, FALSE otherwise
        METHOD PUBLIC GetIsEnabled : BOOL
            GetIsEnabled := _enable;
        END_METHOD

        /// Gets the feedback status of the transport device
        /// @return: TRUE if movement is done, FALSE otherwise
        METHOD PUBLIC GetIsDone : BOOL
            GetIsDone := _done;
        END_METHOD

        /// Gets the actual position of the transport device
        /// @return: Actual position in INT
        METHOD PUBLIC GetActualPosition : INT
            GetActualPosition := _actualPos;
        END_METHOD


        /// Commands the transport device to move to a specified position (not supported in base class)
        /// @param targetPos: Target position for the movement command
        /// @return: FALSE (not supported in abstract base class)
        METHOD PUBLIC PosAbsolute : BOOL
            VAR_INPUT
                targetPos : INT;
                velocity : INT := INT#0;
            END_VAR
            _status := typeTransportDeviceBaseStatus#ERR_COMMAND_NOT_SUPPORTED;
            _error := TRUE;
            PosAbsolute := FALSE;
        END_METHOD

        /// Moves the drive at a specified constant velocity (not supported in base class)
        /// @param velocity: Velocity in LU (Length Units) for the drive
        /// @return: FALSE (not supported in abstract base class)
        METHOD PUBLIC MoveVelocity : BOOL
            VAR_INPUT
                velocity : INT;
            END_VAR
            _status := typeTransportDeviceBaseStatus#ERR_COMMAND_NOT_SUPPORTED;
            _error := TRUE;
            MoveVelocity := FALSE;
         END_METHOD
    
        /// Executes a relative positioning movement (not supported in base class)
        /// @param posIncrement: Position increment in LU to move relative to current position
        /// @param velocity: Velocity for the movement (uses last velocity if 0)
        /// @return: FALSE (not supported in abstract base class)
        METHOD PUBLIC PosRelative : BOOL
            VAR_INPUT
                posIncrement : INT;
                velocity : INT := INT#0;
            END_VAR
            _status := typeTransportDeviceBaseStatus#ERR_COMMAND_NOT_SUPPORTED;
            _error := TRUE;
            PosRelative := FALSE;
         END_METHOD
 

        /// Retrieves the current status of the transport device
        /// @return: Status word containing device state information
        METHOD PUBLIC GetStatus : WORD
            GetStatus := _status;
        END_METHOD

        /// Get is the transport device in error state
        /// @return: TRUE if device is in error state, FALSE otherwise
        METHOD PUBLIC GetIsError : BOOL
            GetIsError := _error;
        END_METHOD
        
        /// Executes the transport device control logic
        /// This method should be called cyclically in the main program loop
        /// Abstract method that must be implemented by derived classes
        METHOD PUBLIC ABSTRACT Execute
        END_METHOD

    END_CLASS

END_NAMESPACE