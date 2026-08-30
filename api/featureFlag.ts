import { createClient } from "@vercel/global-config";
import { VercelRequest, VercelResponse } from "@vercel/node";

const ALLOWED_ORIGINS =
  process.env.NODE_ENV === "production"
    ? "https://www.georgiatattoos.com.au"
    : "*";

const configClient = createClient(process.env.GLOBAL_CONFIG);

export async function GET(req: VercelRequest, res: VercelResponse) {
  const isProduction = process.env.NODE_ENV === "production";
  const origin = req.headers.origin;

  if (isProduction) {
    if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
      return new Response("CORS not allowed", { status: 403 });
    }
  }

  const featureFlags = await configClient.get("feature_flags");

  return new Response(JSON.stringify(featureFlags), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": ALLOWED_ORIGINS,
      "Access-Control-Allow-Methods": "GET",
    },
  });
}
