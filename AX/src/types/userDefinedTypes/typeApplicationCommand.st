NAMESPACE SortingMachine
    /// Command structure for application control and operation modes
    /// External interface for controlling the sorting machine operation
    TYPE 
        {S7.Extern = ReadWrite}
        typeApplicationCommand : STRUCT 
            /// Switch to automatic operation mode
            automatic       : BOOL;
            /// Switch to manual operation mode
            manual          : BOOL;
            /// Acknowledge errors or alarms
            acknowledge     : BOOL;
            /// Enable simulation mode for testing
            simulationMode  : BOOL;
            /// Generate a new box with random properties
            newBoxRandom    : BOOL;
            /// Generate a new box of type X (color 1)
            newBoxX         : BOOL;
            /// Generate a new box of type Y (color 2)
            newBoxY         : BOOL;
            /// Reset all systems to initial state
            resetAll        : BOOL;
        END_STRUCT;
    END_TYPE
END_NAMESPACE