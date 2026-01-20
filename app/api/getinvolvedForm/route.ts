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

    if (resume && resume.size > 1024 * 1024) {
      return NextResponse.json({ error: "Resume too large" }, { status: 400 });
    }
    if (screenshot && screenshot.size > 500 * 1024) {
      return NextResponse.json({ error: "Screenshot too large" }, { status: 400 });
    }

    const attachments= [];
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

    // ✅ ZOHO MAIL SMTP CONFIG
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",   // India DC
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_MAIL_USER,
        pass: process.env.ZOHO_MAIL_PASS,
      },
    });

// ✅ Admin email (Zoho inbox)
await transporter.sendMail({
  from: `"Agri Green Website" <${process.env.ZOHO_MAIL_USER}>`,
  replyTo: email,
  to: process.env.ZOHO_MAIL_USER,
  subject: `New ${interest} enquiry received`,
  html: `
    <div style="font-family:Arial,Helvetica,sans-serif; max-width:700px; margin:0 auto; padding:24px; color:#111827;">
      
      <h2 style="color:#166534; margin-bottom:16px;">
        New Website Enquiry
      </h2>

      <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:16px; margin-bottom:20px;">
        <p style="margin:0 0 8px;"><strong>Name:</strong> ${name}</p>
        <p style="margin:0 0 8px;"><strong>Email:</strong> ${email}</p>
        <p style="margin:0 0 8px;"><strong>Interest Type:</strong> ${interest}</p>
        <p style="margin:0;"><strong>Submitted On:</strong> ${new Date().toLocaleString()}</p>
      </div>

      <h3 style="margin-bottom:8px; color:#374151;">Message</h3>
      <div style="background:#ffffff; border:1px solid #e5e7eb; border-radius:8px; padding:16px; white-space:pre-line;">
        ${message}
      </div>

      ${
        attachments && attachments.length
          ? `<p style="margin-top:16px; font-size:13px; color:#065f46;">
              📎 ${attachments.length} attachment(s) included with this submission.
            </p>`
          : ``
      }

      <hr style="border:none; border-top:1px solid #e5e7eb; margin:24px 0;" />

      <p style="font-size:12px; color:#6b7280;">
        This email was automatically generated from the website Get Involved form.
        You can reply directly to this email to respond to the sender.
      </p>

    </div>
  `,
  attachments,
});


    // ✅ Auto-reply to user (Zoho)
await transporter.sendMail({
  from: `"Agri Green Support Team" <${process.env.ZOHO_MAIL_USER}>`,
  to: email,
  subject: "We’ve received your message | Agri Green Foundation",
  html: `
    <div style="font-family:Arial,Helvetica,sans-serif; max-width:600px; margin:0 auto; padding:24px; color:#1f2937; background:#ffffff;">
      
      <h2 style="color:#166534; margin-bottom:12px;">
        Thank you for reaching out, ${name}.
      </h2>

      <p style="font-size:14px; line-height:1.6; margin-bottom:12px;">
        We’ve successfully received your message.
      </p>

      <p style="font-size:14px; line-height:1.6; margin-bottom:12px;">
        Our team is currently reviewing your request and will get back to you
        within <strong>1–2 business days</strong>.
      </p>

      <p style="font-size:14px; line-height:1.6; margin-bottom:12px;">
        Thank you for your patience and for reaching out to us.
      </p>

      <p style="font-size:14px; margin-bottom:4px;">Warm regards,</p>
      <p style="font-size:14px; font-weight:bold; color:#166534;">
        Agri Green Support Team
      </p>

      <hr style="border:none; border-top:1px solid #e5e7eb; margin:24px 0;" />

      <p style="font-size:12px; color:#6b7280; line-height:1.5;">
        This is an automated confirmation email sent to acknowledge
        your message. Please do not reply to this mail.
      </p>

      <p style="font-size:12px; color:#6b7280;">
        © ${new Date().getFullYear()} 
        <br />
        Agri Green Foundation 
        <br />
        www.agrigreenindia.org
        <br /> All rights reserved 
      </p>
    </div>
  `,
});

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Zoho Mail error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
