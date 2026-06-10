/**
 * @function craneUp
 * @description This function initiates the upward movement of the elevator/crane.
 *              It sets the elevator command tags to move the crane upward by deactivating
 *              the moveDown and stop commands, and activating the moveUp command.
 * @param {any} item - The item that triggered this function (though not used within the function's current logic).
 */
export function craneUp(item) {
    HMIRuntime.Tags.SysFct.SetTagValue("ServerInterfaces_Server_Interface_1_ElevatorComand_moveDown", FALSE);
    HMIRuntime.Tags.SysFct.SetTagValue("ServerInterfaces_Server_Interface_1_ElevatorComand_moveUp", TRUE);
    HMIRuntime.Tags.SysFct.SetTagValue("ServerInterfaces_Server_Interface_1_ElevatorComand_stop", FALSE);
}

/**
 * @function craneDown
 * @description This function initiates the downward movement of the elevator/crane.
 *              It sets the elevator command tags to move the crane downward by activating
 *              the moveDown command and deactivating the moveUp and stop commands.
 * @param {any} item - The item that triggered this function (though not used within the function's current logic).
 */
export function craneDown(item) {
  HMIRuntime.Tags.SysFct.SetTagValue("ServerInterfaces_Server_Interface_1_ElevatorComand_moveDown", True);
  HMIRuntime.Tags.SysFct.SetTagValue("ServerInterfaces_Server_Interface_1_ElevatorComand_moveUp", FALSE);
  HMIRuntime.Tags.SysFct.SetTagValue("ServerInterfaces_Server_Interface_1_ElevatorComand_stop", FALSE);
}

/**
 * @function craneStop
 * @description This function stops the elevator/crane movement immediately.
 *              It sets the elevator command tags to stop the crane by deactivating
 *              both moveDown and moveUp commands, and activating the stop command.
 * @param {any} item - The item that triggered this function (though not used within the function's current logic).
 */
export function craneStop(item) {
  HMIRuntime.Tags.SysFct.SetTagValue("ServerInterfaces_Server_Interface_1_ElevatorComand_moveDown", FALSE);
  HMIRuntime.Tags.SysFct.SetTagValue("ServerInterfaces_Server_Interface_1_ElevatorComand_moveUp", FALSE);
  HMIRuntime.Tags.SysFct.SetTagValue("ServerInterfaces_Server_Interface_1_ElevatorComand_stop", TRUE);
}

/**
 * @function syncElevatorBoxPosTop
 * @description Synchronizes the elevator position from the server interface to the elevatorBoxPosTop tag.
 *              This function can be used as a script dynamic. It reads the current elevator position 
 *              (0-100) and maps it to the visual top position (439-724 pixels) using linear interpolation.
 *              The mapping is: Position 0 -> Top 439px, Position 100 -> Top 724px.
 *              The function includes validation and boundary checking to ensure robust operation.
 * @param {any} item - The item that triggered this function (though not used within the function's current logic).
 * @returns {number} The calculated top position value in pixels. This can be directly used for dynamic properties.
 *                   Returns TOP_AT_MIN (439) as fallback value in case of errors.
 */
export function syncElevatorBoxPosTop(item) {
  // Mapping constants:
  // ElevatorComand_elevatorPosition 0  -> Top 439px
  // ElevatorComand_elevatorPosition 100 -> Top 724px
  // Intermediate values are linearly interpolated.
  // Formula: top = TOP_AT_MIN - (pos/100) * (TOP_AT_MIN - TOP_AT_MAX)
  const TOP_AT_MIN = 439;   // Visual position when elevator is at minimum (0)
  const TOP_AT_MAX = 724;   // Visual position when elevator is at maximum (100)
  const MIN_POS = 0;
  const MAX_POS = 100;
  try {
    const posTag = Tags("ServerInterfaces_Server_Interface_1_ElevatorComand_position");
    let raw = posTag.Read();
    // Validate and ensure numeric value
    if (typeof raw !== 'number') {
      raw = parseInt(raw, 10);
    }
    if (isNaN(raw)) raw = 0;
    // Clamp value to valid range
    raw = Math.max(MIN_POS, Math.min(MAX_POS, raw));
    const range = TOP_AT_MIN - TOP_AT_MAX; // 285 pixels
    const ratio = (raw - MIN_POS) / (MAX_POS - MIN_POS); // Normalized 0..1
    // Round to integer pixel value
    const topValue = Math.round(TOP_AT_MIN - ratio * range);
    HMIRuntime.Tags.SysFct.SetTagValue("elevatorBoxPosTop", topValue);
    return topValue; // Return value allows direct use as dynamic result
  } catch (err) {
    // Optional logging for debugging
    // HMIRuntime.Logger.Warn("syncElevatorBoxPosTop error: " + err);
    HMIRuntime.Tags.SysFct.SetTagValue("elevatorBoxPosTop", TOP_AT_MIN);
    return TOP_AT_MIN; // Fallback on error
  }
}
/**
 * @function AppStatusAutomatic
 * @description This function returns a color value based on the automatic mode status of the application.
 *              It reads the automatic mode command tag and returns green (0xFF21BA84) if the mode is active,
 *              or gray (0xFF666666) if the mode is inactive. This can be used for dynamic coloring of UI elements.
 * @param {any} item - The item that triggered this function (though not used within the function's current logic).
 * @returns {number} The color value: green (0xFF21BA84) when automatic mode is active, 
 *                   or gray (0xFF666666) when automatic mode is inactive.
 */
export function AppStatusAutomatic(item) {

  let BackColor;
  let mode;
  let green = 0xFF21BA84;  // Active status color
  let gray = 0xFF666666;   // Inactive status color
  mode = Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_automatic").Read();


  if (mode == true) {
    BackColor = green;
    return BackColor;
  }
  else {
    BackColor = gray;
    return BackColor;
  }
}
/**
 * @function AppStatusManual
 * @description This function returns a color value based on the manual mode status of the application.
 *              It reads the manual mode command tag and returns green (0xFF21BA84) if the mode is active,
 *              or gray (0xFF666666) if the mode is inactive. This can be used for dynamic coloring of UI elements.
 * @param {any} item - The item that triggered this function (though not used within the function's current logic).
 * @returns {number} The color value: green (0xFF21BA84) when manual mode is active, 
 *                   or gray (0xFF666666) when manual mode is inactive.
 */
export function AppStatusManual(item) {

  let BackColor;
  let mode;
  let green = 0xFF21BA84;  // Active status color
  let gray = 0xFF666666;   // Inactive status color
  mode = Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_manual").Read();

  if (mode == true) {
    BackColor = green;
    return BackColor;
  }
  else {
    BackColor = gray;
    return BackColor;
  }
}

