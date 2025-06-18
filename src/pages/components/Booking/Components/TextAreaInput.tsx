import clsx from "clsx";
import { storeValue } from "../../../../utils/bookingFormUtil";
import { TextAreaInputType } from "./Types";
import { textAreaInputStyle, inputStyleFocusBorder } from "../Tailwind";

const TextAreaInput = ({
  id,
  placeholder,
  ariaLabel,
  rows,
  required = false,
  resize = true,
}: TextAreaInputType) => {
  return (
    <textarea
      className={clsx(
        textAreaInputStyle,
        inputStyleFocusBorder,
        resize ? "" : "resize-none"
      )}
      id={id}
      title={id}
      placeholder={placeholder}
      aria-label={ariaLabel}
      rows={rows}
      required={required}
      onChange={(e) => {
        storeValue(e);
      }}
    />
  );
};

export default TextAreaInput;
