import { put } from "@vercel/blob";

export async function PUT(request: Request) {
  const form = await request.formData();
  const file = form.get("file") as File;
  const fullName = form.get("fullName");
  const vercelFolder = "2026/april";

  const blob = await put(`${vercelFolder}/${fullName}-${file.name}`, file, {
    access: "public",
    addRandomSuffix: true,
  });

  return Response.json(blob);
}
