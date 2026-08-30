import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const region = (formData.get("governorate") as string) || "";

    if (!name.trim() || !email.trim() || !phone.trim() || !region.trim()) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Format d'email invalide." },
        { status: 400 }
      );
    }

    const leadRecord = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      governorate: region.trim(),
      source: "nahla.tn",
    };

    // 1. DURABLE PERSISTENCE VIA MALEK_BACKEND -> MONGODB ATLAS
    // Essential for Vercel Serverless hosting where the local filesystem is ephemeral/read-only.
    const backendUrl = process.env.BACKEND_API_URL || process.env.NEXT_PUBLIC_BACKEND_URL || "https://api.nahla.tn";
    let persistedToBackend = false;
    let backendLeadId: string | null = null;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

      const backendRes = await fetch(`${backendUrl}/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-forwarded-for": request.headers.get("x-forwarded-for") || "",
          "user-agent": request.headers.get("user-agent") || "",
        },
        body: JSON.stringify(leadRecord),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (backendRes.ok) {
        const backendData = (await backendRes.json()) as { success?: boolean; leadId?: string };
        persistedToBackend = true;
        backendLeadId = backendData.leadId || null;
        console.log(`[LeadCapture] Lead successfully saved to MongoDB Atlas via backend: ${backendLeadId}`);
      } else {
        console.warn(`[LeadCapture] Backend returned status ${backendRes.status}`);
      }
    } catch (backendErr) {
      console.warn("[LeadCapture] Direct backend lead ingestion deferred or unreachable:", backendErr);
    }

    // 2. EPHEMERAL / TMP BACKUP (Safety net if running in Node or fallback)
    try {
      const tmpDir = process.env.VERCEL ? "/tmp" : path.join(process.cwd(), "data");
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
      }
      const tmpFile = path.join(tmpDir, "leads.json");
      let currentLeads: unknown[] = [];
      if (fs.existsSync(tmpFile)) {
        try {
          currentLeads = JSON.parse(fs.readFileSync(tmpFile, "utf8"));
        } catch {
          currentLeads = [];
        }
      }
      currentLeads.push({
        ...leadRecord,
        id: backendLeadId || `lead_${Date.now()}`,
        submittedAt: new Date().toISOString(),
      });
      fs.writeFileSync(tmpFile, JSON.stringify(currentLeads, null, 2), "utf8");
    } catch (tmpErr) {
      // Non-fatal on serverless
      console.debug("[LeadCapture] Tmp file write skipped:", tmpErr);
    }

    // 3. SMTP EMAIL NOTIFICATION
    let emailDispatched = false;
    const hasSmtpConfig = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER);

    if (hasSmtpConfig) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const escapeHtml = (unsafe: string) => {
          return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        };

        const safeName = escapeHtml(leadRecord.name);
        const safeEmail = escapeHtml(leadRecord.email);
        const safePhone = escapeHtml(leadRecord.phone);
        const safeRegion = escapeHtml(leadRecord.governorate);

        const mailOptions = {
          from: `"${safeName}" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
          replyTo: safeEmail,
          to: process.env.SMTP_TO_EMAIL || "support@nahla.tn",
          subject: `Nouvelle inscription au programme pilote Nahla — ${safeName} (${safeRegion})`,
          text: `
Nouvelle demande de participation au programme pilote:

- Nom complet : ${safeName}
- Email : ${safeEmail}
- Téléphone : ${safePhone}
- Gouvernorat : ${safeRegion}
          `,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #0B1D14; padding: 20px; text-align: center;">
                <h2 style="color: #ffffff; margin: 0;">🐝 Nahla — Nouveau Pilote</h2>
              </div>
              <div style="padding: 30px; background-color: #ffffff;">
                <h3 style="color: #1a1a1a; margin-top: 0;">Nouvelle demande de participation au programme pilote</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 120px;"><strong>Nom complet :</strong></td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Email :</strong></td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Téléphone :</strong></td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${safePhone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Gouvernorat :</strong></td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${safeRegion}</td>
                  </tr>
                </table>
              </div>
              <div style="background-color: #f9fafb; padding: 15px; text-align: center; color: #9ca3af; font-size: 12px;">
                Enregistré sur nahla.tn
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        emailDispatched = true;
      } catch (smtpErr) {
        console.warn("[LeadCapture] SMTP email delivery deferred:", smtpErr);
      }
    }

    return NextResponse.json(
      {
        message: "Demande enregistrée avec succès !",
        persisted: persistedToBackend,
        leadId: backendLeadId,
        emailNotified: emailDispatched,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[LeadCapture] Unexpected API error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'enregistrement de votre demande." },
      { status: 500 }
    );
  }
}
