NAMESPACE SortingMachine
    TYPE
        typeAutomaticModeCoordinatorStatus : WORD (
            // Status code definitions for automatic sequence operations
            /// No active call or operation
            STATUS_NO_CALL := WORD#16#7000,
            /// Automatic mode is currently disabled
            STATUS_AUTOMATIC_MODE_DISABLED := WORD#16#0001,
            /// Reset operation has been completed
            STATUS_RESET_COMPLETE := WORD#16#0002,
            
            // Error status codes
            /// One or more stations have reported a fault
            ERR_STATION_FAULT := WORD#16#8001,
            /// Unknown elevator position error
            ERR_UNKNOWN_ELEVATOR_POSITION := WORD#16#8002,
            /// General error condition
            ERR_GENERAL := WORD#16#8003
        ) := STATUS_NO_CALL;
    END_TYPE
    
END_NAMESPACE