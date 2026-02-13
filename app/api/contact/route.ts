import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <contact@afzalkhan.online>',
      to: 'luffyxzoro1512@gmail.com',
      subject: `New Contact Message from ${name}`,
      replyTo: email, // ✅ correct field
      html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log("EMAIL SENT:", data);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
