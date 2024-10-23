import express from "express";
import cors from "cors";
import helmet from "helmet";
import multer from "multer";
import { sendEmail } from "./email.js"; // Adjust the path as needed

const app = express();

// Security and middleware setup
app.use(helmet());
app.use(
  cors({
    origin: "http://www.georgiatattoos.com.au",
  })
);

// Set up file upload handling using multer
const upload = multer({ storage: multer.memoryStorage() });

app.post("/api/booking", upload.array("referenceFiles"), async (req, res) => {
  //console.log("Form Data:", req.body);
  //console.log("Files:", req.files);
  try {
    await sendEmail(process.env.EMAIL_USERNAME, req.body, req.files);
    res.status(201).send();
  } catch (err) {
    //console.log("There was an error submitting the booking: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default app;
