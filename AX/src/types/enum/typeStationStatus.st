NAMESPACE SortingMachine
    
    /// Enumeration for station status and error codes
    /// Provides standardized status reporting across all station types
    TYPE typeStationStatus : WORD
    (
        /// No active operation or error
        STATUS_NO_CALL                  := WORD#16#7000,
        
        /// Base Station Errors (0x8200 range)
        /// Error: Missing configuration - Constructor not called with required parameters
        ERR_MISSING_CONFIG              := WORD#16#8200,
        
        /// Conveyor Station Errors (0x8001-0x800F range)
        /// Error: Input position is already occupied by another box
        ERR_INPUT_POSITION_OCUPIED      := WORD#16#8001,
        /// Error: Conveyor is full and cannot accept more boxes
        ERR_CONV_FULL                   := WORD#16#8002,
        /// Error: No boxes available to remove from conveyor
        ERR_NO_BOXES_TO_REMOVE          := WORD#16#8003,
        /// Error: Collision detected during movement operation
        ERR_COLISION_DURING_MOVE        := WORD#16#8004,
        
        /// Elevator Station Errors (0x8010-0x801F range)
        /// Error: Unknown or unrecognized box type
        ERR_UNKWNON_BOX                 := WORD#16#8010
    ) := STATUS_NO_CALL;
    END_TYPE

    /// Enumeration for station state machine states
    /// Defines the operational states for station control logic
    TYPE typeStationState : INT
    (
        /// Idle state - Station ready for commands
        STATE_IDLE                      := INT#0,
        
        /// Conveyor States (1-20 range)
        /// State: Conveyor moving forward
        STATE_MOVING_FORWARD            := INT#1,
        /// State: Conveyor moving backward
        STATE_MOVING_BACKWARD           := INT#2,
        
        /// Elevator States (21-40 range)
        /// State: Elevator moving to target position
        STATE_MOVE_TO_TARGET_POS        := INT#21,
        /// State: Waiting for box to be removed
        STATE_WAIT_REMOVE_BOX           := INT#22,
        /// State: Moving to position to accept new box
        STATE_GO_TO_POS_FOR_NEW_BOX     := INT#23,
        
        /// Error state - Station in error condition (99)
        STATE_ERROR_ON                  := INT#99
    ) := STATE_IDLE;
    END_TYPE

END_NAMESPACE
