import express from "express";
import cors from "cors";
import helmet from "helmet";
import multer from "multer";
import nodemailer from "nodemailer";
import { promisify } from "util";

const app = express();

// Security and middleware setup
app.use(helmet());
app.use(
  cors({
    origin: ["https://www.georgiatattoos.com.au", "http://localhost:3000"],
  })
);

// File upload
const upload = multer({ storage: multer.memoryStorage() });

app.post("/api/booking", upload.array("referenceFiles"), async (req, res) => {
  //console.log("Form Data:", req.body);
  //console.log("Files:", req.files);

  try {
    await sendEmail(process.env.EMAIL_USERNAME, req.body, req.files);
    // Success
    //res.status(201).send();
  } catch (err) {
    console.log("There was an error submitting the booking: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * Send an email of booking to esoteric tattoos
 * @param {string} toEmail - Recipient's email address
 * @param {object} bookingData - Booking information (name, description, size in cm)
 * @param {array} files - Reference photos to be attached to email
 */
async function sendEmail(toEmail, bookingData, files) {
  const availability = getAvailability(
    bookingData.availMonday,
    bookingData.availTuesday,
    bookingData.availFriday,
    bookingData.availSaturday
  );

  const instagramURL = convertInstagram(bookingData.instagram);

  // Create transporter obj
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: "Georgia Tattoos",
      address: process.env.EMAIL_USERNAME,
    },
    to: toEmail,
    replyTo: bookingData.email,
    subject: `${bookingData.firstName + " " + bookingData.lastName} ${
      "(" + bookingData.instagram + ")"
    }`,
    html: `  
    <h3>Booking</h3>
    <table>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Name:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          bookingData.firstName + " " + bookingData.lastName
        }</td>
      </tr>
      <tr style="background-color: #f0e9e9;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Preferred Name:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          bookingData.prefName
        }</td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Preferred Pronouns:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          bookingData.pronouns
        }</td>
      </tr>
      <tr style="background-color: #f0e9e9;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Email:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          bookingData.email
        }</td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Phone:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          bookingData.number
        }</td>
      </tr>
      <tr style="background-color: #f0e9e9;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Instagram:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">
          <a href="${instagramURL}">${bookingData.instagram}</a>
        
        </td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Description of Tattoo:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          bookingData.descTattoo
        }</td>
      </tr>
      <tr style="background-color: #f0e9e9;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Black & Grey or Colour:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          bookingData.tattooColor
        }</td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Location on Body:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          bookingData.locationOnBody
        }</td>
      </tr>
      <tr style="background-color: #f0e9e9;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Size in Centimeters:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          bookingData.sizeTattoo
        }</td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Availability:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${availability}</td>
      </tr>   
    </table>`, // html body:
    attachments: files.map((file) => ({
      filename: file.originalname,
      content: file.buffer,
      contentType: file.mimetype,
    })),
  };

  // Promisify sendMail
  const sendMail = promisify(transporter.sendMail.bind(transporter));

  try {
    // Send email and await response
    await sendMail(mailOptions);
    console.log("Email has been sent");
  } catch (err) {
    console.error("Error sending email: ", err);
    throw err; // Propagate the error
  }

  //console.log("Booking Array: ", bookingData);
  //sendMail(transporter, mailOptions);
}

/**
 * Convert the availability booleans into an array and return that array
 * @param {boolean} monday
 * @param {boolean} tuesday
 * @param {boolean} friday
 * @param {boolean} saturday
 * @returns {array} Availablity array
 */
function getAvailability(monday, tuesday, friday, saturday) {
  let availability = [];

  if (monday === "true") {
    availability.push("Monday");
  }
  if (tuesday === "true") {
    availability.push("Tuesday");
  }
  if (friday === "true") {
    availability.push("Friday");
  }
  if (saturday === "true") {
    availability.push("Saturday");
  }

  return availability;
}

/**
 * Convert instagram handle into a full url
 * @param {string} handle
 * @returns
 */
function convertInstagram(handle) {
  const convertedHandle = handle.replace("@", "");
  const instagramURL = `https://www.instagram.com/${convertedHandle}/?hl=en`;
  return instagramURL;
}

export default app;
