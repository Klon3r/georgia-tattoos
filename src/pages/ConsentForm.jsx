import LicenseCardInput from "./components/LicenseCardInput";
import NameInput from "./components/NameInput";
import PronounSelector from "./components/PronounSelector";
import DateOfBirthSelector from "./components/DateOfBirthSelector";
import PhoneNumberInput from "./components/PhoneNumberInput";

function ConsentForm() {
  return (
    <>
      <h2>Consent Form</h2>
      <div className="consent-div">
        <NameInput />
        <PronounSelector />
        <DateOfBirthSelector />
        <LicenseCardInput />
        <PhoneNumberInput />
      </div>
    </>
  );
}

export default ConsentForm;
