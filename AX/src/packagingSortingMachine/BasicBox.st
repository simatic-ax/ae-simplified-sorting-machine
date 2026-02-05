NAMESPACE SortingMachine
    /// Basic implementation of a Box in the sorting machine
    CLASS PUBLIC BasicBox IMPLEMENTS IBasicBox
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
        VAR PUBLIC 
            /// Box data with all relevant properties
            BoxData : typeBoxData;
        END_VAR

        /// Constructor to be called once and set variables
        METHOD PUBLIC CONSTRUCT
            VAR_INPUT
                id : UINT;
                baseColor : WSTRING;
                width   : INT;
                startPosition : INT;
            END_VAR
            BoxData.id := id;
            BoxData.baseColor := baseColor;
            BoxData.isPresent := TRUE;
            BoxData.width := width;
            BoxData.posLeft := startPosition;
            ;
        END_METHOD

        /// Constructor to be called once and set variables based on another Box properties
        METHOD PUBLIC CONSTRUCT
            VAR_IN_OUT
                newBox : BasicBox;
            END_VAR
            BoxData := newBox.BoxData;
            ;
        END_METHOD

        /// Constructor to be called once and set variables based on another Box properties
        METHOD PUBLIC CONSTRUCT
            VAR_INPUT
                newBox : typeBoxData;
            END_VAR
            BoxData := newBox;
            ;
        END_METHOD

        /// Clear all Data from _boxData 
        METHOD PUBLIC ClearData : BOOL
            BoxData.id := UINT#0;
            BoxData.stationNr := UINT#0;
            BoxData.isFaulty := FALSE;
            BoxData.baseColor := WSTRING#'';
            BoxData.posLeft := INT#0;
            BoxData.isPresent := FALSE;
            ;
        END_METHOD

        /// Move the Boxe using the inputed increment value
        METHOD PUBLIC MoveIncrement : INT
            VAR_INPUT
                increment : INT;
            END_VAR
            BoxData.posLeft := BoxData.posLeft + increment;
            MoveIncrement := BoxData.posLeft;
        END_METHOD

        /// Get Box internal Data
        /// Only used when data exchanged via Class interface and not using the class itself
        METHOD PUBLIC GetBoxData : typeBoxData
            GetBoxData := BoxData;
        END_METHOD
END_CLASS
    
    

END_NAMESPACE