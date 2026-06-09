/**
 * @function changeScreenApplication_OnActivated
 * @description This function is triggered when the messages tile is tapped.
 *              It changes the screen to the messages view (20_Messages).
 * @param {any} item - The UI item that was tapped.
 */
export function changeScreenApplication_OnActivated(item) {
    HMIRuntime.UI.SysFct.ChangeScreen("00_Application_Main", "../swContent");
}

/**
 * @function changeScreenMessages_OnActivated
 * @description This function is triggered when the messages tile is tapped.
 *              It changes the screen to the messages view (20_Messages).
 * @param {any} item - The UI item that was tapped.
 */
export function changeScreenMessages_OnActivated(item) {
    HMIRuntime.UI.SysFct.ChangeScreen("20_Messages", "../swContent");
}

/**
 * @function changeScreenDiag_OnActivated
 * @description This function is triggered when the diagnostics tile is tapped.
 *              It changes the screen to the diagnostics view (21_Diagnostics).
 * @param {any} item - The UI item that was tapped.
 */
export function changeScreenDiag_OnActivated(item) {
    HMIRuntime.UI.SysFct.ChangeScreen("21_Diagnostics", "../swContent");
}

/**
 * @function changeScreenSettings_OnActivated
 * @description This function is triggered when the settings tile is tapped.
 *              It changes the screen to the settings view (30_Settings).
 * @param {any} item - The UI item that was tapped.
 */
export function changeScreenSettings_OnActivated(item) {
    HMIRuntime.UI.SysFct.ChangeScreen("30_Settings", "../swContent");
}