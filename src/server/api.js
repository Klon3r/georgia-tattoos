import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { insertBooking } from "./database.js";
import { sendEmail } from "./email.js";

dotenv.config({ path: "./.env" }); // .env file location

const app = express();
const port = 3000;

// Middleware
app.use(helmet());
app.use(express.json());
// TODO: Change this on live deployment
app.use(cors({ origin: "http://192.168.50.173:5173" }));
app.use(bodyParser.urlencoded({ extended: true }));

// /booking (POST)
app.post("/booking", (req, res) => {
  console.log("Form Data: ", req.body);
  let data = req.body.booking;

  try {
    // insertBooking(
    //   data.firstName,
    //   data.lastName,
    //   data.prefName,
    //   data.pronouns,
    //   data.email,
    //   data.number,
    //   data.instagram,
    //   data.descTattoo,
    //   data.availMonday,
    //   data.availTuesday,
    //   data.availFriday,
    //   data.availSaturday,
    //   data.locationOnBody,
    //   data.sizeTattoo
    //   data.tattooColor,
    //   data.workAround
    // );

    try {
      //sendEmail(process.env.HER_EMAIL, data);
      sendEmail(process.env.MY_EMAIL, data);
    } catch (err) {
      console.error("There has been an error sending the email: ", err);
    }

    // Send status code
    //res.status(201).send();
  } catch (err) {
    // Error
    console.error("There was an error: ", err);
    res.status(500).send();
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
