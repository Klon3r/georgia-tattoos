import clsx from "clsx";
import { changeURL } from "../../../utils/url.util";
import {
  buttonHoverTailwindStyle,
  buttonTailwindStyle,
} from "./PrimaryButtonTailwind";
import PrimaryButtonType from "./PrimaryButtonType";

const PrimaryButton = ({
  location,
  name,
  openNewTab = false,
  styleClass = "",
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
      >
        {name}
      </button>
    </div>
  );
};

export default PrimaryButton;
