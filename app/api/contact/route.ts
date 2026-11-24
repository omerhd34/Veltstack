import { NextResponse } from "next/server";
import { z } from "zod";
import { validateContactAttachment } from "@/lib/contact-attachment-policy";
import { sendContactAutoReply, sendContactNotification } from "@/lib/email";
import prisma from "@/lib/prisma";
import { uploadContactAttachment } from "@/lib/upload-contact-attachment";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().min(1),
  servicePackage: z.string().min(1),
  serviceTier: z.string().min(1),
  budget: z.string().min(1),
  content: z.string().max(2000).default(""),
  locale: z.enum(["tr", "en"]).default("tr"),
});

function attachmentErrorResponse(
  code: "size" | "type" | "blob_not_configured",
) {
  const status = code === "blob_not_configured" ? 503 : 400;
  return NextResponse.json({ error: "attachment", code }, { status });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const raw = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: (() => {
        const phone = String(formData.get("phone") ?? "").trim();
        return phone || undefined;
      })(),
      service: String(formData.get("service") ?? ""),
      servicePackage: String(formData.get("servicePackage") ?? ""),
      serviceTier: String(formData.get("serviceTier") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      content: String(formData.get("content") ?? ""),
      locale: String(formData.get("locale") ?? "tr"),
    };

    const data = contactSchema.parse(raw);

    const attachmentEntry = formData.get("attachment");
    const attachmentFile =
      attachmentEntry instanceof File && attachmentEntry.size > 0
        ? attachmentEntry
        : null;

    if (attachmentFile) {
      const validation = validateContactAttachment(attachmentFile);
      if (validation !== "ok") {
        return attachmentErrorResponse(validation);
      }
      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        return attachmentErrorResponse("blob_not_configured");
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { locale, ...messageData } = data;

    const message = await prisma.message.create({
      data: {
        ...messageData,
        subject: `İletişim formu - ${data.name}`,
      },
    });

    let attachmentUrl: string | undefined;
    let attachmentName: string | undefined;

    if (attachmentFile) {
      try {
        const uploaded = await uploadContactAttachment(
          attachmentFile,
          message.id,
        );
        attachmentUrl = uploaded.url;
        attachmentName = uploaded.name;

        await prisma.message.update({
          where: { id: message.id },
          data: {
            attachmentUrl: uploaded.url,
            attachmentName: uploaded.name,
            attachmentSize: uploaded.size,
          },
        });
      } catch (uploadError) {
        const code =
          uploadError instanceof Error &&
          (uploadError as Error & { code?: string }).code;
        if (code === "size" || code === "type") {
          return attachmentErrorResponse(code);
        }
        if (
          uploadError instanceof Error &&
          uploadError.message === "blob_not_configured"
        ) {
          return attachmentErrorResponse("blob_not_configured");
        }
        throw uploadError;
      }
    }

    const emailPayload = {
      ...data,
      messageId: message.id,
      attachmentUrl,
      attachmentName,
    };

    try {
      await sendContactNotification(emailPayload);
    } catch (emailError) {
      console.error("[contact] admin notification failed:", emailError);
    }

    try {
      await sendContactAutoReply(emailPayload);
    } catch (emailError) {
      console.error("[contact] auto reply failed:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
