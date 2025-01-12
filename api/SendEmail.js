import nodemailer from "nodemailer";

//-----------------------------------
import dotenv from "dotenv";
import { promisify } from "util";
dotenv.config(); // Loads variables from .env file into process.env
//-----------------------------------

async function SendConsentEmail(data, files) {
  console.log("Sending Consent Email...");

  console.log("Files received:", files);

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const attachmentFiles = [...(files.pdf || []), ...(files.licensePhoto || [])];

  const attachments = attachmentFiles.map((file) => {
    return {
      filename: file.originalname, // Set correct filename if missing
      content: file.buffer,
      contentType: file.mimetype, // Ensure the correct MIME type
    };
  });

  const mailContent = {
    from: {
      name: "Consent Form",
    },
    to: process.env.EMAIL_USERNAME,
    subject: `Consent Form: ${data.fname} ${data.lname}`,
    html: `
        CONSENT FROM
    `,
    attachments: attachments,
  };

  try {
    const info = await transporter.sendMail(mailContent);
    console.log("Consent email sent successfully:", info.response);
  } catch (error) {
    console.error(
      "An error has occurred while sending the consent email: ",
      error
    );
  }
}

export default SendConsentEmail;
