import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, interest, message, honey } = await req.json();

    if (honey) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email to Admin
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: `"AgriGreen Team" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting AgriGreen 🌿",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for showing interest in <strong>AgriGreen</strong> as a <strong>${interest}</strong>.</p>
        <p>We’ve received your message:</p>
        <blockquote>${message}</blockquote>
        <p>Our team will get back to you soon!</p>
        <br/>
        <p>Warm regards,<br/>AgriGreen Team</p>
        <p style="font-size: 0.9rem; color: #999;">This is an automated message. Please do not reply.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending message:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
