import clsx from "clsx";
import { storeValue } from "../../../../utils/bookingForm.util";
import { inputStyleFocusBorder, selectOptionInputStyle } from "../Tailwind";
import { SelectOptionType } from "./Types";

const SelectOption = ({
  id,
  placeholder,
  options,
  ariaLabel,
  required = false,
}: SelectOptionType) => {
  return (
    <div className="w-full">
      <select
        className={clsx(selectOptionInputStyle, inputStyleFocusBorder)}
        id={id}
        title={id}
        name={id}
        aria-label={ariaLabel}
        onChange={(e) => storeValue(e)}
        required={required}
      >
        <option hidden value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
