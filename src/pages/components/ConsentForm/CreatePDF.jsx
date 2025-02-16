import jsPDF from "jspdf";
import esotericLogo from "../../../assets/esoteric-text-logo.png";

async function CreatePDF(formData) {
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  let licenseImage;
  licenseImage = await fileToBase64(formData.licensePhoto);

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

  // HEADER
  doc.setFontSize(35);
  doc.setFont("times", "bold");
  const clientHeader = "Client Info";
  doc.text(clientHeader, 10, y);
  doc.line(10, y + 1, 11 + doc.getTextWidth(clientHeader), y + 1);
  doc.setFontSize(14);
  y = y + gapSpace;

  // NAME
  doc.text(`Name:`, xForData, y);
  doc.setFont("times", "normal");
  let fullName = `${formData.fname} ${formData.lname}`;
  doc.text(`${fullName}`, xForDataAlign, y, {
    maxWidth: 120,
  });

  y = y + gapSpace;

  // PRONOUNS
  doc.setFont("times", "bold");
  doc.text(`Pronouns:`, xForData, y);
  doc.setFont("times", "normal");
  doc.text(`${formData.pronouns}`, xForDataAlign, y);
  y = y + gapSpace;

  // DOB
  doc.setFont("times", "bold");
  doc.text(`Date of Birth:`, xForData, y);
  doc.setFont("times", "normal");
  doc.text(`${dob}`, xForDataAlign, y);
  y = y + gapSpace;

  // PHONE NUMBER
  doc.setFont("times", "bold");
  doc.text(`Phone Number:`, xForData, y);
  doc.setFont("times", "normal");
  doc.text(`${formData.phoneNumber}`, xForDataAlign, y);
  y = y + gapSpace;

  // LICENSE NUMBER
  doc.setFont("times", "bold");
  doc.text(`License Number:`, xForData, y);
  doc.setFont("times", "normal");
  doc.text(`${formData.licenseNumber}`, xForDataAlign, y);
  y = y + gapSpace;

  // HOME ADDRESS
  doc.setFont("times", "bold");
  doc.text(`Home Address:`, xForData, y);
  doc.setFont("times", "normal");
  doc.text(`${formData.homeAddress}`, xForDataAlign, y, { maxWidth: 115 });
  let addressTextLines = doc.splitTextToSize(formData.homeAddress, 115);
  addressTextLines.forEach((line, index) => {
    y = y + gapSpace / 3;
  });
  y = y + gapSpace;

  // LICENSE PHOTO
  doc.setFont("times", "bold");
  doc.text(`License Photo:`, xForData, y);
  doc.addImage(licenseImage, "JPEG", xForDataAlign + 1, y - 4, 110, 70);
  let photoSpace = 63;
  y = y + photoSpace;

  // --------------------
  // EMERGENCY CONTACT
  // --------------------
  y = y + 20;
  // HEADER
  doc.setFont("times", "bold");
  doc.setFontSize(35);
  const emergencyHeader = "Emergency Contact";
  doc.text(emergencyHeader, 10, y);
  doc.line(10, y + 1, 11 + doc.getTextWidth(emergencyHeader), y + 1);
  doc.setFontSize(14);
  y = y + gapSpace;

  // NAME
  doc.setFont("times", "bold");
  doc.text(`Name:`, xForData, y);
  doc.setFont("times", "normal");
  doc.text(`${formData.emergencyContactName}`, xForDataAlign, y, {
    maxWidth: 120,
  });
  y = y + gapSpace;

  // NUMBER
  doc.setFont("times", "bold");
  doc.text(`Number:`, xForData, y);
  doc.setFont("times", "normal");
  doc.text(`${formData.emergencyContactNumber}`, xForDataAlign, y);

  // --------------------
  // PRE-PROCEDURE QUESTIONNAIRE
  // --------------------

  doc.addPage();
  let xForQuestions = 20;
  let xForOther = 80;
  y = 20;
  gapSpace = 8;
  doc.setFontSize(40);
  doc.setFont("times", "bold");
  const questionnaireHeader = "Questionnaire";
  doc.text(questionnaireHeader, 10, y);
  doc.line(10, y + 1, 11 + doc.getTextWidth(questionnaireHeader), y + 1);
  y = y + gapSpace;
  doc.setFontSize(14);
  doc.text(`Are you currently taking any medications?`, xForData, y);
  y = y + gapSpace;
  doc.setFont("times", "normal");
  doc.text(`- ${formData.medications}`, xForQuestions, y);
  y = y + gapSpace;
  doc.setFont("times", "bold");

  if (formData.whichMedications !== "") {
    doc.text(`Which medications?`, xForData, y);
    y = y + gapSpace;
    doc.setFont("times", "normal");

    doc.text(`- ${formData.whichMedications}`, xForQuestions, y, {
      maxWidth: 180,
    });

    let medicationLines = doc.splitTextToSize(formData.whichMedications, 180);
    medicationLines.forEach((line, index) => {
      y = y + gapSpace / 2;
    });
    y = y + gapSpace;
  }

  doc.setFont("times", "bold");
  doc.text(`What part of the body is your tattoo/s going on?`, xForData, y);
  y = y + gapSpace;
  doc.setFont("times", "normal");
  doc.text(`- ${formData.whereTattooOnBody}`, xForQuestions, y, {
    maxWidth: 180,
  });
  let whereTattooLines = doc.splitTextToSize(formData.whereTattooOnBody, 180);
  whereTattooLines.forEach((line, index) => {
    y = y + gapSpace / 2;
  });
  y = y + gapSpace;

  doc.setFont("times", "bold");
  doc.text(`Have you used numbing cream for this tattoo session?`, xForData, y);
  y = y + gapSpace;
  doc.setFont("times", "normal");
  doc.text(`- ${formData.numbingCream}`, xForQuestions, y);
  y = y + gapSpace;

  doc.setFont("times", "bold");
  doc.text(`Are you currently pregnant or breastfeeding?`, xForData, y);
  y = y + gapSpace;
  doc.setFont("times", "normal");
  doc.text(`- ${formData.breastfeeding}`, xForQuestions, y);
  y = y + gapSpace;

  doc.setFont("times", "bold");
  doc.text(`Are you currently undertaking treatment for cancer?`, xForData, y);
  y = y + gapSpace;
  doc.setFont("times", "normal");
  doc.text(`- ${formData.cancer}`, xForQuestions, y);
  y = y + gapSpace;

  doc.setFont("times", "bold");
  doc.text(
    `Are you currently under the influence of drugs or alcohol?`,
    xForData,
    y
  );
  y = y + gapSpace;
  doc.setFont("times", "normal");
  doc.text(`- ${formData.alcoholOrDrugs}`, xForQuestions, y);
  y = y + gapSpace;
  doc.setFont("times", "bold");
  doc.text(`Do you have any known allergies?`, xForData, y);
  y = y + gapSpace;
  doc.setFont("times", "normal");
  doc.text(`- ${formData.allergies}`, xForQuestions, y);
  y = y + gapSpace;

  doc.setFont("times", "bold");
  if (formData.allergiesInfo !== "") {
    doc.text(`Which allergies?`, xForData, y);
    y = y + gapSpace;
    doc.setFont("times", "normal");
    doc.text(`- ${formData.allergiesInfo}`, xForQuestions, y, {
      maxWidth: 180,
    });
    let allergiesInfoLines = doc.splitTextToSize(formData.allergiesInfo, 180);
    allergiesInfoLines.forEach((line, index) => {
      y = y + gapSpace / 2;
    });
    y = y + gapSpace;
  }

  doc.setFont("times", "bold");
  doc.text(`Which Medical Conditions`, xForData, y);
  y = y + gapSpace;
  doc.setFont("times", "normal");
  doc.text(`-${formData.medicalConditions}`, xForQuestions, y, {
    maxWidth: 180,
  });

  // If the text is too long, then add a new line
  // let textLines = doc.splitTextToSize(formData.medicalConditions, 180);
  y = y + gapSpace;

  doc.setFont("times", "bold");
  if (formData.otherMedicalConditions !== "") {
    doc.text(`Other Medical Conditions`, xForData, y);
    y = y + gapSpace;
    doc.setFont("times", "normal");
    doc.text(`- ${formData.otherMedicalConditions}`, xForQuestions, y, {
      maxWidth: 180,
    });
    let otherMedicalConditionsLines = doc.splitTextToSize(
      formData.otherMedicalConditions,
      180
    );
    otherMedicalConditionsLines.forEach((line, index) => {
      y = y + gapSpace / 2;
    });
    y = y + gapSpace;
  }

  doc.setFont("times", "bold");
  doc.text(`Photo permission to post on social media?`, xForData, y);
  y = y + gapSpace;
  doc.setFont("times", "normal");
  doc.text(`- ${formData.photoPermission}`, xForQuestions, y);
  y = y + gapSpace;

  // --------------------
  // TERMS AND CONDITIONS
  // --------------------

  doc.addPage();
  y = 20;
  doc.setFontSize(40);
  doc.setFont("times", "bold");
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
  doc.setFont("times", "normal");

  terms.forEach((term, index) => {
    const textLines = doc.splitTextToSize(term, 150);
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
  doc.addImage(formData.signatureImage, "PNG", 20, y + 10, 100, 20);

  const pdfBuffer = doc.output("arraybuffer");
  const pdfBlob = new Blob([pdfBuffer], { type: "application/pdf" });

  // Generate a downloadable URL for the Blob
  // const pdfUrl = URL.createObjectURL(pdfBlob);

  return {
    pdfBlob,
    filename: `${formData.fname}-${formData.lname}-consent.pdf`,
  };
}

export default CreatePDF;
