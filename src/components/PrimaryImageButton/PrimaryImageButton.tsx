import { changeURL } from "../../utils/url.util";
import { buttonTailwindStyle } from "./PrimaryImageButtonTailwind";

type PrimaryImageButtonType = {
  imageSource: string;
  url: string;
  openNewTab?: boolean;
  ariaLabel?: string;
  testId: string;
};

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
