NAMESPACE ControlModules

    /// Interface for elevator classes that extends ITransportDevice to add additional
    /// commands relevant for elevator operation
    INTERFACE IElevator extends ITransportDevice
        //=============================================================================
        //SIEMENS AG
        //(c)Copyright 2025 All Rights Reserved
        //-----------------------------------------------------------------------------
        //Tested with:   S7-1500 FW V4.0 
        //Engineering:   SIMATIC AX Logic Control Engineering
        //Requirements:  none
        //Functionality: Interface for Transport Devices used as elevators
        //-----------------------------------------------------------------------------
        //Change log table:
        //Version  Date       Expert in charge                Changes applied
        //01.00.00 28.11.2025 Siemens Industry Online Support First Release 
        //=============================================================================

        /// Commands the elevator to move upward continuously until upper limit is reached
        /// Enables movement without a specific target position
        /// @param velocity: Velocity for upward movement
        METHOD  MoveUp 
            VAR_INPUT
                velocity : INT;
            END_VAR
        END_METHOD

        /// Commands the elevator to move downward continuously until lower limit is reached
        /// Enables movement without a specific target position
        /// @param velocity: Velocity for downward movement
        METHOD  MoveDown
            VAR_INPUT
                velocity : INT;
            END_VAR
        END_METHOD
    END_INTERFACE
    
END_NAMESPACE