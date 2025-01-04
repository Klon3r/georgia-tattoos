import LicenseCardInput from "./components/Consent/LicenseCardInput";
import NameInput from "./components/Consent/NameInput";
import PronounSelector from "./components/Consent/PronounSelector";
import DateOfBirthSelector from "./components/Consent/DateOfBirthSelector";
import PhoneNumberInput from "./components/Consent/PhoneNumberInput";
import HomeAddressTextArea from "./components/Consent/HomeAddressTextArea";
import EmergancyContactInformationInput from "./components/Consent/EmergencyContactInformationInput";
import Signature from "./components/Consent/Signature";
import PhotoConsentOptions from "./components/Consent/PhotoConsentOptions";
import AllergiesOptions from "./components/Consent/AllergiesOptions";
import AreYouOptions from "./components/Consent/AreYouOptions";
import MedicalConditionsOptions from "./components/Consent/MedicalConitionsOptions";
import MedicationsOptions from "./components/Consent/MedicationsOptions";
import TattooOptions from "./components/Consent/TattooOptions";
import TermsAndConditions from "./components/Consent/TermsAndConditions";
import { useState } from "react";

function ConsentForm() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    pronouns: "",
    dob: "",
    licenseNumber: "",
    phoneNumber: "",
    homeAddress: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    medications: "",
    whichMedications: "",
    whereTattooOnBody: "",
    numbingCream: "",
    breastfeeding: "",
    cancer: "",
    alcoholOrDrugs: "",
    allergies: "",
    allergiesInfo: "",
    medicalConditions: "",
    otherMedicalConditions: "",
    photoPermision: "",
    acknowledge: "",
    signatureImage: "",
    licensePhoto: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for correct form data or give warning
    const fieldsNotRequired = ["whichMedications", "otherMedicalConditions"];
    let hasError = false;

    Object.keys(formData).map((key) => {
      if (!fieldsNotRequired.includes(key) && formData[key] === "") {
        hasError = true;
      }

      setError(hasError);

      if (!hasError) {
        // Submit Form via API
      }
    });
  };

  return (
    <>
      <div className="consent-form-page">
        <form onSubmit={handleSubmit}>
          <h2>Consent Form</h2>
          <div className="consent-div">
            <NameInput
              value={{ fname: formData.fname, lname: formData.lname }}
              onChange={handleChange}
            />
            <PronounSelector
              value={{ pronouns: formData.pronouns }}
              onChange={handleChange}
            />
            <DateOfBirthSelector
              value={{ dob: formData.dob }}
              onChange={handleChange}
            />
            <LicenseCardInput
              value={{
                licensePhoto: formData.licensePhoto,
                licenseNumber: formData.licenseNumber,
              }}
              onChange={handleChange}
            />
            <PhoneNumberInput
              value={{ phoneNumber: formData.phoneNumber }}
              onChange={handleChange}
            />
            <HomeAddressTextArea
              value={{ homeAddress: formData.homeAddress }}
              onChange={handleChange}
            />
          </div>
          <h2>Emergency Contact Information</h2>
          <div className="consent-div">
            <EmergancyContactInformationInput
              value={{
                emergencyContactNumber: formData.emergencyContactNumber,
                emergencyContactName: formData.emergencyContactName,
              }}
              onChange={handleChange}
            />
          </div>
          <h2>Pre-Procedure Questionnaire</h2>
          <div className="consent-div">
            <MedicationsOptions
              value={{
                medications: formData.medications,
                whichMedications: formData.whichMedications,
              }}
              onChange={handleChange}
            />
            <TattooOptions
              value={{
                whereTattooOnBody: formData.whereTattooOnBody,
                numbingCream: formData.numbingCream,
              }}
              onChange={handleChange}
            />
            <AreYouOptions
              value={{
                breastfeeding: formData.breastfeeding,
                cancer: formData.cancer,
                alcoholOrDrugs: formData.alcoholOrDrugs,
              }}
              onChange={handleChange}
            />
            <AllergiesOptions
              value={{
                alergies: formData.allergies,
                allergiesInfo: formData.allergiesInfo,
              }}
              onChange={handleChange}
            />
            <MedicalConditionsOptions
              value={{
                medicalConditions: formData.medicalConditions,
                otherMedicalConditions: formData.otherMedicalConditions,
              }}
              onChange={handleChange}
            />
            <PhotoConsentOptions
              value={{ photoPermision: formData.photoPermision }}
              onChange={handleChange}
            />
            <TermsAndConditions
              value={{
                acknowledge: formData.acknowledge,
              }}
              onChange={handleChange}
            />
            <Signature
              value={{ signatureImage: formData.signatureImage }}
              onChange={handleChange}
            />
          </div>
          {error && (
            <div className="error-div">Please fill in all required fields</div>
          )}
          <div className="submit-button-div">
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ConsentForm;
