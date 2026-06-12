import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const region = formData.get("governorate") as string;

    if (!name || !email || !phone || !region) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection configuration
    await transporter.verify();

    // Construct the email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SMTP_TO_EMAIL || "support@nahla.tn",
      subject: "Nouvelle inscription au programme pilote Nahla !",
      text: `
Nouvelle demande de participation au programme pilote:

- Nom complet : ${name}
- Email : ${email}
- Téléphone : ${phone}
- Gouvernorat : ${region}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0B1D14; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">🐝 Nahla — Nouveau Pilote</h2>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <h3 style="color: #1a1a1a; margin-top: 0;">Nouvelle demande de participation au programme pilote</h3>
            <p style="color: #4b5563; font-size: 15px;">Voici les informations soumises via le formulaire du site web :</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 120px;"><strong>Nom complet :</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Email :</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Téléphone :</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Gouvernorat :</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${region}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; color: #9ca3af; font-size: 12px;">
            Cet email a été généré automatiquement par votre site web Nahla.
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}
