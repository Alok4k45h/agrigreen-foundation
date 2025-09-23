import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const { name, position, address, email, phone, bestTimeToCall, query } = data;

  if (!name || !email || !query) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const messageToOwner = {
    from: process.env.GMAIL_USER,
    to: process.env.TO_EMAIL, // where you want to receive
    subject: `New Contact Form Submission from ${name}`,
    text: `
Name: ${name}
Position: ${position}
Address: ${address}
Email: ${email}
Phone: ${phone}
Best Time to Call: ${bestTimeToCall}
Query: ${query}
    `,
  };

  const autoReplyMessage = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Thank you for contacting Agri Green Foundation!",
    text: `Dear ${name},\n\nThank you for reaching out. We have received your message and will get back to you within 24 hours.\n\nRegards,\nAgri Green Foundation`,
  };

  try {
    await transporter.sendMail(messageToOwner);
    await transporter.sendMail(autoReplyMessage);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
