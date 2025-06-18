import clsx from "clsx";
import { inputStyle, inputStyleFocusBorder } from "../Tailwind";
import { useState } from "react";

const PhoneInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/[^0-9]/g, "");
    setValue(input);
    localStorage.setItem(e.target.id, input);
  };

  return (
    <input
      className={clsx(inputStyle, inputStyleFocusBorder)}
      type="tel"
      pattern="[0-9]*"
      inputMode="numeric"
      id="number"
      name="number"
      placeholder="## #### ####"
      title="Enter your 10-digit phone number"
      aria-label="Enter your 10-digit phone number"
      maxLength={10}
      minLength={10}
      required
      value={value}
      onChange={handleChange}
    />
  );
};

export default PhoneInput;
