/**
 * @function fpBtnWithState_OnUp
 * @description This function is triggered when the button with state functionality is released.
 *              It toggles the boolean value of the StatusTag by reading its current value
 *              and writing the inverted value back to the tag. This creates a toggle button behavior.
 * @param {Object} item - The button at which the event occurs.
 * @param {DInt} x - The x-coordinate of the input point.
 * @param {DInt} y - The y-coordinate of the input point.
 * @param {Int32} modifiers - HmiKeyboardModifier: Help key that is pressed (0=None, 1=Control, 2=Shift, 3=Control+Shift, 4=Alt, 5=Control+Alt, 6=Shift+Alt, 7=Control+Shift+Alt).
 * @param {Int32} trigger - HmiEventTrigger: How the event is triggered (0=Unknown, 1=Touch, 16=Left-click, 17=Middle-click, 18=Right-click, 256=Enter, 257=Space, 258=Escape).
 */
export function fpBtnWithState_OnUp(item, x, y, modifiers, trigger) {
       
    const currentValue = Tags("StatusTag").Read();
    Tags("StatusTag").Write(!currentValue);

}
