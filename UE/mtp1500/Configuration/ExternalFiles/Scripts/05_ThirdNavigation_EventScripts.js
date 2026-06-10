import * as Navigation from "Navigation";

/**
 * @function _5_ThirdNavigation_AlternateBackColor_OnPropertyChanged
 * @description This function is triggered when the AlternateBackColor property changes.
 *              It uses the AlternateBackColor property as a memory mechanism to highlight the correct button.
 *              The AlternateBackColor is reset to 0 after use, so that hiding and showing the same
 *              third navigation will trigger the button highlight again.
 * @param {any} item - The UI item whose property changed.
 * @param {number} value - The new value of the AlternateBackColor property.
 */
export function _5_ThirdNavigation_AlternateBackColor_OnPropertyChanged(item, value) {
// this script uses the property AlternateBackColor as memory to highlight the button.
// AlternateBackColor will be reset to 0, so that just hiding and showing the same Third navigation will also highlight the button again.

  if (Screen.AlternateBackColor !== 0) {  
    Navigation.HighlightButton("txtThirdNav" + Screen.AlternateBackColor);
    Screen.AlternateBackColor = 0;
  }
}

/**
 * @function _5_ThirdNavigation_OnLoaded
 * @description This function is triggered when the third navigation screen (05_ThirdNavigation) is loaded.
 *              It automatically highlights the appropriate third navigation button based on the current
 *              horizontal scroll bar position of the window.
 * @param {any} item - The UI item that was loaded.
 */
export function _5_ThirdNavigation_OnLoaded(item) {
  Navigation.HighlightButton("txtThirdNav" + Screen.CurrentWindow.HorizontalScrollBarPosition);
}

import * as module_globales_modul from "Navigation";
/**
 * @function txtThirdNav1_OnTapped
 * @description This function is triggered when the first third navigation button is tapped.
 *              It highlights the tapped button to indicate the active third navigation item.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function txtThirdNav1_OnTapped(item, x, y, modifiers, trigger) {
  try {
    module_globales_modul.HighlightButton("txtThirdNav1", undefined);
  }
  catch (err) { }
}

/**
 * @function btnStopRT_1_OnTapped
 * @description This function is triggered when the stop runtime button is tapped.
 *              It opens a popup screen (StopRuntime) based on the Template_Stop_Runtime template
 *              with specific dimensions (480x276 pixels) and sets the window flags to 0.
 *              This function was converted from TIA FunctionList to JavaScript code.
 * @param {any} item - The UI item that was tapped.
 * @param {number} x - The x-coordinate of the tap event.
 * @param {number} y - The y-coordinate of the tap event.
 * @param {any} modifiers - Modifier keys or touch modifiers active during the tap.
 * @param {any} trigger - The trigger information for the event.
 */
export async function btnStopRT_1_OnTapped(item, x, y, modifiers, trigger) {
  HMIRuntime.UI.SysFct.OpenScreenInPopup("StopRuntime", "Template_Stop_Runtime", false, "", 480, 276, false, undefined);
  HMIRuntime.UI.SysFct.SetPropertyValue("/StopRuntime", "WindowFlags", 0);
}

