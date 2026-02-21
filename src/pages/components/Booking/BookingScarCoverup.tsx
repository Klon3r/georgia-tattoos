import { useState } from "react";
import SelectOption from "./Components/SelectOption";
import TextHeader from "./Components/TextHeader";
import { inputContainerStyle } from "./Tailwind";
import TextInput from "./Components/TextInput";

const BookingScarCoverup = () => {
  const [scarCoverup, setScarCoverup] = useState(false);

  const handleScarCoverupOption = (value: string) => {
    setScarCoverup(value == "Yes" ? true : false);
    if (value == "No") {
      // Remove from local storage
      localStorage.removeItem("scarMetalPlating");
      localStorage.removeItem("scarAge");
    }
  };

  return (
    <div className={inputContainerStyle}>
      <div>
        <TextHeader headerText="Is this a scar coverup? " required />
        <SelectOption
          id="scarCoverup"
          placeholder="Select an option"
          options={["Yes", "No"]}
          ariaLabel="Is this a scar coverup?"
          onChange={handleScarCoverupOption}
          required
        />
      </div>
      {scarCoverup && (
        <div>
          <div>
            <TextHeader
              headerText="Is your scar over metal plating? "
              required
            />
            <SelectOption
              id="scarMetalPlating"
              placeholder="Select an option"
              options={["Yes", "No"]}
              ariaLabel="Is your scar over metal plating?"
              required
            />
          </div>
          <div className="flex flex-row gap-5 max-w-100 mt-2">
            <div>
              <TextHeader headerText="How old is the scar/s? " required />
              <TextInput
                id="scarAge"
                ariaLabel="How old is the scar/s?"
                placeholder="eg. 3 Years"
                required
              />
            </div>
            <div className="flex-1 justify-center">
              <p>Attach an image of the scar/s in the reference images below</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingScarCoverup;
