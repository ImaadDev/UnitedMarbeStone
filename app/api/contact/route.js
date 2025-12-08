import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/templates/Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, message, isArabic } = await req.json();

    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: isArabic ? "رسالة جديدة من الموقع" : "New Contact Message",
      react: ContactEmail({ name, email, phone, message, isArabic }), // 👈 FIX
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("💥 SEND ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
