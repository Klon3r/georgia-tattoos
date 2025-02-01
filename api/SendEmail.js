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

  const msg = {
    to: process.env.EMAIL_USERNAME,
    from: "georgiatattoos666@gmail.com",
    subject: `Consent Form: ${data.fname} ${data.lname}`,
    html: `<p>CONSENT FORM</p>`,
    attachments: attachments,
  };

  try {
    await sgMail.send(msg);
    console.log("✅ Consent email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending consent email:", error);
  }
}

export default SendConsentEmail;
