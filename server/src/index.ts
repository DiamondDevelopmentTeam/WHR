import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { z } from "zod";

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT) || 4000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: CLIENT_URL
  })
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "WHR Associates API",
    timestamp: new Date().toISOString()
  });
});

const contactSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("A valid email is required."),
  company: z.string().optional(),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters.")
});

app.post("/api/contact", (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Please check the form and try again.",
      errors: parsed.error.flatten()
    });
  }

  console.log("New WHR contact lead:", parsed.data);

  return res.status(201).json({
    message: "Thank you. Your message has been received."
  });
});

app.listen(PORT, () => {
  console.log(`WHR Associates API running on http://localhost:${PORT}`);
});