import { useState } from "react";
import { AftercareButtonType } from "./AftercareButtonType";
import clsx from "clsx";

const AftercareButton = ({
  name,
  icon,
  className,
  clickFunction,
}: AftercareButtonType) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    isButtonClicked ? setIsButtonClicked(false) : setIsButtonClicked(true);
    if (clickFunction !== undefined) {
      isButtonClicked ? clickFunction(false) : clickFunction(true);
    }
  };

  return (
    <button className={className} onClick={handleButtonClick}>
      {name}{" "}
      {icon && (
        <span
          className={clsx("transition-transform duration-300", {
            "rotate-180": isButtonClicked,
          })}
        >
          {icon}
        </span>
      )}
    </button>
  );
};

export default AftercareButton;
