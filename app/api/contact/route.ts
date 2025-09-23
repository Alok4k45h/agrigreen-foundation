import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const interest = formData.get("interest") as string;
    const message = formData.get("message") as string;
    const honey = formData.get("honey") as string | null;

    if (honey) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    const resume = formData.get("resume") as File | null;
    const screenshot = formData.get("screenshot") as File | null;

    // ✅ File size limits
    if (resume && resume.size > 1024 * 1024) {
      return NextResponse.json({ error: "Resume too large" }, { status: 400 });
    }
    if (screenshot && screenshot.size > 500 * 1024) {
      return NextResponse.json({ error: "Screenshot too large" }, { status: 400 });
    }

    // ✅ Attachments array
    const attachments = [];
    if (resume) {
      attachments.push({
        filename: resume.name,
        content: Buffer.from(await resume.arrayBuffer()),
      });
    }
    if (screenshot) {
      attachments.push({
        filename: screenshot.name,
        content: Buffer.from(await screenshot.arrayBuffer()),
      });
    }

    // ✅ Setup mail transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ✅ Send mail to you (admin)
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New ${interest} submission`,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
      attachments,
    });

    // ✅ Auto-reply to user
    await transporter.sendMail({
      from: `"Agri🌾Green🌿 Team" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thank you for reaching out to Agri🌾Green🌿",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
          <h2 style="color:#166534;">Thank you, ${name}!</h2>
          <p>We’ve received your submission regarding <strong>${interest}</strong>.</p>
          <p>Our team will review your message and get back to you as soon as possible.</p>
          <br/>
          <p style="color:#555;">With gratitude,</p>
          <p style="font-weight:bold;">Agri🌾Green🌿 Team</p>
          <hr/>
          <p style="font-size:12px;color:#888;">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Error sending mail:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
