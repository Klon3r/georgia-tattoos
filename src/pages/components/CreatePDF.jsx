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
    50
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
  doc.addImage(formData.licensePhoto, "JPEG", xForDataAlign + 1, y - 4, 85, 50);
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
    y
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

  // If the text is too long, then add a new line
  let textLines = doc.splitTextToSize(formData.medicalConditions, 180);
  y = y + gapSpace + textLines.length;

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
  doc.text(termsHeader, 10, y);
  doc.line(10, y + 1, 13 + doc.getTextWidth(termsHeader), y + 1);

  y = y + gapSpace * 2;
  doc.setFontSize(14); // Smaller font size for better readability

  const terms = [
    "I acknowledge that I am over the age of 18.",
    "I'm not under the influence of alcohol or drugs.",
    "I have fully disclosed any physical and/or mental impairments such as, but not limited to: Psoriasis, Hepatitis, Diabetes.",
    "I accept that getting a skin infection is a possibility as a result of receiving any tattoo procedure, particularly if I do not take proper care of my tattoo and follow my artist's aftercare instructions.",
    "I acknowledge that it is not reasonably possible for the staff of Esoteric Tattoo to know whether or not I may have an allergic reaction to the pigments and processes used throughout the tattoo procedure and I accept that such a reaction is possible.",
    "I understand that this tattoo is a permanent change to my body and no claims have been made regarding the ability to change or undo the work once I have consented to the design process and begun the tattoo.",
    "I understand that using numbing creams for a tattoo procedure increases the potential to encounter adverse reactions such as but not limited to: anaesthetic poisoning, redness, swelling, tingling, prolonged period of numbness, shallow breathing.",
    "I agree to release Esoteric Tattoo and its employees from any and all claims, damages and legal action arising from or connected in any way to the tattoo procedure. I indemnify and hold harmless Esoteric Tattoo against any claims, expenses, damages, and liabilities.",
    "I have read all of the above information carefully and by signing this document I am acknowledging that I understand and agree to all the information stated within it.",
    "I acknowledge that Esoteric Tattoo does not offer refunds.",
  ];

  doc.text("I understand and have fully disclosed the following:", xForData, y);
  y = y + gapSpace;

  terms.forEach((term, index) => {
    const textLines = doc.splitTextToSize(term, 180);
    doc.text(`${index + 1}. `, xForData, y);
    textLines.forEach((line, lineIndex) => {
      const yOffset = lineIndex * 6;
      doc.text(`${line}`, xForData + 8, y + yOffset);
    });
    const lineSpacing = 8;
    y = y + textLines.length * 4.5 + lineSpacing;
  });

  doc.text(
    `I understand and have fully disclosed the following: ${formData.acknowledge}`,
    xForData,
    y
  );
  doc.addImage(formData.signatureImage, "PNG", 20, y, 100, 20);

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
