type PrimaryImageButtonType = {
  /**
   * The location of the image for display on the button
   */
  imageSource: string;

  /**
   * The URL to navigate to when the button is clicked.
   */
  url: string;

  /**
   * Optional - Whether the link should open in a new tab.
   * If `true`, the URL will open in a new tab, otherwise it opens in the current tab.
   * Default is `false` (open in the current tab).
   */
  openNewTab?: boolean;

  /**
   * Optional - Provides an accessible label for the button, used by screen readers.
   * If not provided, assistive technologies may use other text or image alt attributes.
   * Use this to describe the button's purpose or destination for users relying on accessibility tools.
   */
  ariaLabel?: string;

  /**
   * A unique identifier used for selecting this button in automated tests (e.g., with Playwright).
   * This value will be set as the element's `data-testid` attribute.
   */
  testId: string;
};

export default PrimaryImageButtonType;
