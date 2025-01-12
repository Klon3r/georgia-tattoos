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
import { useState } from "react";
import jsPDF from "jspdf";
import spinner from "../assets/spinner.gif";
import esotericTextLogo from "../assets/esoteric-text-logo.png";

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

  const createPDF = async (formData) => {
    const dobSplit = formData.dob.split("-");
    const dob = dobSplit[2] + "-" + dobSplit[1] + "-" + dobSplit[0];

    const addressSplit = formData.homeAddress.split(" ");
    const address = addressSplit.join(" ");

    const xForData = 15;
    const xForDataAlign = 61;
    const doc = new jsPDF();

    // Background Color
    doc.setFillColor(252, 222, 248);
    doc.rect(
      0,
      0,
      doc.internal.pageSize.width,
      doc.internal.pageSize.height,
      "F",
    );

    doc.setFontSize(25);
    const clientHeader = "Client Info";
    doc.text(clientHeader, 10, 50);
    doc.line(10, 51, 11 + doc.getTextWidth(clientHeader), 51);
    doc.setFontSize(16);
    doc.text(`Name:`, xForData, 58);
    doc.text(`${formData.fname} ${formData.lname}`, xForDataAlign, 58);
    doc.text(`Pronouns:`, xForData, 66);
    doc.text(`${formData.pronouns}`, xForDataAlign, 66);
    doc.text(`Date of Birth:`, xForData, 74);
    doc.text(`${dob}`, xForDataAlign, 74);
    doc.text(`Phone Number:`, xForData, 82);
    doc.text(`${formData.phoneNumber}`, xForDataAlign, 82);
    doc.text(`Home Address:`, xForData, 90);
    doc.text(`${formData.homeAddress}`, xForDataAlign, 90);
    doc.text(`License Number:`, xForData, 111);
    doc.text(`${formData.licenseNumber}`, xForDataAlign, 111);
    // ADD LICENSE PHOTO HERE
    doc.setFontSize(25);

    const emergencyHeader = "Emergency Contact";
    doc.text(emergencyHeader, 10, 135);
    doc.line(10, 136, 11 + doc.getTextWidth(emergencyHeader), 136);
    doc.setFontSize(16);
    doc.text(`Name: ${formData.emergencyContactName}`, 20, 160);
    doc.text(`Number: ${formData.emergencyContactNumber}`, 20, 170);

    const pdfBuffer = doc.output("arraybuffer");
    const pdfBlob = new Blob([pdfBuffer], { type: "application/pdf" });

    // Generate a downloadable URL for the Blob
    const pdfUrl = URL.createObjectURL(pdfBlob);

    return {
      pdfUrl, // TODO: change to pdfBlob once the pdf is to my liking
      filename: `${formData.fname}-${formData.lname}-consent.pdf`,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData.signatureImage);
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

    // Then, check all other fields
    Object.keys(formData).forEach((key) => {
      if (!fieldsNotRequired.includes(key) && formData[key] === "") {
        console.log("Missing field:", key);
        hasError = true;
      }
    });

    setError(hasError);

    if (!hasError) {
      // Form Data
      // const url = "http://localhost:3000/api/consent";
      // const formDataToSend = new FormData();

      //Object.keys(formData).forEach((key) => {
      //  formDataToSend.append(key, formData[key]);
      //});

      //const { file, filename } = await createPDF(formData);
      //formDataToSend.append("pdf", file, filename);

      //setIsSending(true);
      //await fetch(url, {
      // method: "POST",
      // body: formDataToSend,
      //});
      //

      const { pdfUrl, filename } = await createPDF(formData);

      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = filename;

      link.click();

      URL.revokeObjectURL(pdfUrl);
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
            <PhotoConsentOptions
              value={{ photoPermission: formData.photoPermission }}
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
