import * as module_navigation from "Navigation";

/**
 * @function _1_ScreenLayout_OnLoaded
 * @description This function is activated when the screen layout is loaded.
 *              It populates the `Screen.DataSet` with navigation metadata for 'SCREEN_01_Dashboard_Overview_1',
 *              defining its parent, next, and previous screen relationships within the navigation structure.
 *              Note: Multiple entries for the same screen name might indicate different navigation contexts or states.
 * @param {any} item - The item that triggered this event (though not used within the function's current logic).
 */
export function _1_ScreenLayout_OnLoaded(item) {
	Screen.DataSet.Add('SCREEN_01_Dashboard_Overview_1', '{"parent": "Root navigation level","next": "SCREEN_01_Dashboard_Overview_1", "prev": ""}')
	Screen.DataSet.Add('SCREEN_01_Dashboard_Overview_1', '{"parent": "Root navigation level","next": "SCREEN_01_Dashboard_Overview_1", "prev": "SCREEN_01_Dashboard_Overview_1"}')
	Screen.DataSet.Add('SCREEN_01_Dashboard_Overview_1', '{"parent": "Root navigation level","next": "", "prev": "SCREEN_01_Dashboard_Overview_1"}')
}

/**
 * @function btnHideMainNavigation_OnTapped
 * @description This function is activated when the "Hide Main Navigation" button is tapped.
 *              It calls the `HideMainNavigation` function from the `module_navigation` module,
 *              which is responsible for concealing the main navigation menu.
 * @param {any} item - The button at which the event occurs.
 * @param {number} x - The X-coordinate of the input point.
 * @param {number} y - The Y-coordinate of the input point.
 * @param {number} modifiers - A bitmask indicating which modifier keys (e.g., Control, Shift, Alt) were pressed during the event.
 * @param {number} trigger - An integer indicating the specific event trigger (e.g., Touch, Left-click, keyboard key).
 */
export async function btnHideMainNavigation_OnTapped(item, x, y, modifiers, trigger) {
	module_navigation.HideMainNavigation();
}