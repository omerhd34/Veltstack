import "server-only";

import { put } from "@vercel/blob";
import {
  validateContactAttachment,
  type ContactAttachmentValidation,
} from "@/lib/contact-attachment-policy";

function sanitizeFileName(name: string) {
  return name.replace(/[^\w.\-()+ ]/g, "_").slice(0, 120) || "dosya";
}

export async function uploadContactAttachment(file: File, messageId: string) {
  const validation = validateContactAttachment(file);
  if (validation !== "ok") {
    const err = new Error(validation) as Error & {
      code: ContactAttachmentValidation;
    };
    err.code = validation;
    throw err;
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("blob_not_configured");
  }

  const safeName = sanitizeFileName(file.name);
  const blob = await put(`contact/${messageId}/${safeName}`, file, {
    access: "public",
    addRandomSuffix: true,
  });

  return {
    url: blob.url,
    name: file.name,
    size: file.size,
  };
}
