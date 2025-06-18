type PrimaryButtonType = {
  /**
   * The URL to navigate to when the button is clicked.
   */
  location: string;

  /**
   * The text that will be displayed on the button.
   */
  name: string;

  /**
   * Optional - Whether the link should open in a new tab.
   * If `true`, the URL will open in a new tab, otherwise it opens in the current tab.
   * Default is `false` (open in the current tab).
   */
  openNewTab?: boolean;

  /** Specify if you want a custom style class using tailwind */
  styleClass?: string;
};
export default PrimaryButtonType;
