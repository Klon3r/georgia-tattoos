import { changeURL } from "../../../utils/changeURL";
import {
  buttonHoverTailwindStyle,
  buttonTailwindStyle,
} from "./PrimaryButtonTailwind";
import PrimaryButtonType from "./PrimaryButtonType";

const PrimaryButton = ({
  location,
  name,
  openNewTab = false,
}: PrimaryButtonType) => {
  const handleOnClick = () => {
    openNewTab ? changeURL(location, openNewTab) : changeURL(location);
  };

  return (
    <div className="flex flex-col m-4">
      <button
        className={`${buttonTailwindStyle} ${buttonHoverTailwindStyle}`}
        onClick={handleOnClick}
      >
        {name}
      </button>
    </div>
  );
};

export default PrimaryButton;
