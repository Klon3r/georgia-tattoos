import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import formidable from "formidable";
import fs from "fs";

const ALLOWED_ORIGINS = ["https://www.georgiatattoos.com.au"];

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // CORS preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const form = formidable();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: "Error parsing form" });
      return;
    }
    if (req.method === "POST") {
      const bookingData = normalizeBookingData(fields);
      await sendBookingEmail(bookingData, files);
      res.status(201).json({ message: "Email sent!" });

      return;
    }
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  });
}

type bookingDataType = {
  firstName: string;
  lastName: string;
  preferredName?: string;
  pronouns: string;
  email: string;
  number: string;
  instagram: string;
  sizeTattoo: string;
  locationOnBody: string;
  tattooDescription: string;
  tattooColour: string;
  workAround: string;
  bookingPolicy: boolean;
  availability: Record<string, boolean>;
};

async function sendBookingEmail(
  data: bookingDataType,
  files: formidable.Files,
) {
  const instagramURL = convertInstagramToURL(data.instagram);
  const availability = getAvailability(data.availability);
  const htmlBody = getHTMLBody(data, instagramURL, availability);

  const fileFieldNames = Object.keys(files);
  const fileArray = fileFieldNames.flatMap((field) => {
    const fileOrArray = files[field];
    return Array.isArray(fileOrArray) ? fileOrArray : [fileOrArray];
  });
  const attachments = await Promise.all(
    fileArray
      .filter((file): file is formidable.File => !!file)
      .map(async (file) => ({
        filename: file.originalFilename || file.newFilename,
        content: fs.readFileSync(file.filepath),
        contentType: file.mimetype ?? undefined,
      })),
  );

  const emailAddress = process.env.EMAIL;
  if (!emailAddress) {
    throw new Error("EMAIL environment variable is not set");
  }

  const emailFromAddress = process.env.EMAIL_FROM;
  if (!emailFromAddress) {
    throw new Error("EMAIL_FROM environment variable is not set");
  }

  const result = await resend.emails.send({
    from: `"Georgia Tattoos" <${emailFromAddress}>`,
    to: emailAddress,
    replyTo: `${data.email}`,
    subject: `Booking: ${data.firstName} ${data.lastName} (${data.instagram})`,
    html: `${htmlBody}`,
    attachments: attachments,
  });
  console.log("Resend Result:", result);
}

function getHTMLBody(
  data: bookingDataType,
  instagramURL: string,
  availability: string,
) {
  const htmlBody = `
    <h3>Booking</h3>
    <table>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Name:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${data.firstName + " " + data.lastName}</td>
      </tr>
      <tr style="background-color: #fcdef8;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Preferred Name:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${data.preferredName}</td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Preferred Pronouns:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${data.pronouns}</td>
      </tr>
      <tr style="background-color: #fcdef8;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Email:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${data.email}</td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Phone:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${data.number}</td>
      </tr>
      <tr style="background-color: #fcdef8;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Instagram:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">
          <a href="${instagramURL}">${data.instagram}</a>
        </td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Description of Tattoo:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${data.tattooDescription}</td>
      </tr>
      <tr style="background-color: #fcdef8;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Tattoo Colour:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${data.tattooColour}</td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Location on Body:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${data.locationOnBody}</td>
      </tr>
      <tr style="background-color: #fcdef8;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Size in Centimeters:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${data.sizeTattoo}</td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Availability:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${availability}</td>
      </tr>
    </table>
  `;
  return htmlBody;
}

function convertInstagramToURL(instagram: string) {
  const convertedHandle = instagram.toLowerCase().replace("@", "");
  const instagramURL = `https://www.instagram.com/${convertedHandle}/?hl=en`;
  return instagramURL;
}

function getAvailability(availability: Record<string, boolean>) {
  const availabilityList: string[] = [];

  for (const [day, isAvailable] of Object.entries(availability)) {
    if (isAvailable) {
      availabilityList.push(day.charAt(0).toUpperCase() + day.slice(1));
    }
  }

  return availabilityList.join(", ");
}

function normalizeBookingData(fields: Record<string, any>): bookingDataType {
  let availabilityObj: Record<string, boolean> = {};
  try {
    if (fields.availability?.[0]) {
      availabilityObj = JSON.parse(fields.availability[0]);
    }
  } catch {
    availabilityObj = {};
  }

  return {
    firstName: fields.firstName?.[0] ?? "",
    lastName: fields.lastName?.[0] ?? "",
    preferredName: fields.preferredName?.[0] ?? "",
    pronouns: fields.pronouns?.[0] ?? "",
    email: fields.email?.[0] ?? "",
    number: fields.number?.[0] ?? "",
    instagram: fields.instagram?.[0] ?? "",
    sizeTattoo: fields.sizeTattoo?.[0] ?? "",
    locationOnBody: fields.locationOnBody?.[0] ?? "",
    tattooDescription: fields.tattooDescription?.[0] ?? "",
    tattooColour: fields.tattooColour?.[0] ?? "",
    workAround: fields.workAround?.[0] ?? "",
    bookingPolicy: fields.bookingPolicy?.[0] === "true",
    availability: availabilityObj,
  };
}
