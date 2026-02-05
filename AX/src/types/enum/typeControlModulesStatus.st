
NAMESPACE ControlModules
    /// Base enumeration for common transport device status codes
    /// Provides standardized status and error codes shared across all control modules
    TYPE typeTransportDeviceBaseStatus : WORD
        (
            // Normal operation status codes (0x7000 range)
            /// No job being currently processed
            STATUS_NO_CALL                  := WORD#16#7000,    
            /// Device is initialized and ready
            STATUS_IDLE                     := WORD#16#7001,
            /// Device is currently moving
            STATUS_MOVING                   := WORD#16#7002,    // Device is currently moving
            /// Device is positioning to target
            STATUS_POSITIONING              := WORD#16#7003,    // Device is positioning to target
            /// Device has reached target position
            STATUS_AT_TARGET                := WORD#16#7004,    
            /// Device is performing homing operation
            STATUS_HOMING                   := WORD#16#7005,    
            /// Device has completed homing
            STATUS_HOMED                    := WORD#16#7006,    
            /// Device is enabled for operation
            STATUS_ENABLED                  := WORD#16#7007,    
            /// Device is disabled
            STATUS_DISABLED                 := WORD#16#7008,    
                        
            // Common error status codes (0x8000 range)
            /// Error: command is not supported or implemented
            ERR_COMMAND_NOT_SUPPORTED       := WORD#16#8001,    
            /// Error: device is not enabled for operation
            ERR_DEVICE_NOT_ENABLED          := WORD#16#8002,    
            /// Error: Target position is outside of defined limits
            ERR_TARGET_OUT_OF_LIMITS        := WORD#16#8200,    
            /// Error: Movement operation timed out
            ERR_MOVEMENT_TIMEOUT            := WORD#16#8201,    
            /// Error: Position feedback error
            ERR_POSITION_FEEDBACK_FAULT     := WORD#16#8202,    
            /// Error: Drive hardware fault
            ERR_DRIVE_FAULT                 := WORD#16#8203,    
            /// Error: Communication error with drive
            ERR_COMMUNICATION_FAULT         := WORD#16#8204,    
            /// Error: Invalid configuration parameters
            ERR_CONFIGURATION_INVALID       := WORD#16#8205,    
            /// Error: Emergency stop activated
            ERR_EMERGENCY_STOP              := WORD#16#8206,    
            /// Error: Collision detection triggered
            ERR_COLLISION_DETECTED          := WORD#16#8207    
        ) := STATUS_NO_CALL;
        END_TYPE
END_NAMESPACE