/**
 * @function HideMainNavigation
 * @description Hides the main navigation panel and its hide button by setting their visibility to false.
 */
export function HideMainNavigation() {
  // Set the main navigation invisible
  Screen.FindItem("~/swMainNavigation").Visible =
    Screen.FindItem("~/btnHideMainNavigation").Visible = false;
}

/**
 * @function HideSubNavigation
 * @description Hides the sub-navigation panel by setting its visibility to false.
 */
export function HideSubNavigation() {
  // Set the sub navigation invisible
  Screen.FindItem("~/swSubNavigation").Visible = false;
}

/**
 * @function HideThirdNavigation
 * @description Hides the third navigation panel by setting its visibility to false.
 */
export function HideThirdNavigation() {
  // Set the third navigation invisible
  Screen.FindItem("~/swThirdNavigation").Visible = false;
}

/**
 * @function ShowMainNavigation
 * @description Shows the main navigation panel and its hide button by setting their visibility to true.
 */
export function ShowMainNavigation() {
  // Set the main navigation visible
  Screen.FindItem("~/swMainNavigation").Visible =
    Screen.FindItem("~/btnHideMainNavigation").Visible = true;
}

/**
 * @function ShowSubNavigation
 * @description Shows the sub-navigation panel and highlights a specific button by number.
 *              If no button number is provided, the first button (1) will be highlighted by default.
 *              Uses both AlternateBackColor and HorizontalScrollBarPosition to ensure the correct
 *              button is highlighted even after screen changes.
 * @param {number} ButtonNumber - The number of the button to highlight (optional, defaults to 1).
 */
export function ShowSubNavigation(ButtonNumber) {
// Set the sub navigation visible and highlight button by number (if no number given, first button will be highlighted)
  const subNavigation = Screen.FindItem("~/swSubNavigation");
  subNavigation.Visible = true;
  if (!ButtonNumber) {
    ButtonNumber = 1;
  }
  // set an inner property of the screen, so the update of the button to highlight will be triggered
  subNavigation.CurrentScreen.AlternateBackColor = ButtonNumber;
  // set an outer property of the navigation so the correct button gets also highlighted,
  // even if the navigation will be changed by a "ScreenChange", because the inner property change will be lost then.
  subNavigation.HorizontalScrollBarPosition = ButtonNumber;
}

/**
 * @function ShowThirdNavigation
 * @description Shows the third navigation panel and highlights a specific button by number.
 *              If no button number is provided, the first button (1) will be highlighted by default.
 *              Uses both AlternateBackColor and HorizontalScrollBarPosition to ensure the correct
 *              button is highlighted even after screen changes.
 * @param {number} ButtonNumber - The number of the button to highlight (optional, defaults to 1).
 */
export function ShowThirdNavigation(ButtonNumber) {
// Set the sub navigation visible and highlight button by number (if no number given, first button will be highlighted)
  const subNavigation = Screen.FindItem("~/swThirdNavigation");
  subNavigation.Visible = true;
  if (!ButtonNumber) {
    ButtonNumber = 1;
  }
  // set an inner property of the screen, so the update of the button to highlight will be triggered
  subNavigation.CurrentScreen.AlternateBackColor = ButtonNumber;
  // set an outer property of the navigation so the correct button gets also highlighted,
  // even if the navigation will be changed by a "ScreenChange", because the inner property change will be lost then.
  subNavigation.HorizontalScrollBarPosition = ButtonNumber;
}

/**
 * @function ChangeScreen
 * @description Changes the active screen to the specified screen name.
 *              Automatically shows the tile navigation for all screens except "10_Application".
 * @param {string} screen - The name of the screen to change to.
 */
export function ChangeScreen(screen) {

  if (screen != "10_Application") {
    ShowTileNavigation();
  }
  HMIRuntime.UI.SysFct.ChangeScreen(screen, "../swContent")
}

/**
 * @function ShowTileNavigation
 * @description Shows the tile navigation buttons (TileUp, TileNext, TilePrevious) in the header.
 *              Silently fails if the header or buttons cannot be found.
 */
