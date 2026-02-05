/**
 * @function txtMoveElevatorDown_OnActivated
 * @description This function is activated when a "Move Elevator Down" action is triggered.
 *              It sends a command to the server interface to initiate downward movement of the elevator/crane
 *              by writing the value '1' to the corresponding tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtMoveElevatorDown_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ElevatorComand_moveDown").Write(1);
	} catch (err) {}
}

/**
 * @function txtMoveElevatorDown_OnDeactivated
 * @description This function is activated when the "Move Elevator Down" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to stop or reset the downward movement of the elevator/crane
 *              by writing the value '0' to the corresponding tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtMoveElevatorDown_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ElevatorComand_moveDown").Write(0);
	} catch (err) {}
}

/**
 * @function txtMoveElevatorUp_OnActivated
 * @description This function is activated when a "Move Elevator Up" action is triggered.
 *              It sends a command to the server interface to initiate upward movement of the elevator/crane
 *              by writing the value '1' to the corresponding tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtMoveElevatorUp_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ElevatorComand_moveUp").Write(1);
	} catch (err) {}
}

/**
 * @function txtMoveElevatorUp_OnDeactivated
 * @description This function is activated when the "Move Elevator Up" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to stop or reset the upward movement of the elevator/crane
 *              by writing the value '0' to the corresponding tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtMoveElevatorUp_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ElevatorComand_moveUp").Write(0);
	} catch (err) {}
}

/**
 * @function txtStopElevator_OnActivated
 * @description This function is activated when a "Stop Elevator" action is triggered.
 *              It sends a command to the server interface to immediately stop the elevator/crane
 *              by writing the value '1' to the corresponding 'stop' tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtStopElevator_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ElevatorComand_stop").Write(1);
	} catch (err) {}
}

/**
 * @function txtStopElevator_OnDeactivated
 * @description This function is activated when the "Stop Elevator" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to reset or clear the stop command for the elevator/crane
 *              by writing the value '0' to the corresponding 'stop' tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtStopElevator_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ElevatorComand_stop").Write(0);
	} catch (err) {}
}

/**
 * @function txtMoveConveyor1Stop_OnActivated
 * @description This function is activated when a "Stop Conveyor 1" action is triggered.
 *              It sends a command to the server interface to immediately stop Conveyor 1
 *              by writing the value '1' to its corresponding 'stop' tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtMoveConveyor1Stop_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__0__stop").Write(1);
	} catch (err) {}
}

/**
 * @function txtMoveConveyor1Stop_OnDeactivated
 * @description This function is activated when the "Stop Conveyor 1" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to reset or clear the stop command for Conveyor 1
 *              by writing the value '0' to its corresponding 'stop' tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtMoveConveyor1Stop_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__0__stop").Write(0);
	} catch (err) {}
}

// Conveyor1 Forward
/**
 * @function txtMoveConveyor1Forward_OnActivated
 * @description This function is activated when a "Move Conveyor 1 Forward" action is triggered.
 *              It sends a command to the server interface to initiate forward movement of Conveyor 1
 *              by writing the value '1' to its corresponding 'moveForward' tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtMoveConveyor1Forward_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__0__moveForward").Write(1);
	} catch (err) {}
}

/**
 * @function txtMoveConveyor1Forward_OnDeactivated
 * @description This function is activated when the "Move Conveyor 1 Forward" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to stop or reset the forward movement of Conveyor 1
 *              by writing the value '0' to its corresponding 'moveForward' tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtMoveConveyor1Forward_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__0__moveForward").Write(0);
	} catch (err) {}
}

// Conveyor1 Backward
/**
 * @function txtMoveConveyor1Backward_OnActivated
 * @description This function is activated when a "Move Conveyor 1 Backward" action is triggered.
 *              It sends a command to the server interface to initiate backward movement of Conveyor 1
 *              by writing the value '1' to its corresponding 'moveBackward' tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtMoveConveyor1Backward_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__0__moveBackward").Write(1);
	} catch (err) {}
}

/**
 * @function txtMoveConveyor1Backward_OnDeactivated
 * @description This function is activated when the "Move Conveyor 1 Backward" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to stop or reset the backward movement of Conveyor 1
 *              by writing the value '0' to its corresponding 'moveBackward' tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtMoveConveyor1Backward_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__0__moveBackward").Write(0);
	} catch (err) {}
}

// Conveyor2 Stop
/**
 * @function txtMoveConveyor2Stop_OnActivated
 * @description This function is activated when a "Stop Conveyor 2" action is triggered.
 *              It sends a command to the server interface to immediately stop Conveyor 2
 *              by writing the value '1' to its corresponding 'stop' tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtMoveConveyor2Stop_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__1__stop").Write(1);
	} catch (err) {}
}

/**
 * @function txtMoveConveyor2Stop_OnDeactivated
 * @description This function is activated when the "Stop Conveyor 2" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to reset or clear the stop command for Conveyor 2
 *              by writing the value '0' to its corresponding 'stop' tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtMoveConveyor2Stop_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__1__stop").Write(0);
	} catch (err) {}
}

// Conveyor2 Forward
/**
 * @function txtMoveConveyor2Forward_OnActivated
 * @description This function is activated when a "Move Conveyor 2 Forward" action is triggered.
 *              It sends a command to the server interface to initiate forward movement of Conveyor 2
 *              by writing the value '1' to its corresponding 'moveForward' tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtMoveConveyor2Forward_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__1__moveForward").Write(1);
	} catch (err) {}
}

/**
 * @function txtMoveConveyor2Forward_OnDeactivated
 * @description This function is activated when the "Move Conveyor 2 Forward" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to stop or reset the forward movement of Conveyor 2
 *              by writing the value '0' to its corresponding 'moveForward' tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtMoveConveyor2Forward_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__1__moveForward").Write(0);
	} catch (err) {}
}

// Conveyor2 Backward
/**
 * @function txtMoveConveyor2Backward_OnActivated
 * @description This function is activated when a "Move Conveyor 2 Backward" action is triggered.
 *              It sends a command to the server interface to initiate backward movement of Conveyor 2
 *              by writing the value '1' to its corresponding 'moveBackward' tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtMoveConveyor2Backward_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__1__moveBackward").Write(1);
	} catch (err) {}
}

/**
 * @function txtMoveConveyor2Backward_OnDeactivated
 * @description This function is activated when the "Move Conveyor 2 Backward" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to stop or reset the backward movement of Conveyor 2
 *              by writing the value '0' to its corresponding 'moveBackward' tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtMoveConveyor2Backward_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__1__moveBackward").Write(0);
	} catch (err) {}
}

// Conveyor3 Stop
/**
 * @function txtMoveConveyor3Stop_OnActivated
 * @description This function is activated when a "Stop Conveyor 3" action is triggered.
 *              It sends a command to the server interface to immediately stop Conveyor 3
 *              by writing the value '1' to its corresponding 'stop' tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtMoveConveyor3Stop_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__2__stop").Write(1);
	} catch (err) {}
}

/**
 * @function txtMoveConveyor3Stop_OnDeactivated
 * @description This function is activated when the "Stop Conveyor 3" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to reset or clear the stop command for Conveyor 3
 *              by writing the value '0' to its corresponding 'stop' tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtMoveConveyor3Stop_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__2__stop").Write(0);
	} catch (err) {}
}

// Conveyor3 Forward
/**
 * @function txtMoveConveyor3Forward_OnActivated
 * @description This function is activated when a "Move Conveyor 3 Forward" action is triggered.
 *              It sends a command to the server interface to initiate forward movement of Conveyor 3
 *              by writing the value '1' to its corresponding 'moveForward' tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtMoveConveyor3Forward_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__2__moveForward").Write(1);
	} catch (err) {}
}

/**
 * @function txtMoveConveyor3Forward_OnDeactivated
 * @description This function is activated when the "Move Conveyor 3 Forward" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to stop or reset the forward movement of Conveyor 3
 *              by writing the value '0' to its corresponding 'moveForward' tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtMoveConveyor3Forward_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__2__moveForward").Write(0);
	} catch (err) {}
}

// Conveyor3 Backward
/**
 * @function txtMoveConveyor3Backward_OnActivated
 * @description This function is activated when a "Move Conveyor 3 Backward" action is triggered.
 *              It sends a command to the server interface to initiate backward movement of Conveyor 3
 *              by writing the value '1' to its corresponding 'moveBackward' tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtMoveConveyor3Backward_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__2__moveBackward").Write(1);
	} catch (err) {}
}

/**
 * @function txtMoveConveyor3Backward_OnDeactivated
 * @description This function is activated when the "Move Conveyor 3 Backward" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to stop or reset the backward movement of Conveyor 3
 *              by writing the value '0' to its corresponding 'moveBackward' tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtMoveConveyor3Backward_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ConveyorCommand__2__moveBackward").Write(0);
	} catch (err) {}
}

// Set Automatic
/**
 * @function txtAutomaticApplication_OnActivated
 * @description This function is activated when the "Set Automatic Application" action is triggered.
 *              It sets the application mode to automatic by writing '1' to the 'automatic' tag
 *              and simultaneously sets the manual mode to '0'.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtAutomaticApplication_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_automatic").Write(1);
		Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_manual").Write(0);
	} catch (err) {}
}

// Set Manual
/**
 * @function txtManualApplication_OnActivated
 * @description This function is activated when the "Set Manual Application" action is triggered.
 *              It sets the application mode to manual by writing '1' to the 'manual' tag
 *              and simultaneously sets the automatic mode to '0'.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtManualApplication_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_automatic").Write(0);
		Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_manual").Write(1);
	} catch (err) {}
}

//Acknowledge
/**
 * @function txtAcknowledge_OnActivated
 * @description This function is activated when an "Acknowledge" action is triggered.
 *              It sends a command to the server interface to acknowledge an event or alarm
 *              by writing the value '1' to the corresponding 'acknowledge' tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtAcknowledge_OnActivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_acknowledge").Write(1);
	} catch (err) {}
}

/**
 * @function txtAcknowledge_OnDeactivated
 * @description This function is activated when the "Acknowledge" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to reset or clear the acknowledge command
 *              by writing the value '0' to the corresponding 'acknowledge' tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtAcknowledge_OnDeactivated(item) {
	try {
		Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_acknowledge").Write(0);
	} catch (err) {}
}

// new Box Control
/**
 * @function btnAppNewBoxRandom1_Down
 * @description This function is activated when the "New Box Random" button is pressed down.
 *              It sends a command to the server interface to request the creation of a new box at a random position
 *              by writing the value '1' to the corresponding tag.
 * @param {any} item - The item that triggered this event.
 * @param {number} x - The x-coordinate of the mouse pointer relative to the item.
 * @param {number} y - The y-coordinate of the mouse pointer relative to the item.
 * @param {any} modifiers - Information about modifier keys (e.g., Shift, Ctrl) pressed.
 * @param {any} trigger - The trigger event details.
 */
