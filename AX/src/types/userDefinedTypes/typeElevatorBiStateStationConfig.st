NAMESPACE SortingMachine
    /// Configuration structure for bi-state elevator station parameters
    /// Defines operating conditions, position limits, and precision settings
    TYPE 
        typeElevatorBiStateStationConfig : STRUCT
            /// Condition criteria for moving elevator to upper position (e.g., box color)
            ConditionUp         : WSTRING;
            /// Condition criteria for moving elevator to lower position (e.g., box color)
            ConditionDown       : WSTRING;
            /// Upper position limit - maximum allowed position value
            PositionUpLimit     : INT;
            /// Lower position limit - minimum allowed position value
            PositionDownLimit   : INT;
            /// Home position - reference position for elevator initialization
            PositionHome        : INT;
            /// Precision offset for position tolerance - allowable deviation from target position
            PrecisionOffset     : INT;     
        END_STRUCT;
    END_TYPE    
    
END_NAMESPACE