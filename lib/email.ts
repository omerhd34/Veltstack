import { Resend } from "resend";
import { resolveContactLabels } from "@/lib/contact-labels";

type ContactEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  servicePackage: string;
  serviceTier: string;
  budget: string;
  content: string;
  messageId?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function resolveLabels(data: ContactEmailPayload) {
  return resolveContactLabels(data);
}

function detailRow(label: string, valueHtml: string) {
  return `<tr>
  <td style="padding:14px 0;border-bottom:1px solid #e8eaef;width:34%;vertical-align:top;">
    <span style="font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#64748b;font-weight:600;">${escapeHtml(label)}</span>
  </td>
  <td style="padding:14px 0;border-bottom:1px solid #e8eaef;vertical-align:top;font-size:15px;line-height:1.5;color:#0f172a;">
    ${valueHtml}
  </td>
</tr>`;
}

function buildContactEmailHtml(
  data: ContactEmailPayload,
  labels: ReturnType<typeof resolveLabels>,
) {
  const siteUrl = (
    process.env.NEXTAUTH_URL ?? "https://www.veltstack.com"
  ).replace(/\/$/, "");
  const adminUrl = `${siteUrl}/admin/mesajlar`;
  const phone = data.phone?.trim() || "";
  const message = data.content.trim() || "—";
  const preheader = `${labels.service} · ${labels.budget} · ${data.name}`;

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Yeni teklif talebi</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">
    ${escapeHtml(preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
          <tr>
            <td style="background:#0b1220;padding:28px 32px;">
              <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#94a3b8;font-family:Arial,Helvetica,sans-serif;">Veltstack</p>
              <h1 style="margin:0;font-size:22px;line-height:1.3;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-weight:700;">Yeni teklif talebi</h1>
              <p style="margin:10px 0 0;font-size:14px;line-height:1.5;color:#94a3b8;font-family:Arial,Helvetica,sans-serif;">İletişim formundan yeni bir kayıt geldi.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 0;font-family:Arial,Helvetica,sans-serif;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
                <tr>
                  <td style="padding:16px 18px;">
                    <p style="margin:0 0 4px;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#64748b;font-weight:600;">İstek özeti</p>
                    <p style="margin:0;font-size:15px;line-height:1.5;color:#0f172a;">
                      <strong>${escapeHtml(labels.service)}</strong>
                      · ${escapeHtml(labels.servicePackage)}
                      · ${escapeHtml(labels.serviceTier)}
                    </p>
                    <p style="margin:6px 0 0;font-size:14px;color:#475569;">Bütçe: ${escapeHtml(labels.budget)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 28px;font-family:Arial,Helvetica,sans-serif;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;">
                ${detailRow("Ad Soyad", escapeHtml(data.name))}
                ${detailRow(
                  "E-posta",
                  `<a href="mailto:${escapeHtml(data.email)}" style="color:#0f172a;text-decoration:underline;">${escapeHtml(data.email)}</a>`,
                )}
                ${detailRow(
                  "Telefon",
                  phone
                    ? `<a href="tel:${escapeHtml(phone.replace(/\s+/g, ""))}" style="color:#0f172a;text-decoration:underline;">${escapeHtml(phone)}</a>`
                    : "—",
                )}
                ${detailRow("Hizmet", escapeHtml(labels.service))}
                ${detailRow("Paket", escapeHtml(labels.servicePackage))}
                ${detailRow("Kademe", escapeHtml(labels.serviceTier))}
                ${detailRow("Bütçe", escapeHtml(labels.budget))}
                ${detailRow(
                  "Mesaj",
                  `<div style="white-space:pre-wrap;word-break:break-word;">${escapeHtml(message)}</div>`,
                )}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px;font-family:Arial,Helvetica,sans-serif;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:10px;background:#0b1220;">
                    <a href="mailto:${escapeHtml(data.email)}?subject=${encodeURIComponent(`Re: Teklif talebi — ${data.name}`)}" style="display:inline-block;padding:12px 18px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;">Yanıtla</a>
                  </td>
                  <td width="10"></td>
                  <td style="border-radius:10px;background:#e2e8f0;">
                    <a href="${escapeHtml(adminUrl)}" style="display:inline-block;padding:12px 18px;font-size:14px;font-weight:600;color:#0f172a;text-decoration:none;">Admin paneli</a>
                  </td>
                </tr>
              </table>
              <p style="margin:18px 0 0;font-size:12px;line-height:1.5;color:#94a3b8;">Bu bildirim veltstack.com iletişim formundan otomatik gönderildi. Reply-To müşteri adresine ayarlıdır.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildContactEmailText(
  data: ContactEmailPayload,
  labels: ReturnType<typeof resolveLabels>,
) {
  const message = data.content.trim() || "—";
  return [
    `Yeni teklif talebi — ${data.name}`,
    "",
    `Ad Soyad: ${data.name}`,
    `E-posta: ${data.email}`,
    `Telefon: ${data.phone?.trim() || "—"}`,
    `Hizmet: ${labels.service}`,
    `Paket: ${labels.servicePackage}`,
    `Kademe: ${labels.serviceTier}`,
    `Bütçe: ${labels.budget}`,
    `Mesaj: ${message}`,
  ].join("\n");
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
    process.env.EMAIL_FROM ?? "Veltstack <hello@veltstack.com>";
  const labels = resolveLabels(data);
  const resend = getResend();

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `[Veltstack] Yeni teklif — ${data.name} · ${labels.service}`,
    headers: {
      "X-Entity-Ref-ID": data.messageId ?? crypto.randomUUID(),
    },
    tags: [
      { name: "category", value: "contact_form" },
      { name: "service", value: data.service.slice(0, 50) },
    ],
    html: buildContactEmailHtml(data, labels),
    text: buildContactEmailText(data, labels),
  });

  if (error) {
    throw new Error(error.message);
  }
}
