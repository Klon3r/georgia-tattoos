import { put } from "@vercel/blob";

export async function PUT(request: Request) {
  const form = await request.formData();
  const file = form.get("file") as File;
  const fullName = form.get("fullName");
  const blob = await put(`booking-june-2025/${fullName}-${file.name}`, file, {
    access: "public",
    addRandomSuffix: true,
  });

  return Response.json(blob);
}
