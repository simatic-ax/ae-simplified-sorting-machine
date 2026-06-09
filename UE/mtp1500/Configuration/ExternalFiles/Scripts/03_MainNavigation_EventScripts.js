import * as module_globales_modul from "Navigation";

/**
 * @function txtMainNav1_OnTapped
 * @description This function is triggered when the first main navigation button is tapped.
 *              It changes the screen to the main application view (00_Application_Main),
 *              highlights the tapped navigation button, hides the main navigation,
 *              shows the sub-navigation, and hides the third navigation level.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function txtMainNav1_OnTapped(item, x, y, modifiers, trigger) {

     HMIRuntime.UI.SysFct.ChangeScreen("00_Application_Main", "../swContent");

     try {
          module_globales_modul.HighlightButton("txtMainNav1", undefined);
     }
     catch (err) { }

     try {
          module_globales_modul.HideMainNavigation();
     }
     catch (err) { }

     try {
          module_globales_modul.ShowSubNavigation(undefined);
     }
     catch (err) { }

     try {
          module_globales_modul.HideThirdNavigation();
     }
     catch (err) { }
}

/**
 * @function txtMainNav2_OnTapped
 * @description This function is triggered when the second main navigation button is tapped.
 *              It changes the screen to the messages view (20_Messages),
 *              highlights the tapped navigation button, and hides all navigation levels
 *              (main, sub, and third navigation).
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function txtMainNav2_OnTapped(item, x, y, modifiers, trigger) {

     HMIRuntime.UI.SysFct.ChangeScreen("20_Messages", "../swContent");

     try {
          module_globales_modul.HighlightButton("txtMainNav2", undefined);
     }
     catch (err) { }

     try {
          module_globales_modul.HideMainNavigation();
     }
     catch (err) { }

     try {
          module_globales_modul.HideSubNavigation();
     }
     catch (err) { }

     try {
          module_globales_modul.HideThirdNavigation();
     }
     catch (err) { }
}

/**
 * @function txtMainNav3_OnTapped
 * @description This function is triggered when the third main navigation button is tapped.
 *              It changes the screen to the settings view (30_Settings),
 *              highlights the tapped navigation button, hides the main and sub navigation,
 *              and shows the third navigation level.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function txtMainNav3_OnTapped(item, x, y, modifiers, trigger) {

     HMIRuntime.UI.SysFct.ChangeScreen("30_Settings", "../swContent");

     try {
          module_globales_modul.HighlightButton("txtMainNav3", undefined);
     }
          catch (err) { }

     try {
          module_globales_modul.HideMainNavigation();
     }
     catch (err) { }

     try {
          module_globales_modul.HideSubNavigation();
     }
     catch (err) { }

     try {
          module_globales_modul.ShowThirdNavigation(undefined);
     }
     catch (err) { }

}

/**
 * @function txtMainNav4_OnTapped
 * @description This function is triggered when the fourth main navigation button is tapped.
 *              It changes the screen to the diagnostics view (21_Diagnostics),
 *              highlights the tapped navigation button, and hides all navigation levels
 *              (main, sub, and third navigation).
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function txtMainNav4_OnTapped(item, x, y, modifiers, trigger) {

     HMIRuntime.UI.SysFct.ChangeScreen("21_Diagnostics", "../swContent");

     try {
          module_globales_modul.HighlightButton("txtMainNav4", undefined);
     }
     catch (err) { }

     try {
          module_globales_modul.HideMainNavigation();
     }
     catch (err) { }

     try {
          module_globales_modul.HideSubNavigation();
     }
     catch (err) { }

     try {
          module_globales_modul.HideThirdNavigation();
     }
     catch (err) { }

}

/**
 * @function _3_MainNavigation_OnLoaded
 * @description This function is triggered when the main navigation screen (03_MainNavigation) is loaded.
 *              It automatically highlights the first main navigation button (txtMainNav1) to indicate
 *              the default active view. This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was loaded.
 */
export async function _3_MainNavigation_OnLoaded(item) {
     
     try {
          module_globales_modul.HighlightButton("txtMainNav1", undefined);
     }
     catch (err) { }

}

