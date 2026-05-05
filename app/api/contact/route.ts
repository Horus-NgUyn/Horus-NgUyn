import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid contact payload." },
      { status: 400 },
    );
  }

  const apiKey = process.env.EMAIL_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail =
    process.env.EMAIL_FROM ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { message: "Email service is not configured on server." },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `[Portfolio Contact] ${parsed.data.name}`,
      replyTo: parsed.data.email,
      text: `Sender: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`,
    });

    return NextResponse.json({ message: "Email sent." }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to send email. Try again later." },
      { status: 500 },
    );
  }
}
