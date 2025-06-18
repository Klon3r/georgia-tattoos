import clsx from "clsx";
import { checkboxOptionStyle, inputRowDivStyle } from "../Tailwind";
import TextHeader from "./TextHeader";
import { CheckBoxOptionType } from "./Types";
import { storeValue } from "../../../../utils/bookingFormUtil";

const CheckBoxOption = ({
  id,
  headerText,
  ariaLabel,
  required = false,
  singleLine = false,
  onChange,
  localStorage = true,
}: CheckBoxOptionType) => {
  return (
    <div className={clsx(inputRowDivStyle, "")}>
      <label htmlFor={id}>
        <TextHeader
          headerText={headerText}
          divClassName={clsx(singleLine ? "w-fit ml-5" : "w-20 text-[18px]")}
        />
      </label>
      <input
        className={checkboxOptionStyle}
        type="checkbox"
        id={id}
        title={id}
        aria-label={ariaLabel}
        required={required}
        name={id}
        onChange={localStorage ? (e) => storeValue(e) : onChange}
      />
    </div>
  );
};

export default CheckBoxOption;
