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

function getPublicSiteUrl() {
  const raw = (process.env.NEXTAUTH_URL ?? "https://www.veltstack.com").replace(
    /\/$/,
    "",
  );
  if (/localhost|127\.0\.0\.1/i.test(raw)) {
    return "https://www.veltstack.com";
  }
  return raw;
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
  const siteUrl = getPublicSiteUrl();
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

const RESEND_FROM = "noreply@veltstack.com";

function getContactEmail() {
  return process.env.CONTACT_EMAIL ?? "veltstack@outlook.com";
}

export async function sendContactNotification(data: ContactEmailPayload) {
  const contactEmail = getContactEmail();
  const labels = resolveLabels(data);
  const resend = getResend();

  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: contactEmail,
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

type AdminReplyPayload = {
  to: string;
  toName: string;
  subject: string;
  body: string;
  messageId?: string;
};

function buildAdminReplyHtml(data: AdminReplyPayload) {
  const body = data.body.trim();
  const siteUrl = getPublicSiteUrl();
  const firstLine =
    body
      .split(/\r?\n/)
      .find((line) => line.trim().length > 0)
      ?.trim() ?? "Veltstack'ten yanıt";
  const preheader =
    firstLine.length > 90 ? `${firstLine.slice(0, 87)}…` : firstLine;

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light only" />
  <meta name="supported-color-schemes" content="light only" />
  <title>${escapeHtml(data.subject)}</title>
</head>
<body style="margin:0;padding:0;background:#eef2f6;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">
    ${escapeHtml(preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f6;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 12px 40px rgba(15,23,42,0.06);">
          <tr>
            <td style="height:4px;background:#3A6B52;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:32px 36px 24px;font-family:Arial,Helvetica,sans-serif;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="middle">
                    <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#3A6B52;font-weight:700;">Veltstack</p>
                    <h1 style="margin:8px 0 0;font-size:24px;line-height:1.25;color:#0b1220;font-weight:700;">Mesajınıza yanıt</h1>
                  </td>
                  <td align="right" valign="middle" width="56">
                    <img
                      src="${escapeHtml(siteUrl)}/images/favicons/favicon-512.png"
                      width="48"
                      height="48"
                      alt="Veltstack"
                      style="display:block;width:48px;height:48px;border:0;border-radius:14px;outline:none;"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 36px 8px;font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0;font-size:15px;line-height:1.6;color:#334155;">
                Merhaba <strong style="color:#0b1220;font-weight:600;">${escapeHtml(data.toName)}</strong>,
              </p>
              <p style="margin:8px 0 0;font-size:14px;line-height:1.55;color:#64748b;">
                Talebinize ilişkin yanıtımız aşağıdadır.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 36px 8px;font-family:Arial,Helvetica,sans-serif;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8faf9;border:1px solid #e5ebe8;border-radius:14px;">
                <tr>
                  <td style="padding:22px 24px;">
                    <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;font-weight:700;">Yanıt</p>
                    <div style="font-size:15px;line-height:1.75;color:#0f172a;white-space:pre-wrap;word-break:break-word;">${escapeHtml(body)}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 36px 36px;font-family:Arial,Helvetica,sans-serif;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-top:22px;border-top:1px solid #e8edf2;">
                    <p style="margin:0;font-size:15px;line-height:1.5;color:#0b1220;font-weight:600;">Ömer Halis Demir</p>
                    <p style="margin:4px 0 0;font-size:13px;line-height:1.5;color:#64748b;">Full Stack Developer · Veltstack</p>
                    <p style="margin:8px 0 0;font-size:13px;line-height:1.5;">
                      <a href="${escapeHtml(siteUrl)}" style="color:#3A6B52;text-decoration:none;font-weight:600;">veltstack.com</a>
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin:24px 0 0;font-size:12px;line-height:1.6;color:#94a3b8;">
                Bu e-posta Veltstack tarafından gönderildi. Doğrudan yanıtlayarak bize ulaşabilirsiniz.
              </p>
            </td>
          </tr>
        </table>
        <p style="margin:20px 0 0;font-size:11px;line-height:1.5;color:#94a3b8;font-family:Arial,Helvetica,sans-serif;">
          © ${new Date().getFullYear()} Veltstack
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildAdminReplyText(data: AdminReplyPayload) {
  const siteUrl = getPublicSiteUrl();

  return [
    `Merhaba ${data.toName},`,
    "",
    "Talebinize ilişkin yanıtımız aşağıdadır.",
    "",
    data.body.trim(),
    "",
    "—",
    "Ömer Halis Demir",
    "Full Stack Developer · Veltstack",
    siteUrl,
  ].join("\n");
}

export async function sendAdminReply(data: AdminReplyPayload) {
  const contactEmail = getContactEmail();
  const resend = getResend();

  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: data.to,
    replyTo: contactEmail,
    subject: data.subject,
    headers: {
      "X-Entity-Ref-ID": data.messageId ?? crypto.randomUUID(),
    },
    tags: [{ name: "category", value: "admin_reply" }],
    html: buildAdminReplyHtml(data),
    text: buildAdminReplyText(data),
  });

  if (error) {
    throw new Error(error.message);
  }
}
