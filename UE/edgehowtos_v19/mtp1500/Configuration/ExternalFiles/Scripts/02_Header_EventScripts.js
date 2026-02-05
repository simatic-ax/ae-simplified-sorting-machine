//Insert definitions for events here

import * as module_navigation from "Navigation";

/**
 * @function btnTitleBar_OnDown
 * @description This function is activated when the title bar button is pressed down.
 *              It changes the currently displayed screen to "swContent" within the "Root navigation level".
 * @param {any} item - The button at which the event occurs.
 * @param {number} x - The X-coordinate of the input point.
 * @param {number} y - The Y-coordinate of the input point.
 * @param {number} modifiers - A bitmask indicating which modifier keys (e.g., Control, Shift, Alt) were pressed during the event.
 * @param {number} trigger - An integer indicating the specific event trigger (e.g., Touch, Left-click, keyboard key).
 */
export async function btnTitleBar_OnDown(item, x, y, modifiers, trigger) {
	HMIRuntime.UI.SysFct.ChangeScreen("Root navigation level", "../swContent");
}

/**
 * @function btnNavigation_OnDown
 * @description This function is activated when a navigation button is pressed down.
 *              It calls the `ShowMainNavigation` function from the `module_navigation` module,
 *              likely to display or toggle the main navigation menu.
 * @param {any} item - The button at which the event occurs (though not used within the function's current logic).
 * @param {number} x - The X-coordinate of the input point (though not used within the function's current logic).
 * @param {number} y - The Y-coordinate of the input point (though not used within the function's current logic).
 * @param {number} modifiers - A bitmask indicating which modifier keys (e.g., Control, Shift, Alt) were pressed during the event (though not used within the function's current logic).
 * @param {number} trigger - An integer indicating the specific event trigger (e.g., Touch, Left-click, keyboard key) (though not used within the function's current logic).
 */
export async function btnNavigation_OnDown(item, x, y, modifiers, trigger) {
		module_navigation.ShowMainNavigation();
}

/**
 * @function btnTitleBarIcon_OnDown
 * @description This function is activated when the title bar icon is pressed down.
 *              It changes the currently displayed screen to "swContent", hides the third navigation panel,
 *              and highlights the "txtMainNav1" button in the main navigation.
 * @param {any} item - The button at which the event occurs.
 * @param {number} x - The X-coordinate of the input point.
 * @param {number} y - The Y-coordinate of the input point.
 * @param {number} modifiers - A bitmask indicating which modifier keys (e.g., Control, Shift, Alt) were pressed during the event.
 * @param {number} trigger - An integer indicating the specific event trigger (e.g., Touch, Left-click, keyboard key).
 */
export async function btnTitleBarIcon_OnDown(item, x, y, modifiers, trigger) {
		HMIRuntime.UI.SysFct.ChangeScreen("Root navigation level", "../swContent");
		HMIRuntime.UI.SysFct.SetPropertyValue("~/swThirdNavigation", "Visible", 0);
		module_navigation.HighlightButton("txtMainNav1", "../swMainNavigation/");
}