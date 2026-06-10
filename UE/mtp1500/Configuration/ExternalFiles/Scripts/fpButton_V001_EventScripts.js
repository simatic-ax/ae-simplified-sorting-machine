/**
 * @function fpButton_OnDown
 * @description This function is triggered when the faceplate button is pressed down.
 *              It sets the local ControlTag to TRUE when pressed, but only if the system
 *              is not in automatic mode. This allows manual control of the box trigger.
 * @param {Object} item - The button at which the event occurs.
 * @param {DInt} x - The x-coordinate of the input point.
 * @param {DInt} y - The y-coordinate of the input point.
 * @param {Int32} modifiers - HmiKeyboardModifier: Help key that is pressed (0=None, 1=Control, 2=Shift, 3=Control+Shift, 4=Alt, 5=Control+Alt, 6=Shift+Alt, 7=Control+Shift+Alt).
 * @param {Int32} trigger - HmiEventTrigger: How the event is triggered (0=Unknown, 1=Touch, 16=Left-click, 17=Middle-click, 18=Right-click, 256=Enter, 257=Space, 258=Escape).
 */
export function fpButton_OnDown(item, x, y, modifiers, trigger) {
    if (Tags("AutomaticMode").Read() === false) {
      // Set local ControlTag to TRUE when pressed
      HMIRuntime.Tags.SysFct.SetTagValue("ControlTag", true);
    }
}

/**
 * @function fpButton_OnUp
 * @description This function is triggered when the faceplate button is released.
 *              It resets the local ControlTag to FALSE on release, but only if the system
 *              is not in automatic mode. This completes the manual control trigger action.
 * @param {Object} item - The button at which the event occurs.
 * @param {DInt} x - The x-coordinate of the input point.
 * @param {DInt} y - The y-coordinate of the input point.
 * @param {Int32} modifiers - HmiKeyboardModifier: Help key that is pressed (0=None, 1=Control, 2=Shift, 3=Control+Shift, 4=Alt, 5=Control+Alt, 6=Shift+Alt, 7=Control+Shift+Alt).
 * @param {Int32} trigger - HmiEventTrigger: How the event is triggered (0=Unknown, 1=Touch, 16=Left-click, 17=Middle-click, 18=Right-click, 256=Enter, 257=Space, 258=Escape).
 */
export function fpButton_OnUp(item, x, y, modifiers, trigger) {
    if (Tags("AutomaticMode").Read() === false) {
      // Reset local ControlTag to FALSE on release
      HMIRuntime.Tags.SysFct.SetTagValue("ControlTag", false);
    }
}