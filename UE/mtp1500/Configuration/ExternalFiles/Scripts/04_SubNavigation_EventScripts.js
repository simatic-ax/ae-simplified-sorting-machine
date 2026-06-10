import * as Navigation from "Navigation";

/**
 * @function _4_SubNavigation_OnLoaded
 * @description This function is triggered when the sub-navigation screen (04_SubNavigation) is loaded.
 *              It automatically highlights the appropriate sub-navigation button based on the current
 *              horizontal scroll bar position of the window.
 * @param {any} item - The UI item that was loaded.
 */
export function _4_SubNavigation_OnLoaded(item) {
     Navigation.HighlightButton("txtSubNav" + Screen.CurrentWindow.HorizontalScrollBarPosition);
}

/**
 * @function _4_SubNavigation_AlternateBackColor_OnPropertyChanged
 * @description This function is triggered when the AlternateBackColor property changes.
 *              It uses the AlternateBackColor property as a memory mechanism to highlight the correct button.
 *              The AlternateBackColor is reset to 0 after use, so that hiding and showing the same
 *              sub-navigation will trigger the button highlight again.
 * @param {any} item - The UI item whose property changed.
 * @param {number} value - The new value of the AlternateBackColor property.
 */
export function _4_SubNavigation_AlternateBackColor_OnPropertyChanged(item, value) {

  if (Screen.AlternateBackColor !== 0) {  
    Navigation.HighlightButton("txtSubNav" + Screen.AlternateBackColor);
    Screen.AlternateBackColor = 0;
  }
}

import * as module_globales_modul from "Navigation";
/**
 * @function txtSubNav1_OnTapped
 * @description This function is triggered when the first sub-navigation button is tapped.
 *              It highlights the tapped button to indicate the active sub-navigation item.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
// [FunctionListModule]
export async function txtSubNav1_OnTapped(item, x, y, modifiers, trigger) {
     try {
          module_globales_modul.HighlightButton("txtSubNav1", undefined);
     }
     catch (err) { }
}

/**
 * @function txtSubNav2_OnTapped
 * @description This function is triggered when the second sub-navigation button is tapped.
 *              It highlights the tapped button to indicate the active sub-navigation item.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function txtSubNav2_OnTapped(item, x, y, modifiers, trigger) {
     try {
          module_globales_modul.HighlightButton("txtSubNav2", undefined);
     }
     catch (err) { }
}

/**
 * @function txtSubNav3_OnTapped
 * @description This function is triggered when the third sub-navigation button is tapped.
 *              It highlights the tapped button to indicate the active sub-navigation item.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function txtSubNav3_OnTapped(item, x, y, modifiers, trigger) {
     try {
          module_globales_modul.HighlightButton("txtSubNav3", undefined);
     }
     catch (err) { }
}

/**
 * @function txtSubNav4_OnTapped
 * @description This function is triggered when the fourth sub-navigation button is tapped.
 *              It highlights the tapped button to indicate the active sub-navigation item.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function txtSubNav4_OnTapped(item, x, y, modifiers, trigger) {
     try {
          module_globales_modul.HighlightButton("txtSubNav4", undefined);
     }
     catch (err) { }
}

/**
 * @function txtSubNav5_OnTapped
 * @description This function is triggered when the fifth sub-navigation button is tapped.
 *              It highlights the tapped button to indicate the active sub-navigation item.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function txtSubNav5_OnTapped(item, x, y, modifiers, trigger) {
     try {
          module_globales_modul.HighlightButton("txtSubNav5", undefined);
     }
     catch (err) { }
}

/**
 * @function txtSubNav6_OnTapped
 * @description This function is triggered when the sixth sub-navigation button is tapped.
 *              It highlights the tapped button to indicate the active sub-navigation item.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function txtSubNav6_OnTapped(item, x, y, modifiers, trigger) {
     try {
          module_globales_modul.HighlightButton("txtSubNav6", undefined);
     }
     catch (err) { }
}

/**
 * @function gfxStartscreen_OnTapped
 * @description This function is triggered when the start screen graphic is tapped.
 *              It changes the active screen to the main application view (00_Application_Main) in the content area.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function gfxStartscreen_OnTapped(item, x, y, modifiers, trigger) {
     HMIRuntime.UI.SysFct.ChangeScreen("00_Application_Main", "../swContent");
}

