USING SortingMachine;
CONFIGURATION MyConfiguration
    TASK CyclicInterrupt(Priority := 1, INTERVAL := T#100ms);
    
    PROGRAM P1 WITH CyclicInterrupt: MainProgram;
    //GDB
    VAR_GLOBAL 
        /// Commands for the Application Control
        {S7.Extern = ReadWrite}
        {OpcUa.accesslevel=ReadWrite}
        ApplicationCommand : typeApplicationCommand := (manual := TRUE, simulationMode := TRUE);

        /// Monitoring for the Storage
        {S7.Extern = Read}
        {OpcUa.accesslevel=Read}
        StorageInterface : typeStorageInterface;

        /// Commands for Elevatorstation
        {S7.Extern = ReadWrite}
        {OpcUa.accesslevel=ReadWrite}
        ElevatorComand : typeElevatorCommand;

        /// Monitoring for Elevatorstation
        {S7.Extern = Read}
        {OpcUa.accesslevel=Read}
        ElevatorInterface : typeStatusInterface;

        /// Monitoring for Conveyors
        {S7.Extern = Read}
        {OpcUa.accesslevel=Read}
        ConveyorInterface : ARRAY[0..MAX_CONVEYORS - 1] of typeStatusInterface;

        /// Commands for Conveyors
        {S7.Extern = ReadWrite}
        {OpcUa.accesslevel=ReadWrite}
        ConveyorCommand : ARRAY[0..MAX_CONVEYORS - 1] of typeConveyorCommand;

        /// Collection of Boxes in Station 1
        {S7.Extern = Read}
        {OpcUa.accesslevel=Read}
        ConveyorStation1BoxesInterface : ARRAY[0..MAX_BOX_ARRAY_STATIONS_INPUT - 1] OF typeBoxData;

        /// Boxe in elevator
        {S7.Extern = Read}
        {OpcUa.accesslevel=Read}
        ElevatorStation1BoxeInterface          : typeBoxData; // TODO: leere spaces

        /// Collection of Boxes in upper Station 2
        {S7.Extern = Read}
        {OpcUa.accesslevel=Read}
        ConveyorStation2BoxesUpInterface              : ARRAY[0..MAX_BOX_ARRAY_STATIONS_OUTPUT - 1] OF typeBoxData;

        /// Collection of Boxes in lower Station 3
        {S7.Extern = Read}
        {OpcUa.accesslevel=Read}
        ConveyorStation3BoxesDownInterface    : ARRAY[0..MAX_BOX_ARRAY_STATIONS_OUTPUT - 1] OF typeBoxData;

        /// Collection of Boxes in lower Station 3
        {S7.Extern = Read}
        {OpcUa.accesslevel = Read}
        MachineStatus    : typeStatusInterface;
    END_VAR

    //Definition globaler Konstanten
    VAR_GLOBAL CONSTANT
        /// Default Color used in Project for Green
        COLOR_CODE_GREEN : WSTRING := "0xFF21BA84";
        /// Default Color used in Project for Yellow
        COLOR_CODE_YELLOW : WSTRING := "0xFFE8C100";
        /// Default Color used in Project for Dark Red
        COLOR_CODE_DARK_RED : WSTRING := "0xFFDE3858";
        /// Default Color used in Project for Blue
        COLOR_CODE_BLUE : WSTRING := "0xFF1491EB";
        
        /// Box default width
        BOX_WIDTH : INT := INT#128;
        /// Box default height
        BOX_HEIGHT : INT := INT#96;
        /// BOX POS TOP LOW Level (Conveyorband1, unsorted Boxes)
        BOX_POS_TOP_DOWN : UINT := UINT#724;
        /// BOX POS TOP UP Level (Conveyorband2upper, sorted Boxes upper level)
        BOX_POS_TOP_UP : UINT := UINT#439;
        /// Start Position of the Box when created.
        BOX_POS_LEFT_START : INT := INT#384;
        /// Start Position for Elevator (Left position)
        ELEVATOR_POS_LEFT_START : INT := INT#1280;
        /// Start Position for Conveyor1 (Left position)
        CONVEYOR1_POS_LEFT_START : INT := INT#384;
        /// Start Position for Conveyor2 (Left position)
        CONVEYOR2_POS_LEFT_START : INT := INT#1408; 
        /// Start Position for Conveyor3 (Left position)
        CONVEYOR3_POS_LEFT_START : INT := INT#1408;

        /// Conveyor 1 Station ID
        CONVEYOR1_STATION_ID : UINT := UINT#1;
        /// Elevator Station ID
        ELEVATOR_STATION_ID : UINT := UINT#2;
        /// Conveyor 2 Station ID
        CONVEYOR2_STATION_ID : UINT := UINT#3;
        /// Conveyor 3 Station ID
        CONVEYOR3_STATION_ID : UINT := UINT#4;

        /// Conveyor 
        CONVEYOR_POS_INCREMENT  : INT := INT#16;
        /// Elevator 
        ELEVATOR_POS_INCREMENT  : INT := INT#2;
        /// Elevator Upper Limit value
        ELEVATOR_POS_UP_LIMIT : INT := INT#100;
        /// Elevator Lower Limit value
        ELEVATOR_POS_DOWN_LIMIT : INT := INT#0;

        /// Maximum of boxes for each station
        MAX_BOX_ARRAY_STATIONS_INPUT : DINT := DINT#7;
        /// Maximum of boxes for each station
        MAX_BOX_ARRAY_STATIONS_OUTPUT : DINT := DINT#4;
        /// Maximum of conveyors
        MAX_CONVEYORS : DINT := DINT#3;

        /// Drive reference Speed
        G220_REF_SPEED : REAL  := REAL#1000.0;
    END_VAR
END_CONFIGURATION