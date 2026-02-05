USING System.EdgeDetection;
USING System.Timer;

NAMESPACE SortingMachine
    /// Abstract base class for all station types in the sorting machine
    /// Provides common functionality for enable/disable, state management, error handling, and basic I/O operations
    CLASS ABSTRACT BaseStation
        //=============================================================================
        //SIEMENS AG
        //(c)Copyright 2025 All Rights Reserved
        //-----------------------------------------------------------------------------
        //Tested with:   S7-1500 FW V4.0 
        //Engineering:   SIMATIC AX Logic Control Engineering
        //Requirements:  none
        //Functionality: Base class for station control modules in sorting machine
        //-----------------------------------------------------------------------------
        //Change log table:
        //Version  Date       Expert in charge                Changes applied
        //01.00.00 28.11.2025 Siemens Industry Online Support First Release 
        //=============================================================================
        VAR PROTECTED
            // Basic control variables
            /// Enable station operation
            _enable : BOOL;
            /// Reset station to initial state
            _reset : BOOL;
            /// Error flag
            _error : BOOL;
            /// Error code
            _status : typeStationStatus := typeStationStatus#STATUS_NO_CALL;
            
            // Status variables
            /// Station is ready for operation
            _ready : BOOL;
            /// Station is currently processing/moving
            _busy : BOOL;
            
            // Internal control variables
            /// Rising edge detection for reset
            _resetTrigger : RisingEdge;
            
            // State machine variables
            /// Current state (0=Idle, 1=Processing, 2=Error)
            _state : typeStationState := typeStationState#STATE_IDLE;
            /// Station Manual mode active
            _manualModeEn : BOOL := FALSE;
            
            // Station identification
            /// Unique identifier for this station
            _stationID : UINT;
            /// Position of Station in relation to Left reference
            _stationPosLeft : INT;
        END_VAR
        /// Constructor - Initializes the base station with settings
        /// This method should only be used once during startup
        /// @param stationID: Unique identifier for this station
        /// @param stationPosLeft: Position of station in relation to left reference
        METHOD PROTECTED CONSTRUCTOR
            VAR_INPUT
                stationID : UINT;
                stationPosLeft : INT;
            END_VAR
            _stationPosLeft := stationPosLeft;
            _stationID := stationID;
            _state := typeStationState#STATE_IDLE;  // Start in idle state
        END_METHOD

        /// Enables the Station for operation
        /// Sets the internal enable flag to allow movement commands
        METHOD PUBLIC Enable // TODO: change variable to public?
            _enable := TRUE;
        END_METHOD

        /// Disables the Station for operation
        /// Sets the internal enable flag to disable movement commands
        METHOD PUBLIC Disable
            _enable := FALSE;
        END_METHOD

        /// Gets the current enable state of the station
        /// @return: TRUE if station is enabled, FALSE if disabled
        METHOD PUBLIC GetEnable : BOOL
            GetEnable := _enable;
        END_METHOD

        /// Sets the reset signal for the station
        /// Triggers a reset to initial state on rising edge
        METHOD PUBLIC Reset
            _reset := TRUE;
        END_METHOD

        /// Acknowledges errors on the station
        /// Sets the internal acknowledgment flag to clear error conditions
        METHOD PUBLIC AcknowledgeError
            THIS.clearError();
        END_METHOD

        /// Gets the ready status of the station
        /// @return: TRUE if station is ready for operation, FALSE otherwise
        METHOD PUBLIC GetIsReady : BOOL 
            GetIsReady := _ready;
        END_METHOD

        /// Gets the busy/processing status of the station
        /// @return: TRUE if station is currently processing, FALSE if idle
        METHOD PUBLIC GetIsBusy : BOOL
            GetIsBusy := _busy;
        END_METHOD

        /// Gets the error status of the station
        /// @return: TRUE if an error has occurred, FALSE if operating normally
        METHOD PUBLIC GetError : BOOL
            GetError := _error;
        END_METHOD

        /// Gets the current error code if an error has occurred
        /// @return: Error code (typeStationStatus) indicating the type of error
        METHOD PUBLIC GetStatus : typeStationStatus
            GetStatus := _status;
        END_METHOD

        /// Gets the error code and status of the station using defined type
        /// @return: typeStationInterface containing both error flag and status code
        METHOD PUBLIC GetErrorAndStatus : typeStatusInterface
            VAR_TEMP
                status : typeStatusInterface;
            END_VAR

            status.error := _error;
            status.status := _status;
            GetErrorAndStatus := status;
        END_METHOD

        /// Gets the current station ID
        /// @return: Station ID (UINT) assigned to this station
        METHOD PUBLIC GetStationID : UINT
            GetStationID := _stationID;
        END_METHOD

        /// Set manual mode active state
        /// @param manualModeActvEn: TRUE to activate manual mode, FALSE to deactivate
        METHOD PUBLIC SetManualModeActive
            VAR_INPUT
                manualModeActvEn : BOOL;
            END_VAR
            _manualModeEn := manualModeActvEn;
        END_METHOD

        /// Sets an error condition with error code
        /// @param errorCode: Error code to set
        METHOD PROTECTED setError
            VAR_INPUT
                errorCode : typeStationStatus;
            END_VAR
            _error := TRUE;
            _status := errorCode;
            _state := typeStationState#STATE_ERROR_ON; // Go to error state
        END_METHOD

        /// Clears error condition and resets to idle state
        METHOD PROTECTED clearError
            // Reset error feedback variables
            _error := FALSE;
            _status := typeStationStatus#STATUS_NO_CALL;
            // Return to idle state
            _state := typeStationState#STATE_IDLE;
        END_METHOD

        /// Handles common reset functionality
        /// Should be called by derived classes in their Execute method
        /// @return: TRUE if reset was triggered this cycle, FALSE otherwise
        METHOD PROTECTED handleReset : BOOL
            // Call trigger for reset so it only works on rising edge
            _resetTrigger(signal := _reset);
            IF _resetTrigger.detected THEN
                _busy := FALSE;
                // Clear errors
                THIS.clearError();
                // Call derived class specific reset
                THIS.onReset();
            END_IF;
            // reset bit for next rising edge detection
            _reset := FALSE;
            // Return value TRUE when trigger was detected
            handleReset := _resetTrigger.detected;
        END_METHOD

        /// Handles common idle state logic
        /// Should be called by derived classes for idle state processing
        METHOD PROTECTED handleIdleState
            _ready := _enable AND NOT _error;
            _busy := FALSE;
        END_METHOD

        /// Handles common error state logic
        /// Should be called by derived classes for error state processing
        METHOD PROTECTED handleErrorState
            _ready := FALSE;
            _busy := FALSE;
            _error := TRUE;
            // Error can only be cleared by reset
        END_METHOD

        /// Abstract method for derived class specific reset operations
        /// Override this method to implement station-specific reset logic
        METHOD PROTECTED ABSTRACT onReset
        END_METHOD

        /// Abstract method for main execution logic
        /// Must be implemented by derived classes
        /// This method should be called cyclically to process station operations
        METHOD PUBLIC ABSTRACT Execute
        END_METHOD
    END_CLASS
END_NAMESPACE