export function ShowTileNavigation() {
    var swHeader = HMIRuntime.UI.ActiveScreen.FindItem("./swHeader").CurrentScreen;
    swHeader.FindItem("./btnTileUp").Visible = true;
    swHeader.FindItem("./btnTileNext").Visible = true;
    swHeader.FindItem("./btnTilePrevious").Visible = true;
}

/**
 * @function HideTileNavigation
 * @description Hides the tile navigation buttons (TileUp, TileNext, TilePrevious) in the header.
 *              Silently fails if the header or buttons cannot be found.
 */
export function HideTileNavigation() {
    var swHeader = HMIRuntime.UI.ActiveScreen.FindItem("./swHeader").CurrentScreen;
    HMIRuntime.Trace("swHeaderName: " + swHeader.Name);
    swHeader.FindItem("./btnTileUp").Visible = false;
    swHeader.FindItem("./btnTileNext").Visible = false;
    swHeader.FindItem("./btnTilePrevious").Visible = false;
}

/**
 * @function HighlightThirdNavIcon
 * @description Highlights the active third navigation menu button with icon graphics and sets all other buttons to default colors.
 *              The active button shows the active graphic and uses highlight color (RGB 181,190,197).
 *              Inactive buttons show the inactive graphic and use default color (RGB 242,244,255).
 *              Iterates through up to 20 buttons with the same name pattern.
 * @param {string} ButtonName - The name of the button to highlight (e.g., "txtThirdNav1").
 */
export function HighlightThirdNavIcon(ButtonName) {
  // Highlights the active menu button and set all other buttons to default colors.
 
  const number = ButtonName.replace(/^\D+/g, '');
  const BtnName = ButtonName.slice(0, ButtonName.lastIndexOf(number));
  const gfxNameActive = "gfxThirdNavActive";
  const gfxNameInactive = "gfxThirdNavNotActive";

  let highlightColor = HMIRuntime.Math.RGB(181, 190, 197);
  let defaultColor = HMIRuntime.Math.RGB(242,244,255);

  for(let i = 1; i < 20; i++) {
    const currentButton = Screen.Items(BtnName + i);
    const currentGraphicActive = Screen.Items(gfxNameActive + i);
    const currentGraphicInactive = Screen.Items(gfxNameInactive + i);

    if (!currentButton) {
      break;
    }

    if(ButtonName === currentButton.Name) {
      currentButton.BackColor = highlightColor;
      currentGraphicActive.Visible = true;
      currentGraphicInactive.Visible = false;
    } else {
      currentButton.BackColor = defaultColor;
      currentGraphicActive.Visible = false;
      currentGraphicInactive.Visible = true;
    }
  } 
}

/**
 * @function HighlightButton
 * @description Highlights the active menu button and sets all other buttons in the same group to default colors.
 *              Uses different color schemes for main navigation (txtMainNav) versus other navigation levels.
 *              - Main navigation: Highlight RGB(0,161,209,255), Default RGB(38,39,41,255)
 *              - Other navigation: Highlight RGB(0,161,209,255), Default RGB(181,190,197,255)
 *              Iterates through up to 20 buttons with the same name pattern.
 * @param {string} ButtonName - The name of the button to highlight (e.g., "txtMainNav1", "txtSubNav2").
 * @param {string} ButtonsScreenPath - Optional screen path prefix to locate the buttons (defaults to empty string).
 */
export function HighlightButton(ButtonName, ButtonsScreenPath) {
  // Highlights the active menu button and set all other buttons to default colors.
 
if (!ButtonsScreenPath)
{
ButtonsScreenPath = "";
}
  const number = ButtonName.replace(/^\D+/g, '');
  const BtnName = ButtonName.slice(0, ButtonName.lastIndexOf(number));
  
  let highlightColor = HMIRuntime.Math.RGB(0,161,209,255);
  let defaultColor = HMIRuntime.Math.RGB(181,190,197,255);

  if (BtnName === "txtMainNav") {
    defaultColor = HMIRuntime.Math.RGB(38,39,41,255);
  }

  for(let i = 1; i < 20; i++) {
    const currentButton = Screen.FindItem(ButtonsScreenPath + BtnName + i);
    if (!currentButton) {
      break;
    }
    if(ButtonName === currentButton.Name) {
      currentButton.BackColor = highlightColor;
    } else {
      currentButton.BackColor = defaultColor;
    }
  } 
}

