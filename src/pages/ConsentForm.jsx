import LicenseCardInput from "./components/LicenseCardInput";
import NameInput from "./components/NameInput";
import PronounSelector from "./components/PronounSelector";
import DateOfBirthSelector from "./components/DateOfBirthSelector";
import PhoneNumberInput from "./components/PhoneNumberInput";
import HomeAddressTextArea from "./components/HomeAddressTextArea";
import EmergancyContactInformationInput from "./components/EmergencyContactInformationInput";
import QuestionnaireInput from "./components/QuestionnaireInput";

function ConsentForm() {
  return (
    <>
      <div className="consent-form-page">
        <h2>Consent Form</h2>
        <div className="consent-div">
          <NameInput />
          <PronounSelector />
          <DateOfBirthSelector />
          <LicenseCardInput />
          <PhoneNumberInput />
          <HomeAddressTextArea />
        </div>
        <h2>Emergency Contact Information</h2>
        <div className="consent-div">
          <EmergancyContactInformationInput />
        </div>
        <h2>Pre-Procedure Questionnaire</h2>
        <div className="consent-div">
          <QuestionnaireInput />
        </div>
      </div>
    </>
  );
}

export default ConsentForm;
