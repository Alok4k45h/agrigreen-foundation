import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const { name, position, address, email, phone, bestTimeToCall, query } = data;

  if (!name || !email || !query) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 },
    );
  }

  // ✅ ZOHO SMTP CONFIG
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in", // India DC
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_MAIL_USER,
      pass: process.env.ZOHO_MAIL_PASS,
    },
  });

  // ✅ Mail to foundation (admin)
  const messageToOwner = {
    from: `"Agri Green Website" <${process.env.ZOHO_MAIL_USER}>`,
    replyTo: email,
    to: process.env.ZOHO_MAIL_USER, // support@agrigreenindia.in
    subject: `New website enquiry: ${name}`,
    text: `
NEW CONTACT FORM SUBMISSION
---------------------------

Name            : ${name}
Email           : ${email}
Phone           : ${phone || "N/A"}
Position        : ${position || "N/A"}
Address         : ${address || "N/A"}
Best Time to Call: ${bestTimeToCall || "N/A"}

Message:
${query}

---------------------------
Submitted via website contact Form on
${new Date().toLocaleString()}
  `,
  };

  // ✅ Auto-reply to user
  const autoReplyMessage = {
    from: `"Agri Green Support Team" <${process.env.ZOHO_MAIL_USER}>`,
    to: email,
    subject: "We have received your message | Agri Green Foundation",
    text: `Dear ${name},

Thank you for contacting Agri Green Foundation.

This email is to confirm that we have successfully received your message.
Our team will review your query and respond within 1–2 business days.

If your matter is urgent, please mention "Urgent" in the subject line when following up.

Warm regards,
Agri Green Foundation Support Team

---
This is an automated confirmation email.
Please do not reply to this email.

© ${new Date().getFullYear()} 
Agri Green Foundation 
www.agrigreenindia.org
All rights reserved 
`,
  };

  try {
    await transporter.sendMail(messageToOwner);
    await transporter.sendMail(autoReplyMessage);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Zoho Mail error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
