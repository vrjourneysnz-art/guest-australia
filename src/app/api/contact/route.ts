import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, phone, travelDates, travellers, holidayType, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const holidayLabels: Record<string, string> = {
      lifestyle: "Lifestyle Holiday",
      family: "Family Holiday",
      honeymoon: "Honeymoon",
      "australia-nz": "Australia & New Zealand",
    };

    await resend.emails.send({
      from: "Guest Australia <enquiries@guestaustralia.com>",
      to: "michael@guestaustralia.com",
      replyTo: email,
      subject: `New Travel Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #C45A3C; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 22px;">New Travel Enquiry</h1>
            <p style="margin: 8px 0 0; opacity: 0.8;">via guestaustralia.com contact form</p>
          </div>
          <div style="background: #f9f7f4; padding: 24px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 140px; vertical-align: top;">Name:</td>
                <td style="padding: 8px 0; color: #555;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; vertical-align: top;">Email:</td>
                <td style="padding: 8px 0; color: #555;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333; vertical-align: top;">Phone:</td><td style="padding: 8px 0; color: #555;">${phone}</td></tr>` : ""}
              ${travelDates ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333; vertical-align: top;">Travel Dates:</td><td style="padding: 8px 0; color: #555;">${travelDates}</td></tr>` : ""}
              ${travellers ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333; vertical-align: top;">Travellers:</td><td style="padding: 8px 0; color: #555;">${travellers}</td></tr>` : ""}
              ${holidayType ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333; vertical-align: top;">Holiday Type:</td><td style="padding: 8px 0; color: #555;">${holidayLabels[holidayType] || holidayType}</td></tr>` : ""}
            </table>
            ${message ? `
              <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #ddd;">
                <p style="font-weight: bold; color: #333; margin: 0 0 8px;">Message:</p>
                <p style="color: #555; line-height: 1.6; margin: 0; white-space: pre-line;">${message}</p>
              </div>
            ` : ""}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
