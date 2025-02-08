import sgMail from "@sendgrid/mail";

//-----------------------------------
import dotenv from "dotenv";
import { promisify } from "util";
dotenv.config(); // Loads variables from .env file into process.env
//-----------------------------------

sgMail.setApiKey(process.env.EMAIL_API_KEY);

async function SendConsentEmail(data, files) {
  console.log("Sending Consent Email...");
  console.log("Files received:", files);

  // Prepare attachments
  const attachments = [...(files.pdf || []), ...(files.licensePhoto || [])].map(
    (file) => ({
      content: file.buffer.toString("base64"),
      filename: file.originalname,
      type: file.mimetype,
      disposition: "attachment",
    })
  );

  const msgInfo = await createMessageDetails(data);

  const msg = {
    to: process.env.EMAIL_USERNAME,
    from: "georgiatattoos666@gmail.com",
    subject: `${msgInfo.checkEmail ? "🔴 " : "🟢 "}Consent Form: ${
      data.fname
    } ${data.lname} ${msgInfo.dateJoined}`,
    html: `${msgInfo.htmlBody}`,
    attachments: attachments,
  };

  try {
    await sgMail.send(msg);
    console.log("✅ Consent email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending consent email:", error);
  }
}

async function createMessageDetails(data) {
  // Date
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateJoined = `${day}/${month}/${year}`;

  // Display check email
  let checkEmail = false;
  if (
    data.medications === "Yes" ||
    data.numbingCream === "Yes" ||
    data.breastfeeding === "Yes" ||
    data.cancer === "Yes" ||
    data.allergies === "Yes"
  ) {
    checkEmail = true;
  }

  // DOB & Check DOB
  const dob = data.dob;
  const dobSplit = dob.split("-");
  const dobJoined = `${dobSplit[2]}-${dobSplit[1]}-${dobSplit[0]}`;

  // Check age
  let underAge = false;
  const birthYear = parseInt(dobSplit[0]);
  const birthMonth = parseInt(dobSplit[1]);
  const birthDay = parseInt(dobSplit[2]);

  if (year - birthYear < 18) {
    underAge = true;
  } else if (year - birthYear === 18) {
    const today = new Date();
    const birthdayThisYear = new Date(year, birthMonth - 1, birthDay);

    if (today < birthdayThisYear) {
      underAge = true;
    }
  }

  if (underAge === true) checkEmail = true;

  const htmlBody = `
  <h2 style="text-decoration: underline;">Client Info:</h2>
  <table style="margin-left: 20px; border-collapse: collapse;">
    <tr>
      <td style="width: 150px; padding: 5px; border: 1px solid #ddd;"><strong>Client Name:</strong></td>
      <td style="width: 200px; padding: 5px; border: 1px solid #ddd;">${
        data.fname
      } ${data.lname}</td>
    </tr>
    <tr>
      <td style="width: 150px; padding: 5px; border: 1px solid #ddd;"><strong>Pronouns:</strong></td>
      <td style="width: 200px; padding: 5px; border: 1px solid #ddd;">${
        data.pronouns
      }</td>
    </tr>
    ${underAge ? `<tr style="background-color: #F08080;">` : `<tr>`}
      <td style="width: 150px; padding: 5px; border: 1px solid #ddd;"><strong>Date of Birth:</strong></td>
      <td style="width: 200px; padding: 5px; border: 1px solid #ddd;">${dobJoined}</td>
    </tr>
    <tr>
      <td style="width: 150px; padding: 5px; border: 1px solid #ddd;"><strong>Phone Number:</strong></td>
      <td style="width: 200px; padding: 5px; border: 1px solid #ddd;">${
        data.phoneNumber
      }</td>
    </tr>
  </table>

  <h2 style="text-decoration: underline;">Emergency Info:</h2>
  <table style="margin-left: 20px; border-collapse: collapse;">
    <tr>
      <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Emergency Contact:</strong></td>
      <td style="width: 250px; padding: 5px; border: 1px solid #ddd;">${
        data.emergencyContactName
      }</td>
    </tr>
    <tr>
      <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Emergency Contact Number:</strong></td>
      <td style="width: 250px; padding: 5px; border: 1px solid #ddd;">${
        data.emergencyContactNumber
      }</td>
    </tr>
  </table>

  <h2 style="text-decoration: underline;">Other:</h2>
  <table style="margin-left: 20px; border-collapse: collapse;">
    <tr>
      <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Tattoo Location:</strong></td>
      <td style="width: 300px; padding: 5px; border: 1px solid #ddd;">${
        data.whereTattooOnBody
      }</td>
    </tr>
    ${
      data.medications === "Yes"
        ? `
      <tr>
        <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Medications:</strong></td>
        <td style="width: 300px; padding: 5px; border: 1px solid #ddd;">${data.whichMedications}</td>
      </tr>
    `
        : ""
    }
    ${
      data.numbingCream === "Yes"
        ? `
      <tr>
        <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Numbing Cream:</strong></td>
        <td style="width: 300px; padding: 5px; border: 1px solid #ddd;">Yes</td>
      </tr>
    `
        : ""
    }
    ${
      data.breastfeeding === "Yes"
        ? `
      <tr>
        <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Breastfeeding:</strong></td>
        <td style="width: 300px; padding: 5px; border: 1px solid #ddd;">Yes</td>
      </tr>
    `
        : ""
    }
    ${
      data.cancer === "Yes"
        ? `
      <tr>
        <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Cancer:</strong></td>
        <td style="width: 300px; padding: 5px; border: 1px solid #ddd;">Yes</td>
      </tr>
    `
        : ""
    }
    ${
      data.alcoholOrDrugs === "Yes"
        ? `
      <tr>
        <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Alcohol or Drugs:</strong></td>
        <td style="width: 300px; padding: 5px; border: 1px solid #ddd;">Yes</td>
      </tr>
    `
        : ""
    }
    ${
      data.allergies === "Yes"
        ? `
      <tr>
        <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Allergies:</strong></td>
        <td style="width: 300px; padding: 5px; border: 1px solid #ddd;">${data.allergiesInfo}</td>
      </tr>
    `
        : ""
    }

    ${
      data.medicalConditions != " None of the above"
        ? `      <tr>
        <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Medical Conditions:</strong></td>
        <td style="width: 300px; padding: 5px; border: 1px solid #ddd;">${data.medicalConditions}</td>
      </tr>`
        : ""
    }

    ${
      data.otherMedicalConditions != ""
        ? `      <tr>
        <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Other Conditions:</strong></td>
        <td style="width: 300px; padding: 5px; border: 1px solid #ddd;">${data.otherMedicalConditions}</td>
      </tr>
    `
        : ""
    } 
    <tr>
      <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Photo Permission:</strong></td>
      <td style="width: 300px; padding: 5px; border: 1px solid #ddd;">${
        data.photoPermission
      }</td>
    </tr>
    <tr>
      <td style="width: 200px; padding: 5px; border: 1px solid #ddd;"><strong>Acknowledged:</strong></td>
      <td style="width: 300px; padding: 5px; border: 1px solid #ddd;">${
        data.acknowledge
      }</td>
    </tr>
  </table>
`;

  return { dateJoined, htmlBody, checkEmail, ageCheck: underAge };
}

export default SendConsentEmail;
