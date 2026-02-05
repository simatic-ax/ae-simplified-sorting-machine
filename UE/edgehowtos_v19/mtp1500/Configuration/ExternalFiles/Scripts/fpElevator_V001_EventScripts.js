/**
 * @function btnMoveElevatorUp_OnDown
 * @description This function is triggered when the elevator up button is pressed.
 *              It sets the local TagMoveUp to 1 to initiate upward movement, but only if
 *              the system is not in automatic mode, allowing manual control.
 * @param {Object} item - The button at which the event occurs.
 */
export function btnMoveElevatorUp_OnDown(item) {
	if (Tags("AutomaticMode").Read() === false) {
		Tags("TagMoveUp").Write(1);
	}
}

/**
 * @function btnMoveElevatorUp_OnUp
 * @description This function is triggered when the elevator up button is released.
 *              It resets the local TagMoveUp to 0 to stop upward movement, but only if
 *              the system is not in automatic mode.
 * @param {Object} item - The button at which the event occurs.
 */
export function btnMoveElevatorUp_OnUp(item) {
	if (Tags("AutomaticMode").Read() === false) {
		Tags("TagMoveUp").Write(0);
	}
}

/**
 * @function btnMoveElevatorDown_OnDown
 * @description This function is triggered when the elevator down button is pressed.
 *              It sets the local TagMoveDown to 1 to initiate downward movement, but only if
 *              the system is not in automatic mode, allowing manual control.
 * @param {Object} item - The button at which the event occurs.
 */
export function btnMoveElevatorDown_OnDown(item) {
	if (Tags("AutomaticMode").Read() === false) {
		Tags("TagMoveDown").Write(1);
	}
}

/**
 * @function btnMoveElevatorDown_OnUp
 * @description This function is triggered when the elevator down button is released.
 *              It resets the local TagMoveDown to 0 to stop downward movement, but only if
 *              the system is not in automatic mode.
 * @param {Object} item - The button at which the event occurs.
 */
export function btnMoveElevatorDown_OnUp(item) {
	if (Tags("AutomaticMode").Read() === false) {
		Tags("TagMoveDown").Write(0);
	}
}

/**
 * @function btnMoveElevatorStop_OnDown
 * @description This function is triggered when the elevator stop button is pressed.
 *              It sets the local TagStop to 1 to initiate stop command, but only if
 *              the system is not in automatic mode, allowing manual control.
 * @param {Object} item - The button at which the event occurs.
 */
export function btnMoveElevatorStop_OnDown(item) {
	if (Tags("AutomaticMode").Read() === false) {
		Tags("TagStop").Write(1);
	}
}

/**
 * @function btnMoveElevatorStop_OnUp
 * @description This function is triggered when the elevator stop button is released.
 *              It resets the local TagStop to 0 to release the stop command, but only if
 *              the system is not in automatic mode.
 * @param {Object} item - The button at which the event occurs.
 */
export function btnMoveElevatorStop_OnUp(item) {
	if (Tags("AutomaticMode").Read() === false) {
		Tags("TagStop").Write(0);
	}
}
