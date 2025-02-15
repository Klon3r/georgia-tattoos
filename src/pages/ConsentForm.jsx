import LicenseCardInput from "./components/Consent/LicenseCardInput";
import NameInput from "./components/Consent/NameInput";
import PronounSelector from "./components/Consent/PronounSelector";
import DateOfBirthSelector from "./components/Consent/DateOfBirthSelector";
import PhoneNumberInput from "./components/Consent/PhoneNumberInput";
import HomeAddressTextArea from "./components/Consent/HomeAddressTextArea";
import EmergencyContactInformationInput from "./components/Consent/EmergencyContactInformationInput";
import Signature from "./components/Consent/Signature";
import PhotoConsentOptions from "./components/Consent/PhotoConsentOptions";
import AllergiesOptions from "./components/Consent/AllergiesOptions";
import AreYouOptions from "./components/Consent/AreYouOptions";
import MedicalConditionsOptions from "./components/Consent/MedicalConitionsOptions";
import MedicationsOptions from "./components/Consent/MedicationsOptions";
import TattooOptions from "./components/Consent/TattooOptions";
import TermsAndConditions from "./components/Consent/TermsAndConditions";
import CreatePDF from "./components/CreatePDF";
import { useState } from "react";
import spinner from "../assets/spinner.gif";

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
    photoPermission: "",
    acknowledge: "",
    signatureImage: "",
    licensePhoto: "",
  });

  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [fieldsNotRequired, setFieldsNotRequired] = useState([
    "whichMedications",
    "otherMedicalConditions",
    "allergiesInfo",
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (isSending) return;
    let hasError = false;

    // Check allergies and allergiesInfo
    if (formData["allergies"] === "yes" && formData["allergiesInfo"] === "") {
      hasError = true;
    }

    // Check medications & whichMedications
    if (
      formData["medications"] === "yes" &&
      formData["whichMedications"] === ""
    ) {
      hasError = true;
    }

    // Check all other fields
    Object.keys(formData).forEach((key) => {
      if (!fieldsNotRequired.includes(key) && formData[key] === "") {
        console.log("Missing field:", key);
        hasError = true;
      }
    });

    setError(hasError);

    if (!hasError) {
      const url = "https://www.georgiatattoos.com.au/api/consent";
      const formDataToSend = new FormData();

      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const { pdfBlob, filename } = await CreatePDF(formData);
      formDataToSend.append("pdf", pdfBlob, filename);

      setIsSending(true);

      try {
        const response = await fetch(url, {
          method: "POST",
          body: formDataToSend,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("✅ Form submitted successfully");
      } catch (error) {
        console.error("❌ Error submitting form:", error);
      } finally {
        setIsSending(false);
      }
    }
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
            <EmergencyContactInformationInput
              value={{
                emergencyContactNumber: formData.emergencyContactNumber,
                emergencyContactName: formData.emergencyContactName,
              }}
              onChange={handleChange}
            />
          </div>
          <h2>Pre-Procedure Questionnaire</h2>
          <div className="consent-div">
            <TattooOptions
              value={{
                whereTattooOnBody: formData.whereTattooOnBody,
                numbingCream: formData.numbingCream,
              }}
              onChange={handleChange}
            />
            <MedicationsOptions
              value={{
                medications: formData.medications,
                whichMedications: formData.whichMedications,
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
                allergies: formData.allergies,
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
            <TermsAndConditions
              value={{
                acknowledge: formData.acknowledge,
              }}
              onChange={handleChange}
            />
            <PhotoConsentOptions
              value={{ photoPermission: formData.photoPermission }}
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
            <button type="submit">
              {isSending ? (
                <div className="submit-button">
                  <img src={spinner} alt="Loading..." className="spinner-img" />
                  Please wait...
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ConsentForm;
