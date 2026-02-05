USING SortingMachine;
USING ControlModules;

PROGRAM MainProgram

    VAR_EXTERNAL
        ApplicationCommand : SortingMachine.typeApplicationCommand;
        MachineStatus : SortingMachine.typeStatusInterface;

        /// Elevator HMI interface
        ElevatorComand      : SortingMachine.typeElevatorCommand;    
        ElevatorInterface   : SortingMachine.typeStatusInterface; 
        /// Conveyors HMI Interfaces
        ConveyorCommand : ARRAY [0..MAX_CONVEYORS - 1] OF SortingMachine.typeConveyorCommand;
        ConveyorInterface : ARRAY [0..MAX_CONVEYORS - 1] OF SortingMachine.typeStatusInterface;

        /// Boxes for stations
        ConveyorStation1BoxesInterface      : ARRAY [0..MAX_BOX_ARRAY_STATIONS_INPUT - 1] OF SortingMachine.typeBoxData;
        ElevatorStation1BoxeInterface : SortingMachine.typeBoxData;
        ConveyorStation2BoxesUpInterface    : ARRAY [0..MAX_BOX_ARRAY_STATIONS_OUTPUT - 1] OF SortingMachine.typeBoxData;
        ConveyorStation3BoxesDownInterface  : ARRAY [0..MAX_BOX_ARRAY_STATIONS_OUTPUT - 1] OF SortingMachine.typeBoxData;
        StorageInterface : SortingMachine.typeStorageInterface;
    END_VAR

    VAR_EXTERNAL CONSTANT
        COLOR_CODE_GREEN : WSTRING;
        COLOR_CODE_YELLOW : WSTRING;
        COLOR_CODE_BLUE : WSTRING;
        MAX_BOX_ARRAY_STATIONS_INPUT : DINT;
        MAX_BOX_ARRAY_STATIONS_OUTPUT : DINT;
        MAX_CONVEYORS : DINT;
        BOX_WIDTH : INT;
        BOX_POS_LEFT_START : INT;
        device_drive_g220_telegram1_HwID : UINT;
        G220_REF_SPEED : REAL;
        CONVEYOR1_POS_LEFT_START : INT;
        CONVEYOR1_STATION_ID : UINT;
        CONVEYOR2_POS_LEFT_START : INT;
        CONVEYOR2_STATION_ID : UINT;
        CONVEYOR3_POS_LEFT_START : INT;
        CONVEYOR3_STATION_ID : UINT;
        ELEVATOR_POS_LEFT_START : INT;
        ELEVATOR_STATION_ID : UINT;
        CONVEYOR_POS_INCREMENT : INT;
        ELEVATOR_POS_INCREMENT : INT;
        ELEVATOR_POS_UP_LIMIT : INT;
        ELEVATOR_POS_DOWN_LIMIT : INT;
        
    END_VAR
        

    VAR       
        /// Risingedge detection for application commands
        _prevApplicationCmd : typeApplicationCommand;

        _conveyorStation1 : ConveyorStation;
        _conveyorStation2 : ConveyorStation;
        _conveyorStation3 : ConveyorStation;

        _conveyorControlSimulated1    : ConveyorSim;
        _conveyorControlSimulated2   : ConveyorSim;
        _conveyorControlSimulated3   : ConveyorSim;
        /// Object of Elevator
        _elevator1                  :    ElevatorBiStateStation;
        /// Conveyor control with SinaPos drives
        _elevatorControl    : ElevatorSinaSpeedSim;
        _configElevator : typeElevatorBiStateStationConfig ;
        _elevatorControlSim : ElevatorSim;
        _prevElevatorControl : typeElevatorCommand;

        /// New box to be added in initial test without simulation
        _newBox : BasicBox;

        /// Box generator for creating different types of boxes
        _boxGenerator : BoxGenerator;

        /// Automatic mode coordinator
        _automaticModeCoordinator : AutomaticModeCoordinator;

        /// Sina Speed configuration for using SINAMICS in application
        _sinaSpeedConfig        : Simatic.Ax.Sinamics.SinaSpeedConfiguration;

        _initiliazed : BOOL := FALSE;
    END_VAR

    VAR_TEMP // temp_
        index : DINT := DINT#0;
        boxesData  : ARRAY[DINT#0 .. MAX_BOX_ARRAY_STATIONS_INPUT - 1] OF typeBoxData;
    END_VAR
  
    // PLC Initialization
    IF NOT _initiliazed THEN
        // Elevator and elevator control Configurations
        _configElevator.ConditionUp := COLOR_CODE_YELLOW;
        _configElevator.ConditionDown :=  COLOR_CODE_GREEN;
        _configElevator.PositionUpLimit := ELEVATOR_POS_UP_LIMIT;
        _configElevator.PositionDownLimit := ELEVATOR_POS_DOWN_LIMIT;
        _configElevator.PositionHome := ELEVATOR_POS_DOWN_LIMIT;
        _configElevator.PrecisionOffset := INT#1;
        // Elevator control with SinaSpeed variant
        _elevatorControl.SetConfigLimits(
            cycleIncrement := ELEVATOR_POS_INCREMENT,
            upperLimit := _configElevator.PositionUpLimit, 
            lowerLimit := _configElevator.PositionDownLimit);

        _elevatorControl.SetConfigSina(
            sinaSpeedConfig := _sinaSpeedConfig, 
            sinaRefSpeed := G220_REF_SPEED, 
            defaultVelocity := INT#500,
            hwidSTW := device_drive_g220_telegram1_HwID,
            hwidZSW := device_drive_g220_telegram1_HwID);

        // Elevator Control simulated variant
        _elevatorControlSim.SetConfigLimits(
            cycleIncrement := ELEVATOR_POS_INCREMENT, 
            upperLimit := _configElevator.PositionUpLimit, 
            lowerLimit := _configElevator.PositionDownLimit);

        // Station Elevator 1 configuration
        // With input "elevatorControl" the simulated (_elevatorControlSim) or real hardware (_elevatorControl) can be selected
        _elevator1.CONSTRUCTOR(
            stationID := ELEVATOR_STATION_ID, 
            stationPosLeft := ELEVATOR_POS_LEFT_START, 
            elevatorControl := _elevatorControlSim, 
            stationConfig := _configElevator);
        _elevator1.Enable();

        // Initialize box generator
        _boxGenerator.CONSTRUCTOR(
            defaultWidth := BOX_WIDTH,
            defaultStartPosition := BOX_POS_LEFT_START,
            colorX := COLOR_CODE_GREEN,
            colorY := COLOR_CODE_YELLOW,
            startingId := UINT#1
        );

        // Initialize a new box for startup
        _boxGenerator.CreateRandomBox(newBox := _newBox);

        /// Conveyor controllers configuration
        // Controller for Conveyor 1
        _conveyorControlSimulated1.SetConfig(BOX_WIDTH/CONVEYOR_POS_INCREMENT); 
        _conveyorControlSimulated1.Enable();
        // Controller for Conveyor 2
        _conveyorControlSimulated2.SetConfig(BOX_WIDTH/CONVEYOR_POS_INCREMENT); 
        _conveyorControlSimulated2.Enable();
        // Controller for Conveyor 3
        _conveyorControlSimulated3.SetConfig(BOX_WIDTH/CONVEYOR_POS_INCREMENT); 
        _conveyorControlSimulated3.Enable();

        /// Conveyors station constructors
        //  Conveyor Station 1
        _conveyorStation1.CONSTRUCTOR(
            stationID := CONVEYOR1_STATION_ID, 
            moveIncrement := BOX_WIDTH, 
            conveyorControl := _conveyorControlSimulated1, 
            stationPosLeft := CONVEYOR1_POS_LEFT_START);
        _conveyorStation1.Enable();
        //  Conveyor Station 2
        _conveyorStation2.CONSTRUCTOR(
            stationID := CONVEYOR2_STATION_ID, 
            moveIncrement := BOX_WIDTH, 
            conveyorControl := _conveyorControlSimulated2, 
            stationPosLeft := CONVEYOR2_POS_LEFT_START, 
            boxInputIndex := MAX_BOX_ARRAY_STATIONS_OUTPUT - 1);
        _conveyorStation2.Enable();
        //  Conveyor Station 3
        _conveyorStation3.CONSTRUCTOR(
            stationID := CONVEYOR3_STATION_ID, 
            moveIncrement := BOX_WIDTH, 
            conveyorControl := _conveyorControlSimulated3, 
            stationPosLeft := CONVEYOR3_POS_LEFT_START, 
            boxInputIndex := MAX_BOX_ARRAY_STATIONS_OUTPUT - 1);
        _conveyorStation3.Enable();

        _initiliazed := TRUE;
    END_IF;

    // Application commands from HMI
    // Acknowledge command
    IF ApplicationCommand.acknowledge AND NOT _prevApplicationCmd.acknowledge THEN
        _conveyorStation1.AcknowledgeError();
        _elevator1.AcknowledgeError();
        _conveyorStation2.AcknowledgeError();
        _conveyorStation3.AcknowledgeError();
    END_IF;

    // Reset all
    IF ApplicationCommand.resetAll AND NOT _prevApplicationCmd.resetAll THEN
        _conveyorStation1.Reset();
        _elevator1.Reset();
        _conveyorStation2.Reset();
        _conveyorStation3.Reset();
        // Reset automatic mode
        ApplicationCommand.automatic := FALSE;
        ApplicationCommand.manual := TRUE;

    END_IF;

    // Manual Command
    IF ApplicationCommand.manual THEN
        // Set manual mode with rising edge
        IF NOT _prevApplicationCmd.manual THEN
            ApplicationCommand.automatic := FALSE;
        _elevator1.SetManualModeActive(TRUE);
        _conveyorStation1.SetManualModeActive(TRUE);
        _conveyorStation2.SetManualModeActive(TRUE);
        _conveyorStation3.SetManualModeActive(TRUE);
        END_IF;

        // Manual Control while manual mode active
        _elevator1.SetManualCommands(ElevatorComand);
        _conveyorStation1.SetManualCommands(ConveyorCommand[0]);
        _conveyorStation2.SetManualCommands(ConveyorCommand[1]);
        _conveyorStation3.SetManualCommands(ConveyorCommand[2]);

    END_IF;

    // Automatic Command
    IF ApplicationCommand.automatic AND NOT _prevApplicationCmd.automatic THEN
        ApplicationCommand.manual := FALSE;
        _elevator1.SetManualModeActive(FALSE);
        _conveyorStation1.SetManualModeActive(FALSE);
        _conveyorStation2.SetManualModeActive(FALSE);
        _conveyorStation3.SetManualModeActive(FALSE);
        // Automatic mode will be handled by the coordinator
    END_IF;

    // Simulation mode activation
    IF ApplicationCommand.simulationMode AND NOT _prevApplicationCmd.simulationMode THEN
        // Switch to simulated elevator control
        _elevatorControlSim.Enable();
        _elevatorControl.Disable();
        // Set the simulated control to the elevator station
        _elevator1.SetElevatorControl(_elevatorControlSim);
    ELSIF NOT ApplicationCommand.simulationMode AND _prevApplicationCmd.simulationMode THEN
        // Switch to real elevator control
        _elevatorControl.Enable();
        _elevatorControlSim.Disable();
        // Set the real control to the elevator station
        _elevator1.SetElevatorControl(_elevatorControl);
    END_IF;

    // Add new Box - Green
    IF ApplicationCommand.newBoxX AND NOT _prevApplicationCmd.newBoxX THEN
        _boxGenerator.CreateBoxX(newBox := _newBox);
        // Add only when in manual mode
        IF ApplicationCommand.manual THEN
            _conveyorStation1.AddNewBox(_newBox);
            
        END_IF;
    END_IF;

    // Add new Box - Yellow
    IF ApplicationCommand.newBoxY AND NOT _prevApplicationCmd.newBoxY THEN
        _boxGenerator.CreateBoxY(newBox := _newBox);
        // Add only when in manual mode
        IF ApplicationCommand.manual THEN
            _conveyorStation1.AddNewBox(_newBox);
        END_IF;
    END_IF;

    // Add new Box - Random
    IF ApplicationCommand.newBoxRandom AND NOT _prevApplicationCmd.newBoxRandom THEN
        _boxGenerator.CreateRandomBox(newBox := _newBox);
        // Add only when in manual mode
        IF ApplicationCommand.manual THEN
            _conveyorStation1.AddNewBox(_newBox);
        END_IF;
    END_IF;
    
    // Automatic Mode:
    
    // Create new box to be added during automatic mode
    IF NOT _newBox.BoxData.isPresent AND ApplicationCommand.automatic THEN
        _boxGenerator.CreateRandomBox(newBox := _newBox);
    END_IF;

    // Execute automatic mode coordinator
    _automaticModeCoordinator(
        enable := ApplicationCommand.automatic,
        reset := ApplicationCommand.resetAll,
        conveyorStation1 := _conveyorStation1,
        elevatorStation := _elevator1,
        conveyorStation2 := _conveyorStation2,
        conveyorStation3 := _conveyorStation3,
        initialBox := _newBox,
        storedBoxes => StorageInterface,
        status => MachineStatus.status,
        error => MachineStatus.error
    );


    // Execute call for all stations
    _conveyorStation1.Execute();
    _conveyorStation2.Execute();
    _conveyorStation3.Execute();
    _elevator1.Execute();
    

    // Update all Box data for OPC UA
    ConveyorStation1BoxesInterface := _conveyorStation1.GetAllBoxData();

    boxesData := _conveyorStation2.GetAllBoxData();
    FOR index := DINT#0 TO MAX_BOX_ARRAY_STATIONS_OUTPUT - 1 DO
        ConveyorStation2BoxesUpInterface[index] := boxesData[index];
    END_FOR;
    
    boxesData := _conveyorStation3.GetAllBoxData();
    FOR index := DINT#0 TO MAX_BOX_ARRAY_STATIONS_OUTPUT - 1 DO
        ConveyorStation3BoxesDownInterface[index] := boxesData[index];
    END_FOR;

    /// Set edge detection variables
    // Application commands
    _prevApplicationCmd := ApplicationCommand;
    _prevElevatorControl := ElevatorComand;

    /// HMI Feedback
    // Conveyor Station 1 Feedback
    ConveyorInterface[0] := _conveyorStation1.GetErrorAndStatus();
    ConveyorInterface[1] := _conveyorStation2.GetErrorAndStatus();
    ConveyorInterface[2] := _conveyorStation3.GetErrorAndStatus();
    elevatorInterface := _elevator1.GetErrorAndStatus();

    // Elevator Station Feedback
    // Position must be inverted due to the svg graphic (0 = Position Up, 100 = Position Down)
    ElevatorComand.position := 100 - _elevator1.GetElevatorPositionValue();                
    ElevatorStation1BoxeInterface := _elevator1.GetBoxData();
END_PROGRAM