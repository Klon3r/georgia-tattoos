import express from "express";
import cors from "cors";
import helmet from "helmet";
import multer from "multer";
import SendConsentEmail from "./SendEmail.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "https://www.georgiatattoos.com.au",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ storage: multer.memoryStorage() });
const uploadFields = upload.fields([
  { name: "pdf", maxCount: 1 },
  { name: "licensePhoto", maxCount: 1 },
]);

app.post("/api/consent", uploadFields, async (req, res) => {
  // console.log("Form Data: ", req.body);
  // console.log("FILE: ", req.files);

  const data = req.body;
  const files = req.files;

  SendConsentEmail(data, files)
    .then(() => console.log("Email task started"))
    .catch((error) => console.error("Failed to send email:", error));

  res
    .status(202)
    .json({ message: "Consent email is being sent asynchronously" });
});

export default app;