export function btnAppNewBoxRandom1_Down(item, x, y, modifiers, trigger) {
	Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_newBoxRandom").Write(1);
}

/**
 * @function btnAppNewBoxRandom1_Up
 * @description This function is activated when the "New Box Random" button is released.
 *              It sends a command to the server interface to reset the request for a new random box
 *              by writing the value '0' to the corresponding tag.
 * @param {any} item - The item that triggered this event.
 * @param {number} x - The x-coordinate of the mouse pointer relative to the item.
 * @param {number} y - The y-coordinate of the mouse pointer relative to the item.
 * @param {any} modifiers - Information about modifier keys (e.g., Shift, Ctrl) pressed.
 * @param {any} trigger - The trigger event details.
 */
export function btnAppNewBoxRandom1_Up(item, x, y, modifiers, trigger) {
	Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_newBoxRandom").Write(0);
}

/**
 * @function btnAppNewBoxX1_Down
 * @description This function is activated when the "New Box X" button is pressed down.
 *              It sends a command to the server interface to request the creation of a new box at a specified X coordinate
 *              by writing the value '1' to the corresponding tag.
 * @param {any} item - The item that triggered this event.
 * @param {number} x - The x-coordinate of the mouse pointer relative to the item.
 * @param {number} y - The y-coordinate of the mouse pointer relative to the item.
 * @param {any} modifiers - Information about modifier keys (e.g., Shift, Ctrl) pressed.
 * @param {any} trigger - The trigger event details.
 */
