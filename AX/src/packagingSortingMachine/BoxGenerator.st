USING SortingMachine;
USING Siemens.Simatic.Crypto;

NAMESPACE SortingMachine

    /// Configuration structure for BoxGenerator
    TYPE 
        BoxGeneratorConfig : STRUCT
            /// Default width for generated boxes
            defaultWidth : INT := 50;
            /// Default start position for generated boxes
            defaultStartPosition : INT := 0;
            /// Color code for X-type boxes (typically green)
            colorX : WSTRING := "0xFF21BA84";
            /// Color code for Y-type boxes (typically yellow)
            colorY : WSTRING := "0xFFE8C100";
            /// Starting ID for box numbering (auto-incremented)
            startingId : UINT := UINT#1;
            /// Enable automatic ID increment
            autoIncrementId : BOOL := TRUE;
        END_STRUCT;

    END_TYPE

    /// Box generator class for creating different types of boxes
    /// Provides methods to generate X-type, Y-type, and random boxes with configurable properties
    CLASS PUBLIC BoxGenerator
        VAR PRIVATE
            /// Configuration for the box generator
            _config : BoxGeneratorConfig;
            /// Current ID counter for generated boxes
            _currentId : UINT := UINT#1;
        END_VAR

        /// Constructor to configure the box generator
        METHOD PUBLIC CONSTRUCTOR
            VAR_INPUT
                /// Configuration structure with default values and color settings
                config : BoxGeneratorConfig;
            END_VAR
            _config := config;
            _currentId := _config.startingId;
        END_METHOD

        /// Constructor with individual parameters for convenience
        METHOD PUBLIC CONSTRUCTOR
            VAR_INPUT
                /// Default width for all generated boxes
                defaultWidth : INT;
                /// Default start position for all generated boxes
                defaultStartPosition : INT;
                /// Color code for X-type boxes
                colorX : WSTRING;
                /// Color code for Y-type boxes
                colorY : WSTRING;
                /// Starting ID for box numbering
                startingId : UINT := UINT#1;
            END_VAR
            _config.defaultWidth := defaultWidth;
            _config.defaultStartPosition := defaultStartPosition;
            _config.colorX := colorX;
            _config.colorY := colorY;
            _config.startingId := startingId;
            _config.autoIncrementId := TRUE;
            _currentId := startingId;
        END_METHOD

        /// Create a new box
        METHOD PRIVATE CreateBox
            VAR_INPUT
                /// Optional custom ID, if 0 uses auto-increment
                customId : UINT := UINT#0;
                /// Optional custom start position, if 0 uses default
                customStartPos : INT := 0;
                /// Color to use for the box
                customColor : WSTRING;
            END_VAR
            VAR_IN_OUT
                /// New BasicBox instance configured as specified
                newBox : BasicBox;
            END_VAR
            
            VAR_TEMP
                useId : UINT;
                useStartPos : INT;
            END_VAR
            
            // Determine ID to use
            IF customId <> UINT#0 THEN
                useId := customId;
            ELSE
                useId := _currentId;
                IF _config.autoIncrementId THEN
                    _currentId := _currentId + UINT#1;
                END_IF;
            END_IF;
            
            // Determine start position to use
            IF customStartPos <> 0 THEN
                useStartPos := customStartPos;
            ELSE
                useStartPos := _config.defaultStartPosition;
            END_IF;
            
            newBox.CONSTRUCT(
                id := useId,
                baseColor := customColor,
                width := _config.defaultWidth,
                startPosition := useStartPos
            );
        END_METHOD

        /// Create a new X-type box (typically green)
        METHOD PUBLIC CreateBoxX
            VAR_INPUT
                /// Optional custom ID, if 0 uses auto-increment
                customId : UINT := UINT#0;
                /// Optional custom start position, if 0 uses default
                customStartPos : INT := 0;
            END_VAR
            VAR_IN_OUT
                /// New BasicBox instance configured as X-type
                newBox : BasicBox;
            END_VAR
            
            THIS.CreateBox(
                customId := customId, 
                customStartPos := customStartPos, 
                customColor := _config.colorX,
                newBox := newBox);
        END_METHOD

        /// Create a new Y-type box (typically yellow)
        METHOD PUBLIC CreateBoxY
            VAR_INPUT
                /// Optional custom ID, if 0 uses auto-increment
                customId : UINT := UINT#0;
                /// Optional custom width, if 0 uses default (currently unused)
                customWidth : INT := 0;
                /// Optional custom start position, if 0 uses default
                customStartPos : INT := 0;
            END_VAR
            VAR_IN_OUT
                /// New BasicBox instance configured as Y-type
                newBox : BasicBox;
            END_VAR
                        
            THIS.CreateBox(
                customId := customId, 
                customStartPos := customStartPos, 
                customColor := _config.colorY,
                newBox := newBox);
        END_METHOD

        /// Create a random box (randomly X-type or Y-type)
        METHOD PUBLIC CreateRandomBox
            VAR_INPUT
                /// Optional custom ID, if 0 uses auto-increment
                customId : UINT := UINT#0;
                /// Optional custom start position, if 0 uses default
                customStartPos : INT := 0;
            END_VAR
            VAR_IN_OUT
                /// New BasicBox instance with random type (X or Y)
                newBox : BasicBox;
            END_VAR
            VAR_TEMP
                randomValue : UDINT;
                useColor : WSTRING;
            END_VAR
            
            // Generate random value using simple linear congruential generator
            randomValue := Random();
                        
            // Determine color based on random value (even = X, odd = Y)
            IF (randomValue MOD UDINT#2) = UDINT#0 THEN
                useColor := _config.colorX;
            ELSE
                useColor := _config.colorY;
            END_IF;
                        
            THIS.CreateBox(
                customId := customId, 
                customStartPos := customStartPos, 
                customColor := useColor,
                newBox := newBox);
        END_METHOD

        /// Get the current configuration
        METHOD PUBLIC GetConfig : BoxGeneratorConfig
            GetConfig := _config;
        END_METHOD

        /// Update the configuration
        METHOD PUBLIC SetConfig
            VAR_INPUT
                /// New configuration to apply
                config : BoxGeneratorConfig;
            END_VAR
            _config := config;
        END_METHOD

        /// Get the current ID that would be used for the next box
        METHOD PUBLIC GetCurrentId : UINT
            GetCurrentId := _currentId;
        END_METHOD

        /// Set the current ID counter
        METHOD PUBLIC SetCurrentId
            VAR_INPUT
                /// New ID value to use for subsequent boxes
                newId : UINT;
            END_VAR
            _currentId := newId;
        END_METHOD

        /// Reset the ID counter to the starting value
        METHOD PUBLIC ResetIdCounter
            _currentId := _config.startingId;
        END_METHOD
    END_CLASS

END_NAMESPACE