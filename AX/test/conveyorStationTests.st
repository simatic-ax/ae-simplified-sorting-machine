USING SortingMachine;
USING AxUnit;
USING System.EdgeDetection;

NAMESPACE Test

    {TestFixture}
CLASS ConveyorStaitonTests

    VAR
        _basicBox : BasicBox;
        _conveyorControl : ControlModules.ConveyorSim;
        _conveyorStation : ConveyorStation;
        _resetTrigger : RisingEdge;
        _boxesArray : ARRAY[0.. 3] OF BasicBox;
    END_VAR
    

    /// Test: BasicBox class methods and data management
    /// Validates box creation, property assignment, movement functionality, and data clearing
    /// Tests the complete lifecycle of a box object from creation to deletion
    {Test}
    METHOD PUBLIC BoxClassMethodsTest
        VAR
            /// Interface reference to the basic box instance
            _iBasicBox : IBasicBox;
            /// Previous position storage for movement validation
            _prevPos : INT;
        END_VAR
        VAR_EXTERNAL CONSTANT
            /// Standard green color code for box identification
            COLOR_CODE_GREEN : WSTRING;
            /// Standard yellow color code for box identification
            COLOR_CODE_YELLOW : WSTRING;
        END_VAR
        VAR CONSTANT
            /// Test increment value for box movement validation
            INCREMENT_TEST : INT := INT#30;
        END_VAR
        VAR_TEMP
            /// Temporary storage for box data during assertions
            boxData : typeBoxData;
        END_VAR

        /// Test Section 1: Box Creation and Initial Property Validation
        /// Creates a new box with specified ID and color, then validates all properties

        // Create box with ID=1 and green color
        _basicBox.CONSTRUCT(id := UINT#1, baseColor := COLOR_CODE_GREEN);
        _iBasicBox := _basicBox;
        boxData := _iBasicBox.GetBoxData();

        // Verify ID was assigned correctly during construction
        Assert.Equal(actual := boxData.id , expected := UINT#1);
        // Verify color was assigned correctly during construction
        Assert.Equal(actual := boxData.baseColor , expected := COLOR_CODE_GREEN);
        // Verify box is marked as present after construction
        Assert.Equal(actual := boxData.isPresent , expected := TRUE);

        /// Test Section 2: Box Movement Functionality
        /// Validates that the box position updates correctly when moved
        
        // Store current position before movement
        _prevPos := _iBasicBox.GetBoxData().posLeft;

        // Execute movement by increment value
        _iBasicBox.MoveIncrement(INCREMENT_TEST);

        // Verify new position equals previous position plus increment
        Assert.Equal(actual := _iBasicBox.GetBoxData().posLeft , expected := _prevPos + INT#30);

        /// Test Section 3: Box Data Clearing and Reset
        /// Validates that all box data is properly cleared and reset to default values
        
        // Clear all box data to reset the object
        _iBasicBox.ClearData();

        boxData := _iBasicBox.GetBoxData();

        // Verify ID was reset to zero after clearing
        Assert.Equal(actual := boxData.id , expected := UINT#0);
        // Verify color was reset to empty string after clearing
        Assert.Equal(actual := boxData.baseColor , expected := "");
        // Verify box is marked as not present after clearing
        Assert.Equal(actual := boxData.isPresent , expected := FALSE);
    END_METHOD

    /// Test: Conveyor station box addition and tracking
    /// Validates that boxes can be properly added to a conveyor station
    /// and that station ID is correctly assigned to the box data
    {Test}
    METHOD PUBLIC ConveyorBoxAdditionTest
        VAR_EXTERNAL CONSTANT
            /// Maximum array size for input station boxes
            MAX_BOX_ARRAY_STATIONS_INPUT : DINT;
            /// Maximum array size for output station boxes
            MAX_BOX_ARRAY_STATIONS_OUTPUT : DINT;
            /// Standard green color code for test boxes
            COLOR_CODE_GREEN : WSTRING;
        END_VAR
        VAR CONSTANT
            /// Input position index where new boxes are added
            INPUT_INDEX : INT := INT#1;
            /// Test station identifier
            STATION_ID : UINT := UINT#5;
        END_VAR
        
        VAR_TEMP
            /// Temporary storage for boolean operation results
            boolResult : BOOL;
        END_VAR
        
        /// Test Section 1: Conveyor Station Initialization
        /// Initialize conveyor station with test parameters and enable operation
        
        // Construct conveyor station with specified configuration
        _conveyorStation.CONSTRUCTOR(stationID := STATION_ID, stationPosLeft := INT#0, moveIncrement := INT#10, conveyorControl := _conveyorControl, boxInputIndex := INPUT_INDEX);
         
        // Execute initial cycle to clear any residual state
        _conveyorStation.Execute();

        // Enable the conveyor station for operation
        _conveyorStation.Enable();

        // Execute cycle after enabling
        _conveyorStation.Execute();

        /// Test Section 2: Box Addition and Station Assignment Validation
        /// Create a new box, add it to the conveyor, and verify station assignment

        // Create test box with specific ID and color
        // Note: A real object instance is required for the interface method call
        _basicBox.CONSTRUCT(id := UINT#1, baseColor := COLOR_CODE_GREEN);

        // Add the box to the conveyor station at input position
        _conveyorStation.AddNewBox(_basicBox);
        // Execute cycle to process the box addition
        _conveyorStation.Execute();

        // Verify that the box at input index has been assigned the correct station ID
        Assert.Equal(actual := _conveyorStation.GetBoxDataAtIndex(INPUT_INDEX).stationNr, expected := STATION_ID );
    END_METHOD
END_CLASS
END_NAMESPACE