export function btnAppNewBoxX1_Down(item, x, y, modifiers, trigger) {
		Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_newBoxX").Write(1);
}

/**
 * @function btnAppNewBoxX1_Up
 * @description This function is activated when the "New Box X" button is released.
 *              It sends a command to the server interface to reset the request for a new box at a specified X coordinate
 *              by writing the value '0' to the corresponding tag.
 * @param {any} item - The item that triggered this event.
 * @param {number} x - The x-coordinate of the mouse pointer relative to the item.
 * @param {number} y - The y-coordinate of the mouse pointer relative to the item.
 * @param {any} modifiers - Information about modifier keys (e.g., Shift, Ctrl) pressed.
 * @param {any} trigger - The trigger event details.
 */
export function btnAppNewBoxX1_Up(item, x, y, modifiers, trigger) {
		Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_newBoxX").Write(0);
}

/**
 * @function btnAppNewBoxY1_Down
 * @description This function is activated when the "New Box Y" button is pressed down.
 *              It sends a command to the server interface to request the creation of a new box at a specified Y coordinate
 *              by writing the value '1' to the corresponding tag.
 * @param {any} item - The item that triggered this event.
 * @param {number} x - The x-coordinate of the mouse pointer relative to the item.
 * @param {number} y - The y-coordinate of the mouse pointer relative to the item.
 * @param {any} modifiers - Information about modifier keys (e.g., Shift, Ctrl) pressed.
 * @param {any} trigger - The trigger event details.
 */
