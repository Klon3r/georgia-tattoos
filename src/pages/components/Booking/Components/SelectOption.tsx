import clsx from "clsx";
import { storeValue } from "../../../../utils/bookingForm.util";
import { inputStyleFocusBorder, selectOptionInputStyle } from "../Tailwind";
import { SelectOptionType } from "./Types";
import { ChangeEvent } from "react";

const SelectOption = ({
  id,
  placeholder,
  options,
  ariaLabel,
  required = false,
  onChange,
}: SelectOptionType) => {
  const handleOnChange = (
    value: ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
  ) => {
    storeValue(value);
    if (onChange) onChange(value.target.value);
  };

  return (
    <div className="w-full">
      <select
        className={clsx(selectOptionInputStyle, inputStyleFocusBorder)}
        id={id}
        title={id}
        name={id}
        aria-label={ariaLabel}
        onChange={(e) => handleOnChange(e)}
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
