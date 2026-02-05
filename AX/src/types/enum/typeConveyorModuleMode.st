NAMESPACE ControlModules

    /// Enumeration for simulated conveyor operation modes
    /// Similar to SinaPosMode but for simulation purposes
    TYPE typeConveyorModuleMode : INT
    (
        /// Conveyor is idle, no movement
        IDLE := 0,
        /// Conveyor is in jog mode for manual positioning
        JOG := 1,
        /// Conveyor is in relative positioning mode
        RELATIVE_POSITIONING := 2,
        /// Conveyor is in absolute positioning mode
        ABSOLUTE_POSITIONING := 3,
        /// Conveyor is setting home position
        SET_HOME_POSITION := 4
    ) := IDLE;
    END_TYPE

END_NAMESPACE
