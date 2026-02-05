NAMESPACE SortingMachine
    /// Enumeration for elevator vertical position states
    /// Defines the valid positions an elevator can occupy in the sorting machine
    TYPE
        typeElevatorPosition : (
            /// Undefined position - Initial or error state
            UNDEF, 
            /// Home position - Base level or starting position
            HOME, 
            /// Work position 1 - First operational level
            WORK_POS_1, 
            /// Work position 2 - Second operational level
            WORK_POS_2
        ) := UNDEF;
    END_TYPE    
END_NAMESPACE