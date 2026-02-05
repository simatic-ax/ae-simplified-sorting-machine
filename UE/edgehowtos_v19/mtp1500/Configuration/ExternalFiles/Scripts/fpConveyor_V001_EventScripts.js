/**
 * @function btnMoveConveyor1Forward_OnDown
 * @description This function is triggered when the conveyor forward button is pressed.
 *              It sets the TagMoveForward to 1 to initiate forward movement, but only if
 *              the system is not in automatic mode, allowing manual control.
 * @param {Object} item - The button at which the event occurs.
 * @param {DInt} x - The x-coordinate of the input point.
 * @param {DInt} y - The y-coordinate of the input point.
 * @param {Int32} modifiers - HmiKeyboardModifier: Help key that is pressed (0=None, 1=Control, 2=Shift, 3=Control+Shift, 4=Alt, 5=Control+Alt, 6=Shift+Alt, 7=Control+Shift+Alt).
 * @param {Int32} trigger - HmiEventTrigger: How the event is triggered (0=Unknown, 1=Touch, 16=Left-click, 17=Middle-click, 18=Right-click, 256=Enter, 257=Space, 258=Escape).
 */
export function btnMoveConveyor1Forward_OnDown(item, x, y, modifiers, trigger) {
	if (Tags("AutomaticMode").Read() === false) {
		Tags("TagMoveForward").Write(1);
	}
}

/**
 * @function btnMoveConveyor1Forward_OnUp
 * @description This function is triggered when the conveyor forward button is released.
 *              It resets the TagMoveForward to 0 to stop forward movement, but only if
 *              the system is not in automatic mode.
 * @param {Object} item - The button at which the event occurs.
 * @param {DInt} x - The x-coordinate of the input point.
 * @param {DInt} y - The y-coordinate of the input point.
 * @param {Int32} modifiers - HmiKeyboardModifier: Help key that is pressed (0=None, 1=Control, 2=Shift, 3=Control+Shift, 4=Alt, 5=Control+Alt, 6=Shift+Alt, 7=Control+Shift+Alt).
 * @param {Int32} trigger - HmiEventTrigger: How the event is triggered (0=Unknown, 1=Touch, 16=Left-click, 17=Middle-click, 18=Right-click, 256=Enter, 257=Space, 258=Escape).
 */
export function btnMoveConveyor1Forward_OnUp(item, x, y, modifiers, trigger) {
	if (Tags("AutomaticMode").Read() === false) {
		Tags("TagMoveForward").Write(0);
	}
}

/**
 * @function btnMoveConveyor1Backward_OnDown
 * @description This function is triggered when the conveyor backward button is pressed.
 *              It sets the TagMoveBackward to 1 to initiate backward movement, but only if
 *              the system is not in automatic mode, allowing manual control.
 * @param {Object} item - The button at which the event occurs.
 * @param {DInt} x - The x-coordinate of the input point.
 * @param {DInt} y - The y-coordinate of the input point.
 * @param {Int32} modifiers - HmiKeyboardModifier: Help key that is pressed (0=None, 1=Control, 2=Shift, 3=Control+Shift, 4=Alt, 5=Control+Alt, 6=Shift+Alt, 7=Control+Shift+Alt).
 * @param {Int32} trigger - HmiEventTrigger: How the event is triggered (0=Unknown, 1=Touch, 16=Left-click, 17=Middle-click, 18=Right-click, 256=Enter, 257=Space, 258=Escape).
 */
export function btnMoveConveyor1Backward_OnDown(item, x, y, modifiers, trigger) {
	if (Tags("AutomaticMode").Read() === false) {
		Tags("TagMoveBackward").Write(1);
	}
}

/**
 * @function btnMoveConveyor1Backward_OnUp
 * @description This function is triggered when the conveyor backward button is released.
 *              It resets the TagMoveBackward to 0 to stop backward movement, but only if
 *              the system is not in automatic mode.
 * @param {Object} item - The button at which the event occurs.
 * @param {DInt} x - The x-coordinate of the input point.
 * @param {DInt} y - The y-coordinate of the input point.
 * @param {Int32} modifiers - HmiKeyboardModifier: Help key that is pressed (0=None, 1=Control, 2=Shift, 3=Control+Shift, 4=Alt, 5=Control+Alt, 6=Shift+Alt, 7=Control+Shift+Alt).
 * @param {Int32} trigger - HmiEventTrigger: How the event is triggered (0=Unknown, 1=Touch, 16=Left-click, 17=Middle-click, 18=Right-click, 256=Enter, 257=Space, 258=Escape).
 */
export function btnMoveConveyor1Backward_OnUp(item, x, y, modifiers, trigger) {
	if (Tags("AutomaticMode").Read() === false) {
		Tags("TagMoveBackward").Write(0);
	}
}

/**
 * @function btnMoveConveyor1Stop_OnDown
 * @description This function is triggered when the conveyor stop button is pressed.
 *              It sets the TagStop to 1 to initiate stop command, but only if
 *              the system is not in automatic mode, allowing manual control.
 * @param {Object} item - The button at which the event occurs.
 * @param {DInt} x - The x-coordinate of the input point.
 * @param {DInt} y - The y-coordinate of the input point.
 * @param {Int32} modifiers - HmiKeyboardModifier: Help key that is pressed (0=None, 1=Control, 2=Shift, 3=Control+Shift, 4=Alt, 5=Control+Alt, 6=Shift+Alt, 7=Control+Shift+Alt).
 * @param {Int32} trigger - HmiEventTrigger: How the event is triggered (0=Unknown, 1=Touch, 16=Left-click, 17=Middle-click, 18=Right-click, 256=Enter, 257=Space, 258=Escape).
 */
export function btnMoveConveyor1Stop_OnDown(item, x, y, modifiers, trigger) {
	if (Tags("AutomaticMode").Read() === false) {
		Tags("TagStop").Write(1);
	}
}

/**
 * @function btnMoveConveyor1Stop_OnUp
 * @description This function is triggered when the conveyor stop button is released.
 *              It resets the TagStop to 0 to release the stop command, but only if
 *              the system is not in automatic mode.
 * @param {Object} item - The button at which the event occurs.
 * @param {DInt} x - The x-coordinate of the input point.
 * @param {DInt} y - The y-coordinate of the input point.
 * @param {Int32} modifiers - HmiKeyboardModifier: Help key that is pressed (0=None, 1=Control, 2=Shift, 3=Control+Shift, 4=Alt, 5=Control+Alt, 6=Shift+Alt, 7=Control+Shift+Alt).
 * @param {Int32} trigger - HmiEventTrigger: How the event is triggered (0=Unknown, 1=Touch, 16=Left-click, 17=Middle-click, 18=Right-click, 256=Enter, 257=Space, 258=Escape).
 */
export function btnMoveConveyor1Stop_OnUp(item, x, y, modifiers, trigger) {
	if (Tags("AutomaticMode").Read() === false) {
		Tags("TagStop").Write(0);
	}
}
