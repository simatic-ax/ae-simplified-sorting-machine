NAMESPACE SortingMachine
    /// Command structure for conveyor control operations
    /// External interface for controlling conveyor movement and speed
    TYPE 
        {S7.Extern = ReadWrite}
        typeConveyorCommand : STRUCT
            /// Command to move conveyor in forward direction
            moveForward : BOOL;
            /// Command to move conveyor in backward direction
            moveBackward : BOOL;
            /// Command to stop conveyor movement
            stop : BOOL;
            /// Target speed setpoint for conveyor operation (in engineering units)
            speed: INT;
        END_STRUCT;
    END_TYPE
END_NAMESPACE