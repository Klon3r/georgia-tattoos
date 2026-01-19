import CheckBoxOption from "./Components/CheckBoxOption";
import SelectOption from "./Components/SelectOption";
import TextAreaInput from "./Components/TextAreaInput";
import TextHeader from "./Components/TextHeader";
import TextInput from "./Components/TextInput";
import { checkboxOptionContainer, inputContainerStyle, inputRowDivStyle } from "./Tailwind";

type BookingTattooType = {
  onAvailableCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Contains: Description of Tattoo, Location of Tattoo, Tattoo Size, Colour Option, Availability, Working Around Tattoo/Gap 
 */
const BookingTattoo = ({ onAvailableCheckboxChange }: BookingTattooType) => {

  return (
    <div className={inputContainerStyle}>
      <TextHeader headerText="Description of Tattoo: " required />
      <TextAreaInput
        id="tattooDescription"
        placeholder="If you'd like several tattoos, please section with paragraphs"
        ariaLabel="Describe the tattoo you would like"
        rows={5}
        required
        resize={false}
      />
      <TextHeader headerText="Location of Tattoo: " required />
      <TextAreaInput
        id="locationOnBody"
        placeholder="Where on the body is the tattoo going?"
        ariaLabel="Describe the location where the tattoo is going"
        rows={2}
        required
        resize={false}
        maxLength={200}
      />
      <div className={inputRowDivStyle}>
        <div className="flex-1">
          <TextHeader headerText="Tattoo Size: " required />
          <TextInput
            id="sizeTattoo"
            ariaLabel="The size of the tattoo in centimeters"
            placeholder="eg. 10-20cm"
            required
          />
        </div>
        <div className="flex-1">
          <TextHeader headerText="Colour Option" required />
          <SelectOption
            id="tattooColour"
            placeholder="Select an option"
            options={["Black & Grey", "Colour"]}
            ariaLabel="Select black & grey or color for the tattoo"
            required
          />
        </div>
      </div>

      <TextHeader headerText="Availability?: " required />
      <div className="flex flex-col gap-5">
         <div className={checkboxOptionContainer}>
          <CheckBoxOption
            id="monday"
            headerText="Monday:"
            ariaLabel="Available monday checkbox"
            onChange={onAvailableCheckboxChange}
            localStorage={false}
          />
          <CheckBoxOption
            id="tuesday"
            headerText="Tuesday:"
            ariaLabel="Available tuesday checkbox"
            onChange={onAvailableCheckboxChange}
            localStorage={false}
          />
        </div>
        <div className={checkboxOptionContainer}>
          <CheckBoxOption
            id="friday"
            headerText="Friday:"
            ariaLabel="Available friday checkbox"
            onChange={onAvailableCheckboxChange}
            localStorage={false}
          />
          <CheckBoxOption
            id="saturday"
            headerText="Saturday:"
            ariaLabel="Available saturday checkbox"
            onChange={onAvailableCheckboxChange}
            localStorage={false}
          />
        </div>
      </div>

      <TextHeader
        headerText="Will I be working around other tattoos/filling a gap?: "
        divClassName="max-w-sm whitespace-normal"
        required
      />
      <SelectOption
        id="workAround"
        placeholder="Select an option"
        options={[
          "Working around other tattoos",
          "Filling a gap",
          "Both",
          "Neither",
        ]}
        ariaLabel="Will I be working around other tattoos/filling a gap?"
        required
      />
      {/* <TextHeader
        headerText="Is this tattoo a scar coverup?"
        subHeaderText="If Yes, Please provide photos"
      />
      <SelectOption
        id="scarCoverup"
        placeholder="Select an option"
        options={["Yes", "No"]}
        ariaLabel="Is this tattoo a scar coverup"
      /> */}
    </div>
  );
};

export default BookingTattoo;
