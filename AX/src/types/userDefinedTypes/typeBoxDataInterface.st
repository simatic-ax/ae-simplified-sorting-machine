NAMESPACE SortingMachine

    /// Data structure representing a box object in the sorting machine
    /// Contains all properties and state information for tracking boxes through the system
    TYPE
        {S7.Extern = Read}
        typeBoxData : STRUCT
            /// Unique identifier for the box instance
            id          : UINT;
            /// Station number where the box is currently located
            stationNr   : UINT;
            /// Quality status - TRUE if box is faulty, FALSE if OK
            isFaulty    : BOOL;
            /// Base color property of the box (e.g., Green: "0xFF21BA84", Blue: "0xFF1491EB")
            baseColor   : WSTRING;
            /// Left edge position of the box within its current station (in engineering units)
            posLeft     : INT;
            /// Physical width of the box (in engineering units)
            width       : INT;
            /// Visibility flag for MHI (Material Handling Interface) system - TRUE if box should be displayed
            isPresent  : BOOL;
        END_STRUCT;
    END_TYPE
    
END_NAMESPACE