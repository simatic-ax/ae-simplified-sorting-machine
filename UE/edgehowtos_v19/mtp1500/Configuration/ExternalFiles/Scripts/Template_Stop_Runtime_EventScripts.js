/**
 * @function txtCancel_OnTapped
 * @description This function is triggered when the cancel button in the stop runtime popup is tapped.
 *              It hides the background overlay and closes the stop runtime popup without stopping the runtime.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function txtCancel_OnTapped(item, x, y, modifiers, trigger) {
    HMIRuntime.UI.SysFct.SetPropertyValue("//recBackground", "Visible", 0);
    HMIRuntime.UI.SysFct.ClosePopup("/StopRuntime");
}

/**
 * @function txtStopRt_OnTapped
 * @description This function is triggered when the stop runtime button in the popup is tapped.
 *              It executes the stop runtime command to shut down the HMI runtime environment.
 *              Errors are silently caught to prevent issues during the shutdown process.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function txtStopRt_OnTapped(item, x, y, modifiers, trigger) {
try {
    await HMIRuntime.Device.SysFct.StopRuntime();
}
catch (err) { }

}

/**
 * @function Template_Stop_Runtime_OnLoaded
 * @description This function is triggered when the stop runtime template popup is loaded.
 *              It makes the background overlay visible to create a modal dialog effect.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was loaded.
 */
export async function Template_Stop_Runtime_OnLoaded(item) {
    HMIRuntime.UI.SysFct.SetPropertyValue("//recBackground", "Visible", 1);
}

