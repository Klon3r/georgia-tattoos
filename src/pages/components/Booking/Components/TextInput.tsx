import clsx from "clsx";
import { inputStyle, inputStyleFocusBorder } from "../Tailwind";
import { storeValue } from "../../../../utils/bookingFormUtil";
import { TextInputType } from "./Types";

const TextInput = ({
  id,
  placeholder,
  ariaLabel,
  required = false,
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
    />
  );
};

export default TextInput;
