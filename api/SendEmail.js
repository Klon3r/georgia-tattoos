import nodemailer from "nodemailer";

//-----------------------------------
import dotenv from "dotenv";
import { promisify } from "util";
dotenv.config(); // Loads variables from .env file into process.env
//-----------------------------------

async function SendConsentEmail(data, files) {
  console.log("Sending Consent Email...");

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
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
  };

  const sendMail = promisify(transporter.sendMail.bind(transporter));

  try {
    await sendMail(mailContent);
  } catch (error) {
    console.error(
      "An error has occured while sending the consent email: ",
      error,
    );
  }
}

export default SendConsentEmail;
