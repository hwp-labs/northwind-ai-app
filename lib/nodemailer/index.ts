  "use server";
  
import nodemailer from "nodemailer";
//
import { ApiResponse } from "@/lib/supabase/types";
import { APP } from "@/constants/APP";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true", // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmailAction(args: {
  to: string | string[];
  subject: string;
  body: string;
}): Promise<ApiResponse<string>> {

  try {
    const info = await transporter.sendMail({
      from: `${APP.name} <${APP.email}>`,
      bcc: process.env.SMTP_BCC,
      // 
      to: args.to,
      subject: args.subject,
      html: args.body,
    });

    return { data: info.messageId, error: undefined };
  } catch (err: any) {
    return { data: null, error: err?.message || "NodemailerUnknownError" };
  }
}

// Optional: verify transporter on server start
transporter
  .verify()
  .then(() => console.log("SMTP transporter ready"))
  .catch((err) => console.error("SMTP transporter error:", err));
