import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import formidable from "formidable";

const ALLOWED_ORIGINS =
  process.env.NODE_ENV === "production"
    ? "https://www.georgiatattoos.com.au"
    : "*";

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

  form.parse(req, async (err, fields) => {
    if (err) {
      res.status(500).json({ error: "Error parsing form" });
      console.log("Error Parsing Form", err, fields); // For Vercel Logs

      return;
    }

    try {
      if (req.method === "POST") {
        const bookingData = normalizeBookingData(fields);
        await sendBookingEmail(bookingData);
        res.status(201).json({ message: "Email sent!" });

        return;
      }
      res.status(405).json({ message: "Method Not Allowed" });
      return;
    } catch (error) {
      console.log("Booking error:", error); // For Vercel Logs
      res
        .status(500)
        .json({ message: "Something went wrong! Please try again later." });
      return;
    }
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
  fileUrls: string[];
  scarCoverup: string;
  scarMetalPlating: string;
  scarAge: string;
};

async function sendBookingEmail(data: bookingDataType) {
  const instagram = convertInstagramToURL(data.instagram);
  const availability = getAvailability(data.availability);

  const fileUrls = data.fileUrls;
  const referencePhotosHTML = fileUrls.map(
    (url) =>
      `<div><a href="${url}"><img src="${url}" alt="Reference Photo" style="max-width:200px;"/></a></div>`,
  );

  const htmlBody = getHTMLBody(
    data,
    instagram.url,
    availability,
    referencePhotosHTML,
  );

  const emailAddress = process.env.EMAIL;
  if (!emailAddress) {
    throw new Error("EMAIL environment variable is not set");
  }

  const emailFromAddress = process.env.EMAIL_FROM;
  if (!emailFromAddress) {
    throw new Error("EMAIL_FROM environment variable is not set");
  }

  let emailSubject = "";

  // if (data.scarCoverup == "Yes") {
  //   emailSubject = "Scar Coverup";
  // } else {
  //   emailSubject = "Booking";
  // }

  emailSubject = "Booking";

  const result = await resend.emails.send({
    from: `"Georgia Tattoos" <${emailFromAddress}>`,
    to: emailAddress,
    replyTo: `${data.email}`,
    subject: `${emailSubject}: ${data.firstName} ${data.lastName} (${instagram.handle})`,
    html: `${htmlBody}`,
  });
  console.log("Resend Result:", result);
}

function getHTMLBody(
  data: bookingDataType,
  instagramURL: string,
  availability: string,
  fileUrls: string[],
) {
  let scarHtml = "";

  if (data.scarCoverup == "Yes") {
    scarHtml = `  
    <h3 style="margin-bottom: 5px; text-decoration: underline;">Scar Info</h3>
    <table style="margin-left: 20px;">
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Scar Age:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          data.scarAge
        }</td>
      </tr>
      <tr style="background-color: #fcdef8;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Scar Metal Plating:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          data.scarMetalPlating
        }</td>
      </tr>
    </table>`;
  }

  const htmlBody = `
    <h3 style="margin-bottom: 5px; text-decoration: underline;">Booking</h3>
    <table style="margin-left: 20px;">
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Name:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          data.firstName + " " + data.lastName
        }</td>
      </tr>
      <tr style="background-color: #fcdef8;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Preferred Name:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          data.preferredName
        }</td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Preferred Pronouns:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          data.pronouns
        }</td>
      </tr>
      <tr style="background-color: #fcdef8;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Email:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          data.email
        }</td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Phone:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          data.number
        }</td>
      </tr>
      <tr style="background-color: #fcdef8;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Instagram:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">
          <a href="${instagramURL}">${data.instagram}</a>
        </td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Description of Tattoo:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          data.tattooDescription
        }</td>
      </tr>
      <tr style="background-color: #fcdef8;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Work Around:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          data.workAround
        }</td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Tattoo Colour:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          data.tattooColour
        }</td>
      </tr>
      <tr style="background-color: #fcdef8;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Location on Body:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          data.locationOnBody
        }</td>
      </tr>
      <tr>
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Size in Centimeters:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${
          data.sizeTattoo
        }</td>
      </tr>
      <tr style="background-color: #fcdef8;">
        <td style="width: 200px; padding-bottom: 5px; padding-top: 5px;"><strong>Availability:</strong></td>
        <td style="width: 300px; padding-bottom: 5px; padding-top: 5px;">${availability}</td>
      </tr>
    </table>

    ${scarHtml}

    <h3 style="margin-bottom: 5px; text-decoration: underline;">Reference Photos</h3>
    ${fileUrls}
  `;

  return htmlBody;
}

function convertInstagramToURL(instagram: string) {
  const handle = instagram.toLowerCase().replace("@", "");
  const url = `https://www.instagram.com/${handle}/?hl=en`;
  return { handle, url };
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
    fileUrls: JSON.parse(fields.fileUrls?.[0] ?? "[]"),
    scarCoverup: fields.scarCoverup?.[0] ?? "No",
    scarMetalPlating: fields.scarMetalPlating?.[0] ?? "",
    scarAge: fields.scarAge?.[0] ?? "",
  };
}
