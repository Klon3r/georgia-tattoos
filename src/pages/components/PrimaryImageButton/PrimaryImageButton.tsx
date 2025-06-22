import { changeURL } from "../../../utils/url.util";
import { buttonTailwindStyle } from "./PrimaryImageButtonTailwind";
import PrimaryImageButtonType from "./PrimaryImageButtonType";

const PrimaryImageButton = ({
  imageSource,
  url,
  openNewTab,
  ariaLabel,
  testId,
}: PrimaryImageButtonType) => {
  const handleOnClick = () => {
    openNewTab ? changeURL(url, openNewTab) : changeURL(url);
  };

  return (
    <a>
      <img
        className={buttonTailwindStyle}
        src={imageSource}
        alt={ariaLabel}
        aria-label={ariaLabel}
        onClick={handleOnClick}
        data-testid={testId}
      />
    </a>
  );
};

export default PrimaryImageButton;