export function btnAppNewBoxY1_Down(item, x, y, modifiers, trigger) {
		Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_newBoxY").Write(1);
}

/**
 * @function btnAppNewBoxY1_Up
 * @description This function is activated when the "New Box Y" button is released.
 *              It sends a command to the server interface to reset the request for a new box at a specified Y coordinate
 *              by writing the value '0' to the corresponding tag.
 * @param {any} item - The item that triggered this event.
 * @param {number} x - The x-coordinate of the mouse pointer relative to the item.
 * @param {number} y - The y-coordinate of the mouse pointer relative to the item.
 * @param {any} modifiers - Information about modifier keys (e.g., Shift, Ctrl) pressed.
 * @param {any} trigger - The trigger event details.
 */
export function btnAppNewBoxY1_Up(item, x, y, modifiers, trigger) {
		Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_newBoxY").Write(0);
}

// txtBox Reset All
/**
 * @function txtResetAll_OnActivated
 * @description This function is activated when a "Reset All" action is triggered.
 *              It sends a command to the server interface to reset all relevant application states or components
 *              by writing the value '1' to the corresponding 'resetAll' tag.
 * @param {any} item - The item that triggered this activation (though not used within the function's current logic).
 */
export function txtResetAll_OnActivated(item) {
		Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_resetAll").Write(1);
}

/**
 * @function txtResetAll_OnDeactivated
 * @description This function is activated when the "Reset All" action is no longer triggered (deactivated).
 *              It sends a command to the server interface to reset or clear the 'reset all' command
 *              by writing the value '0' to the corresponding 'resetAll' tag.
 * @param {any} item - The item that triggered this deactivation (though not used within the function's current logic).
 */
export function txtResetAll_OnDeactivated(item) {
		Tags("ServerInterfaces_Server_Interface_1_ApplicationCommand_resetAll").Write(0);
}