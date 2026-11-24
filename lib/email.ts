import { Resend } from "resend";
import { whatsAppHref } from "@/lib/business";
import { resolveContactLabels, type ContactLocale } from "@/lib/contact-labels";
import { getContactAutoReplyInlineAttachments } from "@/lib/email-contact-inline-assets";
import { EMAIL_ICON_WHATSAPP_PNG } from "@/lib/email-inline-icons";

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
  attachmentUrl?: string;
  attachmentName?: string;
  locale?: ContactLocale;
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
  return resolveContactLabels(data, data.locale ?? "tr");
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
                ${detailRow("Ad ve Soyad", escapeHtml(data.name))}
                ${detailRow(
                  "E-posta",
                  `<a href="mailto:${escapeHtml(data.email)}" style="color:#0f172a;text-decoration:underline;">${escapeHtml(data.email)}</a>`,
                )}
                ${detailRow(
                  "Telefon Numarası",
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
                ${
                  data.attachmentUrl
                    ? detailRow(
                        "Ek dosya",
                        `<a href="${escapeHtml(data.attachmentUrl)}" style="color:#0f172a;text-decoration:underline;">${escapeHtml(data.attachmentName ?? "Dosyayı indir")}</a>`,
                      )
                    : ""
                }
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
    `Ad ve Soyad: ${data.name}`,
    `E-posta: ${data.email}`,
    `Telefon Numarası: ${data.phone?.trim() || "—"}`,
    `Hizmet: ${labels.service}`,
    `Paket: ${labels.servicePackage}`,
    `Kademe: ${labels.serviceTier}`,
    `Bütçe: ${labels.budget}`,
    `Mesaj: ${message}`,
    data.attachmentUrl
      ? `Ek dosya: ${data.attachmentName ?? data.attachmentUrl}`
      : "",
  ]
    .filter(Boolean)
    .join("\n");
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

/* ────────────────────────────────────────────────────────────────────────────
 * Otomatik yanıt (müşteriye giden mail)
 *
 * Renk sistemi
 * - Açık tema: inline stillerde (hiçbir inline stilde !important YOK).
 * - Koyu tema: class bazlı override'lar. İki mekanizma birlikte çalışır:
 *     1) @media (prefers-color-scheme: dark) → Apple Mail, iOS Mail, Outlook Mac vb.
 *     2) [data-ogsb] / [data-ogsc]           → Yeni Outlook (Windows) ve Outlook.com
 * ──────────────────────────────────────────────────────────────────────────── */

const DARK_RULES: ReadonlyArray<readonly [string, string]> = [
  [".em-outer", "background-color:#0d1310"],
  [".em-card", "background-color:#151c18"],
  [".em-hero", "background-color:#1b2a22"],
  [".em-surface", "background-color:#1c2520"],
  [".em-panel", "background-color:#18251e"],
  [".em-chip", "background-color:#27392f"],
  [".em-cta", "background-color:#3A6B52"],
  [".em-wa", "background-color:#1faa59"],
  [".em-bd", "border-color:#2a3731"],
  [".em-strong", "color:#f3f6f4"],
  [".em-text", "color:#d5ddd8"],
  [".em-muted", "color:#9aa8a1"],
  [".em-accent", "color:#7fd0a8"],
  [".em-white", "color:#ffffff"],
];

function buildAutoReplyStyles() {
  const media = DARK_RULES.map(
    ([sel, decl]) => `${sel}{${decl} !important;}`,
  ).join("\n      ");
  const outlook = DARK_RULES.map(([sel, decl]) => {
    const attr = decl.startsWith("color") ? "ogsc" : "ogsb";
    return `[data-${attr}] ${sel}{${decl} !important;}`;
  }).join("\n    ");

  return `<style type="text/css">
    :root { color-scheme: light dark; supported-color-schemes: light dark; }
    body { margin:0 !important; padding:0 !important; }
    a { text-decoration:none; }
    @media (prefers-color-scheme: dark) {
      ${media}
    }
    ${outlook}
  </style>
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->`;
}

const AUTO_REPLY_COPY = {
  tr: {
    subject: "Talebinizi aldık — Veltstack",
    headline: "Teşekkürler, talebiniz kayıtlı",
    intro:
      "İletişim formunuz güvenle bize ulaştı. Aşağıda gönderdiğiniz bilgilerin bir özetini bulacaksınız; inceledikten sonra size özel bir dönüş paylaşacağız.",
    summaryTitle: "Gönderdiğiniz bilgiler",
    messageTitle: "Mesajınız",
    attachmentTitle: "Ek dosyanız",
    attachmentNote:
      "Dosyanızı teklif hazırlığında değerlendiriyoruz; indirme bağlantısı aşağıdadır.",
    attachmentOpen: "Görseli tam boyutta aç",
    attachmentDownload: "Dosyayı indir",
    receivedBadge: "Talep alındı",
    nextTitle: "Bundan sonra ne olacak?",
    nextBody:
      "Çoğu talebe 24 saat içinde e-posta veya WhatsApp ile dönüş veriyoruz. Acil bir konu varsa bu e-postayı yanıtlayabilirsiniz.",
    footer:
      "Bu e-posta veltstack.com iletişim formundan otomatik gönderilmiştir.",
    contactCta: "WhatsApp ile yazın",
    fields: {
      service: "Hizmet",
      package: "Paket",
      tier: "Kademe",
      budget: "Bütçe",
      phone: "Telefon",
    },
  },
  en: {
    subject: "We received your request — Veltstack",
    headline: "Thank you — you're on our list",
    intro:
      "Your contact form was delivered safely. Below is a summary of what you sent; we'll review it and follow up with a tailored reply.",
    summaryTitle: "What you submitted",
    messageTitle: "Your message",
    attachmentTitle: "Your attachment",
    attachmentNote:
      "We'll use your file while preparing the quote. Download link below.",
    attachmentOpen: "Open image full size",
    attachmentDownload: "Download file",
    receivedBadge: "Request received",
    nextTitle: "What happens next",
    nextBody:
      "We usually reply within 24 hours by email or WhatsApp. If something is urgent, you can reply to this message.",
    footer:
      "This email was sent automatically from the contact form at veltstack.com.",
    contactCta: "Message us on WhatsApp",
    fields: {
      service: "Service",
      package: "Package",
      tier: "Tier",
      budget: "Budget",
      phone: "Phone",
    },
  },
} as const;

function isContactImageAttachment(
  attachmentName?: string,
  attachmentUrl?: string,
) {
  const probe = `${attachmentName ?? ""} ${attachmentUrl ?? ""}`.toLowerCase();
  return /\.(png|jpe?g|webp|gif)(\?|#|$)/i.test(probe);
}

function getAttachmentFileLabel(name?: string) {
  const match = (name ?? "").match(/\.([a-z0-9]{2,8})$/i);
  return (match?.[1] ?? "FILE").toUpperCase();
}

type AutoReplyCopy = (typeof AUTO_REPLY_COPY)[ContactLocale];

const EMAIL_FONT = "Arial,Helvetica,sans-serif";

/** Tek tip buton: solda ikon/glif, sağda etiket. Arka plan rengi iki temada da sabit kalır. */
function buildEmailButton(opts: {
  href: string;
  label: string;
  bg: string;
  bgClass: "em-cta" | "em-wa";
  leading: string;
}) {
  return `<table role="presentation" cellpadding="0" cellspacing="0">
    <tr>
      <td bgcolor="${opts.bg}" class="${opts.bgClass}" style="border-radius:10px;background-color:${opts.bg};">
        <a href="${escapeHtml(opts.href)}" class="em-white" style="display:inline-block;padding:12px 20px 12px 16px;color:#ffffff;font-family:${EMAIL_FONT};font-size:14px;font-weight:700;line-height:20px;text-decoration:none;">
          ${opts.leading}<span class="em-white" style="vertical-align:middle;color:#ffffff;">${escapeHtml(opts.label)}</span>
        </a>
      </td>
    </tr>
  </table>`;
}

function buildDownloadEmailButton(href: string, label: string) {
  const glyph = `<span class="em-white" style="display:inline-block;vertical-align:middle;margin-right:10px;color:#ffffff;font-size:18px;line-height:20px;font-weight:700;">&#8595;</span>`;
  return buildEmailButton({
    href,
    label,
    bg: "#3A6B52",
    bgClass: "em-cta",
    leading: glyph,
  });
}

function buildWhatsAppEmailButton(href: string, label: string) {
  const icon = `<img src="${escapeHtml(EMAIL_ICON_WHATSAPP_PNG)}" width="22" height="22" alt="" style="display:inline-block;vertical-align:middle;border:0;margin-right:10px;" />`;
  return buildEmailButton({
    href,
    label,
    bg: "#1faa59",
    bgClass: "em-wa",
    leading: icon,
  });
}

function sectionLabel(text: string) {
  return `<p class="em-muted" style="margin:0 0 10px;font-family:${EMAIL_FONT};font-size:13px;line-height:1.4;color:#64748b;font-weight:700;">${escapeHtml(text)}</p>`;
}

function buildAutoReplyFieldCell(
  label: string,
  value: string,
  options?: { borderRight?: boolean; borderBottom?: boolean },
) {
  const borderRight = options?.borderRight
    ? "border-right:1px solid #e3eae6;"
    : "";
  const borderBottom = options?.borderBottom
    ? "border-bottom:1px solid #e3eae6;"
    : "";

  return `<td width="50%" valign="top" bgcolor="#f8faf9" class="em-surface em-bd" style="width:50%;padding:14px 18px;${borderRight}${borderBottom}background-color:#f8faf9;">
    <p class="em-muted" style="margin:0;font-family:${EMAIL_FONT};font-size:12px;line-height:1.4;color:#64748b;font-weight:600;">${escapeHtml(label)}</p>
    <p class="em-strong" style="margin:4px 0 0;font-family:${EMAIL_FONT};font-size:15px;line-height:1.45;color:#0b1220;font-weight:600;">${escapeHtml(value)}</p>
  </td>`;
}

function buildAutoReplySummarySection(
  labels: ReturnType<typeof resolveLabels>,
  copy: AutoReplyCopy,
  phone: string,
) {
  const phoneRow = phone
    ? `<tr>
        <td colspan="2" bgcolor="#f8faf9" class="em-surface" style="padding:14px 18px;background-color:#f8faf9;">
          <p class="em-muted" style="margin:0;font-family:${EMAIL_FONT};font-size:12px;line-height:1.4;color:#64748b;font-weight:600;">${escapeHtml(copy.fields.phone)}</p>
          <p class="em-strong" style="margin:4px 0 0;font-family:${EMAIL_FONT};font-size:15px;line-height:1.45;color:#0b1220;font-weight:600;">${escapeHtml(phone)}</p>
        </td>
      </tr>`
    : "";

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#f8faf9" class="em-surface em-bd" style="background-color:#f8faf9;border:1px solid #e3eae6;border-radius:14px;overflow:hidden;">
    <tr>
      ${buildAutoReplyFieldCell(copy.fields.service, labels.service, {
        borderRight: true,
        borderBottom: true,
      })}
      ${buildAutoReplyFieldCell(copy.fields.package, labels.servicePackage, {
        borderBottom: true,
      })}
    </tr>
    <tr>
      ${buildAutoReplyFieldCell(copy.fields.tier, labels.serviceTier, {
        borderRight: true,
        borderBottom: Boolean(phone),
      })}
      ${buildAutoReplyFieldCell(copy.fields.budget, labels.budget, {
        borderBottom: Boolean(phone),
      })}
    </tr>
    ${phoneRow}
  </table>`;
}

function buildAutoReplyMessageSection(message: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#f8faf9" class="em-surface em-bd" style="background-color:#f8faf9;border:1px solid #e3eae6;border-radius:14px;overflow:hidden;">
    <tr>
      <td bgcolor="#f8faf9" class="em-surface" style="padding:16px 18px;background-color:#f8faf9;">
        <p class="em-text" style="margin:0;font-family:${EMAIL_FONT};font-size:15px;line-height:1.7;color:#334155;white-space:pre-wrap;word-break:break-word;">${escapeHtml(message)}</p>
      </td>
    </tr>
  </table>`;
}

function buildAutoReplyAttachmentBlock(
  data: ContactEmailPayload,
  copy: AutoReplyCopy,
) {
  if (!data.attachmentUrl) return "";

  const safeUrl = escapeHtml(data.attachmentUrl);
  const safeName = escapeHtml(data.attachmentName ?? "attachment");
  const isImage = isContactImageAttachment(
    data.attachmentName,
    data.attachmentUrl,
  );
  const ctaLabel = isImage ? copy.attachmentOpen : copy.attachmentDownload;
  const fileLabel = getAttachmentFileLabel(data.attachmentName);

  const header = isImage
    ? `<tr>
        <td bgcolor="#f8faf9" class="em-surface" style="padding:0;background-color:#f8faf9;">
          <a href="${safeUrl}" style="display:block;text-decoration:none;line-height:0;">
            <img src="${safeUrl}" alt="${safeName}" width="528" style="display:block;width:100%;max-width:528px;height:auto;border:0;" />
          </a>
        </td>
      </tr>`
    : `<tr>
        <td bgcolor="#f8faf9" class="em-surface em-bd" style="padding:16px 18px;background-color:#f8faf9;border-bottom:1px solid #e3eae6;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td valign="middle" width="48" style="width:48px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="40" height="40" align="center" valign="middle" bgcolor="#e4f0e9" class="em-chip" style="width:40px;height:40px;border-radius:10px;background-color:#e4f0e9;">
                      <span class="em-accent" style="font-family:${EMAIL_FONT};font-size:11px;font-weight:800;color:#3A6B52;">${escapeHtml(fileLabel)}</span>
                    </td>
                  </tr>
                </table>
              </td>
              <td valign="middle" style="padding-left:12px;">
                <p class="em-strong" style="margin:0;font-family:${EMAIL_FONT};font-size:14px;line-height:1.4;font-weight:600;color:#0b1220;word-break:break-word;">${safeName}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#f8faf9" class="em-surface em-bd" style="background-color:#f8faf9;border:1px solid #e3eae6;border-radius:14px;overflow:hidden;">
    ${header}
    <tr>
      <td bgcolor="#f8faf9" class="em-surface" style="padding:16px 18px 18px;background-color:#f8faf9;">
        ${isImage ? `<p class="em-strong" style="margin:0 0 6px;font-family:${EMAIL_FONT};font-size:14px;font-weight:600;color:#0b1220;word-break:break-word;">${safeName}</p>` : ""}
        <p class="em-muted" style="margin:0;font-family:${EMAIL_FONT};font-size:13px;line-height:1.6;color:#64748b;">${escapeHtml(copy.attachmentNote)}</p>
        <div style="margin-top:14px;">
          ${buildDownloadEmailButton(data.attachmentUrl, ctaLabel)}
        </div>
      </td>
    </tr>
  </table>`;
}

function buildContactAutoReplyHtml(
  data: ContactEmailPayload,
  labels: ReturnType<typeof resolveLabels>,
) {
  const locale = data.locale === "en" ? "en" : "tr";
  const copy = AUTO_REPLY_COPY[locale];
  const siteUrl = getPublicSiteUrl();
  const phone = data.phone?.trim() || "";
  const message = data.content.trim() || "—";
  const preheader = `${labels.service} · ${labels.budget} · ${copy.receivedBadge}`;
  const contactEmail = escapeHtml(getContactEmail());
  const whatsappUrl = whatsAppHref();
  const logoUrl = `${escapeHtml(siteUrl)}/images/favicons/favicon-512.png`;
  const sectionPad = `padding:0 36px 24px;font-family:${EMAIL_FONT};`;

  const attachmentSection = data.attachmentUrl
    ? `<tr>
        <td bgcolor="#ffffff" class="em-card" style="${sectionPad}background-color:#ffffff;">
          ${sectionLabel(copy.attachmentTitle)}
          ${buildAutoReplyAttachmentBlock(data, copy)}
        </td>
      </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>${escapeHtml(copy.subject)}</title>
  ${buildAutoReplyStyles()}
</head>
<body class="em-outer" style="margin:0;padding:0;background-color:#eef2f6;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">
    ${escapeHtml(preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#eef2f6" class="em-outer" style="background-color:#eef2f6;padding:32px 16px 36px;">
    <tr>
      <td align="center" bgcolor="#eef2f6" class="em-outer" style="background-color:#eef2f6;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#ffffff" class="em-card em-bd" style="max-width:600px;background-color:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e2e8f0;">

          <!-- Üst şerit -->
          <tr>
            <td bgcolor="#3A6B52" class="em-cta" style="height:4px;background-color:#3A6B52;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Hero -->
          <tr>
            <td bgcolor="#eef6f1" class="em-hero" style="padding:30px 36px 28px;background-color:#eef6f1;font-family:${EMAIL_FONT};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="middle">
                    <p class="em-accent" style="margin:0;font-size:14px;line-height:1.4;color:#3A6B52;font-weight:700;">Veltstack</p>
                    <h1 class="em-strong" style="margin:8px 0 0;font-size:26px;line-height:1.25;color:#0b1220;font-weight:700;">${escapeHtml(copy.headline)}</h1>
                  </td>
                  <td align="right" valign="middle" width="56">
                    <img src="${logoUrl}" width="48" height="48" alt="Veltstack" style="display:block;width:48px;height:48px;border:0;" />
                  </td>
                </tr>
              </table>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:18px;">
                <tr>
                  <td bgcolor="#3A6B52" class="em-cta" style="border-radius:999px;background-color:#3A6B52;padding:6px 14px;">
                    <span class="em-white" style="font-size:13px;font-weight:700;color:#ffffff;">&#10003;&nbsp; ${escapeHtml(copy.receivedBadge)}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Karşılama -->
          <tr>
            <td bgcolor="#ffffff" class="em-card" style="padding:28px 36px 24px;background-color:#ffffff;font-family:${EMAIL_FONT};">
              <p class="em-text" style="margin:0;font-size:16px;line-height:1.6;color:#334155;">
                ${locale === "en" ? "Hello" : "Merhaba"} <strong class="em-strong" style="color:#0b1220;font-weight:700;">${escapeHtml(data.name)}</strong>,
              </p>
              <p class="em-text" style="margin:10px 0 0;font-size:15px;line-height:1.7;color:#334155;">${escapeHtml(copy.intro)}</p>
            </td>
          </tr>

          <!-- Özet -->
          <tr>
            <td bgcolor="#ffffff" class="em-card" style="${sectionPad}background-color:#ffffff;">
              ${sectionLabel(copy.summaryTitle)}
              ${buildAutoReplySummarySection(labels, copy, phone)}
            </td>
          </tr>

          <!-- Mesaj -->
          <tr>
            <td bgcolor="#ffffff" class="em-card" style="${sectionPad}background-color:#ffffff;">
              ${sectionLabel(copy.messageTitle)}
              ${buildAutoReplyMessageSection(message)}
            </td>
          </tr>

          ${attachmentSection}

          <!-- Sonraki adımlar -->
          <tr>
            <td bgcolor="#ffffff" class="em-card" style="padding:0 36px 24px;background-color:#ffffff;font-family:${EMAIL_FONT};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#f0f6f2" class="em-panel em-bd" style="background-color:#f0f6f2;border:1px solid #dce8e0;border-radius:16px;overflow:hidden;">
                <tr>
                  <td width="4" bgcolor="#3A6B52" class="em-cta" style="width:4px;background-color:#3A6B52;font-size:0;line-height:0;">&nbsp;</td>
                  <td bgcolor="#f0f6f2" class="em-panel" style="padding:22px 24px 24px;background-color:#f0f6f2;">
                    <p class="em-strong" style="margin:0;font-family:${EMAIL_FONT};font-size:17px;line-height:1.35;color:#0b1220;font-weight:700;">${escapeHtml(copy.nextTitle)}</p>
                    <p class="em-text" style="margin:10px 0 18px;font-family:${EMAIL_FONT};font-size:15px;line-height:1.7;color:#334155;">${escapeHtml(copy.nextBody)}</p>
                    ${buildWhatsAppEmailButton(whatsappUrl, copy.contactCta)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- İmza + alt bilgi -->
          <tr>
            <td bgcolor="#ffffff" class="em-card" style="padding:0 36px 32px;background-color:#ffffff;font-family:${EMAIL_FONT};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="em-bd" style="padding-top:22px;border-top:1px solid #e8edf2;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" width="58" style="width:58px;padding-right:14px;">
                          <img src="${logoUrl}" width="44" height="44" alt="Veltstack" style="display:block;width:44px;height:44px;border:0;" />
                        </td>
                        <td valign="top">
                          <p class="em-strong" style="margin:0;font-size:16px;line-height:1.4;color:#0b1220;font-weight:700;">Ömer Halis Demir</p>
                          <p class="em-muted" style="margin:3px 0 0;font-size:13px;line-height:1.5;color:#64748b;">Full Stack Developer · Veltstack</p>
                          <p style="margin:10px 0 0;font-size:13px;line-height:1.8;">
                            <a href="${escapeHtml(siteUrl)}" class="em-accent" style="color:#3A6B52;text-decoration:none;font-weight:600;">veltstack.com</a><br />
                            <a href="mailto:${contactEmail}" class="em-accent" style="color:#3A6B52;text-decoration:none;font-weight:600;">${contactEmail}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <p class="em-muted" style="margin:24px 0 0;font-size:12px;line-height:1.6;color:#94a3b8;">${escapeHtml(copy.footer)}</p>
            </td>
          </tr>
        </table>
        <p class="em-muted" style="margin:18px 0 0;font-size:12px;line-height:1.5;color:#94a3b8;font-family:${EMAIL_FONT};">
          © ${new Date().getFullYear()} Veltstack
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildContactAutoReplyText(
  data: ContactEmailPayload,
  labels: ReturnType<typeof resolveLabels>,
) {
  const locale = data.locale === "en" ? "en" : "tr";
  const copy = AUTO_REPLY_COPY[locale];
  const message = data.content.trim() || "—";

  return [
    locale === "en" ? `Hello ${data.name},` : `Merhaba ${data.name},`,
    "",
    copy.intro,
    "",
    `${copy.fields.service}: ${labels.service}`,
    `${copy.fields.package}: ${labels.servicePackage}`,
    `${copy.fields.tier}: ${labels.serviceTier}`,
    `${copy.fields.budget}: ${labels.budget}`,
    data.phone?.trim() ? `${copy.fields.phone}: ${data.phone.trim()}` : "",
    "",
    `${copy.messageTitle}: ${message}`,
    data.attachmentName
      ? `${copy.attachmentTitle}: ${data.attachmentName}${data.attachmentUrl ? ` (${data.attachmentUrl})` : ""}`
      : "",
    "",
    copy.nextBody,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function sendContactAutoReply(data: ContactEmailPayload) {
  const labels = resolveLabels(data);
  const locale = data.locale === "en" ? "en" : "tr";
  const copy = AUTO_REPLY_COPY[locale];
  const resend = getResend();
  const contactEmail = getContactEmail();

  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: data.email,
    replyTo: contactEmail,
    subject: copy.subject,
    headers: {
      "X-Entity-Ref-ID": data.messageId ?? crypto.randomUUID(),
    },
    tags: [{ name: "category", value: "contact_auto_reply" }],
    html: buildContactAutoReplyHtml(data, labels),
    text: buildContactAutoReplyText(data, labels),
    ...(data.attachmentUrl
      ? { attachments: getContactAutoReplyInlineAttachments() }
      : {}),
  });

  if (error) {
    throw new Error(error.message);
  }
}

/* ────────────────────────────────────────────────────────────────────────────
 * Admin yanıtı (panelden müşteriye giden mail)
 * ──────────────────────────────────────────────────────────────────────────── */

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
