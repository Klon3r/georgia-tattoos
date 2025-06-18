import SelectOption from "./Components/SelectOption";
import TextHeader from "./Components/TextHeader";
import TextInput from "./Components/TextInput";
import {
  inputContainerStyle,
  inputDivStyle,
  inputRowDivStyle,
} from "./Tailwind";

const BookingNames = () => {
  return (
    <div className={inputContainerStyle}>
      <TextHeader headerText="Name: " required />
      <div className={inputDivStyle}>
        <TextInput
          id="firstName"
          placeholder="First Name"
          ariaLabel="First name input"
          required
        />
        <TextInput
          id="lastName"
          placeholder="Last Name"
          ariaLabel="Last name input"
          required
        />
      </div>

      <div className={inputRowDivStyle}>
        <div className="flex-1">
          <TextHeader headerText="Preferred Name:" />
          <TextInput
            id="preferredName"
            placeholder="Preferred Name"
            ariaLabel="Preferred name input"
          />
        </div>
        <div className="flex-1">
          <TextHeader headerText="Pronouns: " required />
          <SelectOption
            id="pronouns"
            placeholder="Select pronouns"
            options={["She/Her", "He/Him", "They/Them"]}
            ariaLabel="Select pronouns"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default BookingNames;
