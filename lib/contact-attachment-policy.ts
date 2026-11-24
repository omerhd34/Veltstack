export const CONTACT_ATTACHMENT_MAX_BYTES = 10 * 1024 * 1024;

export const CONTACT_ATTACHMENT_MAX_MB = 10;

const ALLOWED_MIME = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/zip",
  "application/x-zip-compressed",
]);

const ALLOWED_EXT = /\.(pdf|png|jpe?g|webp|doc|docx|zip)$/i;

export type ContactAttachmentValidation = "ok" | "size" | "type";

export function validateContactAttachment(file: {
  size: number;
  name: string;
  type: string;
}): ContactAttachmentValidation {
  if (file.size > CONTACT_ATTACHMENT_MAX_BYTES) return "size";
  if (file.size === 0) return "type";
  if (ALLOWED_MIME.has(file.type)) return "ok";
  if (ALLOWED_EXT.test(file.name)) return "ok";
  return "type";
}

export const CONTACT_ATTACHMENT_ACCEPT =
  ".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,.zip";
