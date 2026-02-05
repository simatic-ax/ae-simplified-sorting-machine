NAMESPACE SortingMachine
    
    /// Data structure representing box properties and status
    /// Used for tracking boxes within the sorting machine system
    INTERFACE IBasicBox
        //=============================================================================
        //SIEMENS AG
        //(c)Copyright 2025 All Rights Reserved
        //-----------------------------------------------------------------------------
        //Tested with:   S7-1500 FW V4.0 
        //Engineering:   SIMATIC AX Logic Control Engineering
        //Requirements:  none
        //Functionality: Data structure representing box properties and status
        //-----------------------------------------------------------------------------
        //Change log table:
        //Version  Date       Expert in charge                Changes applied
        //01.00.00 28.11.2025 Siemens Industry Online Support First Release 
        //=============================================================================

        /// Constructor to be called once and set private variables
        METHOD CONSTRUCT
            VAR_INPUT
                id : UINT;
                baseColor : WSTRING;
                width   : INT;
                startPosition : INT;
            END_VAR
        END_METHOD

        /// Clear all Data from _boxData 
        METHOD  ClearData : BOOL
        END_METHOD

        /// Move the Boxe using the inputed increment value
        METHOD  MoveIncrement : INT
            VAR_INPUT
                increment : INT;
            END_VAR
        END_METHOD

        /// Get Box internal Data
        METHOD  GetBoxData : typeBoxData
        END_METHOD
    END_INTERFACE    
END_NAMESPACE