import { useState } from "react";
import SelectOption from "./Components/SelectOption";
import TextHeader from "./Components/TextHeader";
import { inputContainerStyle } from "./Tailwind";

const BookingScarCoverup = () => {
  const [scarCoverup, setScarCoverup] = useState(false);

  const handleScarCoverupOption = (value: string) => {
    setScarCoverup(value == "Yes" ? true : false);
  };

  console.log(scarCoverup);
  return (
    <div className={inputContainerStyle}>
      <TextHeader headerText="Is this a scar coverup? " required />
      <SelectOption
        id="scarCoverup"
        placeholder="Select an option"
        options={["Yes", "No"]}
        ariaLabel="Is this a scar coverup?"
        onChange={handleScarCoverupOption}
      />
    </div>
  );
};

export default BookingScarCoverup;
