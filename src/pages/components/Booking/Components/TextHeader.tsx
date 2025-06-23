import clsx from "clsx";
import { bookingRequiredTextStyle, inputTextNameStyle } from "../Tailwind";
import { TextHeaderType } from "./Types";

const TextHeader = ({
  headerText,
  required = false,
  divClassName,
  subHeaderText = "",
}: TextHeaderType) => {
  return (
    <div>
      <div className={clsx(inputTextNameStyle, divClassName)}>
        {headerText}
        {required && <span className={bookingRequiredTextStyle}>*</span>}
      </div>
      <div>{subHeaderText}</div>
    </div>
  );
};

export default TextHeader;
