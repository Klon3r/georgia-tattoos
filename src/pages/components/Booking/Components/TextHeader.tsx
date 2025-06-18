import clsx from "clsx";
import { bookingRequiredTextStyle, inputTextNameStyle } from "../Tailwind";
import { TextHeaderType } from "./Types";

const TextHeader = ({
  headerText,
  required = false,
  divClassName,
}: TextHeaderType) => {
  return (
    <div className={clsx(inputTextNameStyle, divClassName)}>
      {headerText}
      {required && <span className={bookingRequiredTextStyle}>*</span>}
    </div>
  );
};

export default TextHeader;
