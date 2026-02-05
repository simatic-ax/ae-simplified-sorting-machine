NAMESPACE SortingMachine
    /// Command structure for elevator control operations
    /// External interface for controlling elevator vertical movement and positioning
    TYPE 
        {S7.Extern = ReadWrite}
        typeElevatorCommand : STRUCT
            /// Command to move elevator upward
            moveUp : BOOL;
            /// Command to move elevator downward
            moveDown : BOOL;
            /// Command to stop elevator movement
            stop : BOOL;
            /// Target position setpoint for elevator positioning (in engineering units)
            position : INT;
        END_STRUCT;
    END_TYPE
END_NAMESPACE
