import clsx from "clsx";
import { changeURL } from "../../utils/url.util";
import {
  buttonHoverTailwindStyle,
  buttonTailwindStyle,
} from "./PrimaryButtonTailwind";

type PrimaryButtonType = {
  location: string;
  name: string;
  openNewTab?: boolean;
  styleClass?: string;
  testId?: string;
};

const PrimaryButton = ({
  location,
  name,
  openNewTab = false,
  styleClass = "",
  testId,
}: PrimaryButtonType) => {
  const handleOnClick = () => {
    openNewTab ? changeURL(location, openNewTab) : changeURL(location);
  };

  return (
    <div className="flex flex-col m-4">
      <button
        className={clsx(
          styleClass
            ? styleClass
            : `${buttonTailwindStyle} ${buttonHoverTailwindStyle}`,
        )}
        onClick={handleOnClick}
        data-testid={testId}
      >
        {name}
      </button>
    </div>
  );
};

export default PrimaryButton;
