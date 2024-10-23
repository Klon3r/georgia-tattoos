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
app.use(cors({ origin: "https://www.georgiatattoos.com.au" }));
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ storage: multer.memoryStorage() });

app.post("/booking", upload.array("referenceFiles"), async (req, res) => {
  console.log("Form Data: ", req.body);
  let data = req.body;

  try {
    await sendEmail(process.env.EMAIL_USERNAME, data, req.files);
    res.status(201).send();
  } catch (err) {
    console.error("There was an error: ", err);
    res.status(500).send();
  }
});

// Vercel default export function
export default (req, res) => {
  if (req.method === "POST") {
    return app(req, res);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
