import jsPDF from "jspdf";
import esotericLogo from "../../assets/esoteric-text-logo.png";

async function CreatePDF(formData) {
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  // TODO: Use this on release
  //let licenseImage;
  //licenseImage = await fileToBase64(formData.licensePhoto);

  const dobSplit = formData.dob.split("-");
  const dob = dobSplit[2] + "-" + dobSplit[1] + "-" + dobSplit[0];

  const addressSplit = formData.homeAddress.split(" ");
  const address = addressSplit.join(" ");

  const doc = new jsPDF();

  let y = 70;
  let gapSpace = 12;
  const xForData = 15;
  const xForDataAlign = 90;

  // --------------------
  // CLIENT INFO
  // --------------------

  const xWidthHalf = doc.internal.pageSize.width / 2;
  const imageWidth = 100;
  doc.addImage(
    esotericLogo,
    "png",
    xWidthHalf - imageWidth / 2,
    5,
    imageWidth,
    50,
  );
  doc.setFontSize(40);
  const clientHeader = "Client Info";
  doc.text(clientHeader, 10, y);
  doc.line(10, y + 1, 11 + doc.getTextWidth(clientHeader), y + 1);
  doc.setFontSize(20);
  y = y + gapSpace;
  doc.text(`Name:`, xForData, y);
  doc.text(`${formData.fname} ${formData.lname}`, xForDataAlign, y);
  y = y + gapSpace;
  doc.text(`Pronouns:`, xForData, y);
  doc.text(`${formData.pronouns}`, xForDataAlign, y);
  y = y + gapSpace;
  doc.text(`Date of Birth:`, xForData, y);
  doc.text(`${dob}`, xForDataAlign, y);
  y = y + gapSpace;
  doc.text(`Phone Number:`, xForData, y);
  doc.text(`${formData.phoneNumber}`, xForDataAlign, y);
  y = y + gapSpace;
  doc.text(`License Number:`, xForData, y);
  doc.text(`${formData.licenseNumber}`, xForDataAlign, y);
  y = y + gapSpace;
  // TODO: Add error checking if there is no photo
  doc.text(`License Photo:`, xForData, y);
  doc.addImage(formData.licensePhoto, "JPEG", xForDataAlign + 1, y - 4, 75, 50);
  let photoSpace = 54;
  y = y + photoSpace;
  doc.text(`Home Address:`, xForData, y);
  y = y + gapSpace;
  doc.text(`${formData.homeAddress}`, xForData + 5, y, { maxWidth: 180 });
  y = y + gapSpace;

  // --------------------
  // EMERGENCY CONTACT
  // --------------------
  y = y + 20;
  doc.setFontSize(30);
  const emergencyHeader = "Emergency Contact";
  doc.text(emergencyHeader, 10, y);
  doc.line(10, y + 1, 11 + doc.getTextWidth(emergencyHeader), y + 1);
  doc.setFontSize(20);
  y = y + gapSpace;
  doc.text(`Name:`, xForData, y);
  doc.text(`${formData.emergencyContactName}`, xForDataAlign, y);
  y = y + gapSpace;
  doc.text(`Number:`, xForData, y);
  doc.text(`${formData.emergencyContactNumber}`, xForDataAlign, y);

  // --------------------
  // PRE-PROCEDURE QUESTIONNAIRE
  // --------------------

  doc.addPage();
  let xForQuestions = 25;
  let xForOther = 80;
  y = 20;
  gapSpace = 10;
  doc.setFontSize(40);
  const questionnaireHeader = "Questionnaire";
  doc.text(questionnaireHeader, 10, y);
  doc.line(10, y + 1, 11 + doc.getTextWidth(questionnaireHeader), y + 1);
  y = y + gapSpace;
  doc.setFontSize(20);
  doc.text(`Are you currently taking any medications?`, xForData, y);
  y = y + gapSpace;
  doc.text(`- ${formData.medications}`, xForQuestions, y);
  y = y + gapSpace;

  if (formData.whichMedications !== "") {
    doc.text(`Which medications?`, xForData, y);
    y = y + gapSpace;
    doc.text(`- ${formData.whichMedications}`, xForQuestions, y);
    y = y + gapSpace;
  }

  doc.text(`What part of the body is your tattoo/s going on?`, xForData, y);
  y = y + gapSpace;
  doc.text(`- ${formData.whereTattooOnBody}`, xForQuestions, y);
  y = y + gapSpace;

  doc.text(`Have you used numbing cream for this tattoo session?`, xForData, y);
  y = y + gapSpace;
  doc.text(`- ${formData.numbingCream}`, xForQuestions, y);
  y = y + gapSpace;

  doc.text(`Are you currently pregnant or breastfeeding?`, xForData, y);
  y = y + gapSpace;
  doc.text(`- ${formData.breastfeeding}`, xForQuestions, y);
  y = y + gapSpace;

  doc.text(`Are you currently undertaking treatment for cancer?`, xForData, y);
  y = y + gapSpace;
  doc.text(`- ${formData.cancer}`, xForQuestions, y);
  y = y + gapSpace;

  doc.text(
    `Are you currently under the influence of drugs or alcohol?`,
    xForData,
    y,
  );
  y = y + gapSpace;
  doc.text(`- ${formData.alcoholOrDrugs}`, xForQuestions, y);
  y = y + gapSpace;

  doc.text(`Do you have any known allergies?`, xForData, y);
  y = y + gapSpace;
  doc.text(`- ${formData.allergies}`, xForQuestions, y);
  y = y + gapSpace;

  if (formData.allergiesInfo !== "") {
    doc.text(`Which allergies?`, xForData, y);
    y = y + gapSpace;
    doc.text(`- ${formData.allergiesInfo}`, xForQuestions, y);
    y = y + gapSpace;
  }

  doc.text(`Which Medical Conditions`, xForData, y);
  y = y + gapSpace;
  doc.text(`- ${formData.medicalConditions}`, xForQuestions, y, {
    maxWidth: 180,
  });
  // TODO: If width > 180 then increase y
  y = y + gapSpace;

  if (formData.otherMedicalConditions !== "") {
    doc.text(`Other Medical Conditions`, xForData, y);
    y = y + gapSpace;
    doc.text(`- ${formData.otherMedicalConditions}`, xForQuestions, y);
    y = y + gapSpace;
  }

  doc.text(`Photo permission to post on social media?`, xForData, y);
  y = y + gapSpace;
  doc.text(`- ${formData.photoPermission}`, xForQuestions, y);
  y = y + gapSpace;

  // --------------------
  // TERMS AND CONDITIONS
  // --------------------

  doc.addPage();
  y = 20;
  doc.setFontSize(40);
  const termsHeader = "Terms & Conditions";
  doc.text(termsHeader, xForData, y);

  const pdfBuffer = doc.output("arraybuffer");
  const pdfBlob = new Blob([pdfBuffer], { type: "application/pdf" });

  // Generate a downloadable URL for the Blob
  const pdfUrl = URL.createObjectURL(pdfBlob);

  return {
    pdfUrl, // TODO: change to pdfBlob once the pdf is to my liking
    filename: `${formData.fname}-${formData.lname}-consent.pdf`,
  };
}

export default CreatePDF;
