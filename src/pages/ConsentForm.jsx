import LicenseCardInput from "./components/Consent/LicenseCardInput";
import NameInput from "./components/Consent/NameInput";
import PronounSelector from "./components/Consent/PronounSelector";
import DateOfBirthSelector from "./components/Consent/DateOfBirthSelector";
import PhoneNumberInput from "./components/Consent/PhoneNumberInput";
import HomeAddressTextArea from "./components/Consent/HomeAddressTextArea";
import EmergancyContactInformationInput from "./components/Consent/EmergencyContactInformationInput";
import QuestionnaireInput from "./components/Consent/QuestionnaireInput";
import Signature from "./components/Consent/Signature";

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
          <Signature />
        </div>
      </div>
    </>
  );
}

export default ConsentForm;
