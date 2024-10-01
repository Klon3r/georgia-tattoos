import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import multer from "multer";
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

const upload = multer({ storage: multer.memoryStorage() });

// /booking (POST)
app.post("/booking", upload.array("referenceFiles"), (req, res) => {
  console.log("Form Data: ", req.body);
  //console.log("Uploaded Files: ", req.files);
  let data = req.body;

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
    //   data.sizeTattoo,
    //   data.tattooColor,
    //   data.workAround
    // );

    try {
      //sendEmail(process.env.HER_EMAIL, data, req.files);
      sendEmail(process.env.MY_EMAIL, data, req.files);
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
