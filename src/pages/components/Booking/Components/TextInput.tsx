import clsx from "clsx";
import { inputStyle, inputStyleFocusBorder } from "../Tailwind";
import { storeValue } from "../../../../utils/bookingForm.util";
import { TextInputType } from "./Types";

const TextInput = ({
  id,
  placeholder,
  ariaLabel,
  required = false,
  maxLength = 50,
}: TextInputType) => {
  return (
    <input
      className={clsx(inputStyle, inputStyleFocusBorder)}
      type="text"
      id={id}
      name={id}
      placeholder={placeholder}
      title={placeholder}
      aria-label={ariaLabel}
      required={required}
      onChange={(e) => storeValue(e)}
      maxLength={maxLength}
    />
  );
};

export default TextInput;
