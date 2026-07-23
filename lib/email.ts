import { Resend } from "resend";

type ContactEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  servicePackage: string;
  serviceTier: string;
  budget: string;
  content: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function row(label: string, value: string) {
  return `<tr>
  <td style="padding:8px 0;color:#64748b;vertical-align:top;width:140px;">${escapeHtml(label)}</td>
  <td style="padding:8px 0;color:#0f172a;">${escapeHtml(value)}</td>
</tr>`;
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY must be configured");
  }
  return new Resend(apiKey);
}

export async function sendContactNotification(data: ContactEmailPayload) {
  const to = process.env.CONTACT_EMAIL ?? "veltstack@outlook.com";
  const from =
    process.env.EMAIL_FROM ?? "Veltstack <noreply@veltstack.com>";
  const message = data.content.trim() || "—";

  const resend = getResend();

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `Yeni teklif talebi — ${data.name}`,
    html: `
      <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:560px;margin:0 auto;padding:24px;">
        <h1 style="margin:0 0 8px;font-size:20px;color:#0f172a;">Yeni teklif talebi</h1>
        <p style="margin:0 0 20px;color:#64748b;">İletişim formundan yeni bir kayıt geldi.</p>
        <table style="width:100%;border-collapse:collapse;">
          ${row("Ad Soyad", data.name)}
          ${row("E-posta", data.email)}
          ${row("Telefon", data.phone?.trim() || "—")}
          ${row("Hizmet", data.service)}
          ${row("Paket", data.servicePackage)}
          ${row("Kademe", data.serviceTier)}
          ${row("Bütçe", data.budget)}
          ${row("Mesaj", message)}
        </table>
      </div>
    `,
    text: [
      `Yeni teklif talebi — ${data.name}`,
      "",
      `Ad Soyad: ${data.name}`,
      `E-posta: ${data.email}`,
      `Telefon: ${data.phone?.trim() || "—"}`,
      `Hizmet: ${data.service}`,
      `Paket: ${data.servicePackage}`,
      `Kademe: ${data.serviceTier}`,
      `Bütçe: ${data.budget}`,
      `Mesaj: ${message}`,
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }
}
