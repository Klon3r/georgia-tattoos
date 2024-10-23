// Inside api/index.js
import { json } from "express";

export default function handler(req, res) {
  res.status(200).json({ message: "API is running on Vercel!" });
}
