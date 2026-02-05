NAMESPACE SortingMachine
    /// Status interface structure for station monitoring
    /// Provides error flag and detailed status code for station state
    TYPE 
        {S7.Extern = Read}
        typeStatusInterface : STRUCT
            /// General error flag - TRUE if any error condition exists
            error : BOOL;
            /// Detailed status code - see typeStationStatus enumeration for specific values
            status: WORD;
        END_STRUCT;
    END_TYPE
END_NAMESPACE