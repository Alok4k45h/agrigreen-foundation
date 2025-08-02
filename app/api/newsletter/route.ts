export async function POST(req: Request) {
  const { email } = await req.json();

  if (typeof email !== "string" || !email.includes("@")) {
  return Response.json({ success: false }, { status: 400 });
}

  try {
    const scriptURL = process.env.GOOGLE_SHEET_SCRIPT_URL!;
    const res = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Google Sheet request failed");

    return Response.json({ success: true });
  } catch (error) {
    console.error("Newsletter Error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
