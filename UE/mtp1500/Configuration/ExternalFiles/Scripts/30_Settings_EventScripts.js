
/**
 * @function _0_Settings_OnLoaded
 * @description This function is triggered when the Settings screen (30_Settings) is loaded.
 *              It makes the third navigation bar visible by setting its Visible property to 1.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was loaded.
 */
export async function _0_Settings_OnLoaded(item) {
    HMIRuntime.UI.SysFct.SetPropertyValue("../swThirdNavigation", "Visible", 1);
}

