import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Middleware
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/booking", (req, res) => {
  console.log("Form Data: ", req.body);

  let data = req.body.booking;
  console.log("Name:", data.firstName);

  // Send back the created status code
  res.status(201).send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
