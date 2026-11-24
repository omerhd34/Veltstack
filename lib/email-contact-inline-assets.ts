import { readFileSync } from "fs";
import { join } from "path";

export const EMAIL_CID_DOWNLOAD_ICON = "veltstack-download-icon";

export function contactAutoReplyDownloadIconSrc() {
  return `cid:${EMAIL_CID_DOWNLOAD_ICON}`;
}

export function getContactAutoReplyInlineAttachments() {
  const content = readFileSync(
    join(process.cwd(), "public/images/email/download.jpg"),
  );

  return [
    {
      filename: "download.jpg",
      content,
      contentId: EMAIL_CID_DOWNLOAD_ICON,
    },
  ];
}
