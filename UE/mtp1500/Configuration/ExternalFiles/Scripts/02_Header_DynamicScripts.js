/**
 * @function ioDateTime_ProcessValue_Trigger
 * @description This function retrieves the current date and time, then formats it as a localized string.
 *              It is specifically configured to use the 'de-DE' locale and the 'Europe/Warsaw' timezone,
 *              which is typically the format of the runtime (RT) server.
 *              (Includes commented-out examples for American formats.)
 * @param {any} item - The item that triggered this function (though not used within the function's current logic).
 * @returns {string} A string representation of the current date and time in the specified locale and timezone.
 */
export function ioDateTime_ProcessValue_Trigger(item) {
  var value;
  value = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Warsaw' });  // use format of RT server
   // value = new Date().toLocaleString('en-US');  // use American format
   // value = new Date().toLocaleString('en-US', {hour12: false});  // use American format with 24 hours
  return value;
}