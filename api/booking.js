import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import multer from "multer";
import { insertBooking } from "./database.js";
import { sendEmail } from "./email.js";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "http://www.georgiatattoos.com.au" }));
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ storage: multer.memoryStorage() });

app.post("/booking", upload.array("referenceFiles"), (req, res) => {
  console.log("Form Data: ", req.body);
  let data = req.body;

  try {
    try {
      sendEmail(process.env.EMAIL_USERNAME, data, req.files);
    } catch (err) {
      console.error("Error sending email: ", err);
    }

    res.status(201).send();
  } catch (err) {
    console.error("There was an error: ", err);
    res.status(500).send();
  }
});

export default app;

// TODO: NOT NEEDED FOR VERCEL
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
