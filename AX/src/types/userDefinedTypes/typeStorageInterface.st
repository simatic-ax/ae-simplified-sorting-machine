NAMESPACE SortingMachine
    /// Storage interface structure for inventory tracking
    /// Provides real-time counts of stored boxes by type and total
    TYPE 
        {S7.Extern = Read}
        typeStorageInterface : STRUCT
            /// Total number of boxes in storage (totalBoxes = totalBoxesX + totalBoxesY)
            totalBoxes : INT;
            /// Total number of type X boxes (color 1) currently stored
            totalBoxesX : INT;
            /// Total number of type Y boxes (color 2) currently stored
            totalBoxesY : INT;
        END_STRUCT;
    END_TYPE
END_NAMESPACE