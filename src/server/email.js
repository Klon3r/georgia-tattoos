import dotenv from "dotenv";
import nodemailer from "nodemailer";

export function sendEmail(toEmail, bookingData) {
  const availability = getAvailability(
    bookingData.availMonday,
    bookingData.availTuesday,
    bookingData.availFriday,
    bookingData.availSaturday
  );

  //const nodemailer = require("nodemailer");

  dotenv.config({ path: "../../.env" });

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
    subject: `${bookingData.firstName + " " + bookingData.lastName} ${
      "(" + bookingData.instagram + ")"
    }`,
    //text: "This is an email sending test", //plain body text
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
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          bookingData.instagram
        }</td>
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
  };

  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email has been sent");
    } catch (err) {
      console.error("There has been an error: ", err);
    }
  };

  //console.log("Booking Array: ", bookingData);
  sendMail(transporter, mailOptions);
}

function getAvailability(monday, tuesday, friday, saturday) {
  let availability = [];

  if (monday === true) {
    availability.push("Monday");
  }
  if (tuesday === true) {
    availability.push("Tuesday");
  }
  if (friday === true) {
    availability.push("Friday");
  }
  if (saturday === true) {
    availability.push("Saturday");
  }

  return availability;
}
