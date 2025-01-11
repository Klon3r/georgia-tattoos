import express from "express";
import cors from "cors";
import helmet from "helmet";
import multer from "multer";
import SendConsentEmail from "./SendEmail.js";

//-----------------------------------
import dotenv from "dotenv";
dotenv.config(); // Loads variables from .env file into process.env
//-----------------------------------

const app = express();

app.use(helmet());
app.use(
  cors({
    //origin: "https://www.georgiatattoos.com.au",
    origin: "*", //REMOVE BEFORE PUSH TO VERCEL!!!
  }),
);

app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/api/consent", upload.single("licensePhoto"), async (req, res) => {
  console.log("Form Data: ", req.body);
  console.log("FILE: ", req.file);

  try {
    // something
    SendConsentEmail(req.body, req.file);
  } catch (error) {
    // Do function
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//------------------------------------------------
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// -----------------------------------------------
