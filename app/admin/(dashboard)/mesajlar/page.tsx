import { Inbox } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { AdminHeader } from "@/components/admin/layout/AdminHeader";
import { MessagesInbox } from "@/components/admin/messages/MessagesInbox";

export const metadata = {
  title: "Mesajlar",
};

export default async function AdminMessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  const inboxMessages = messages.map((message) => ({
    id: message.id,
    name: message.name,
    email: message.email,
    phone: message.phone,
    service: message.service,
    servicePackage: message.servicePackage,
    serviceTier: message.serviceTier,
    budget: message.budget,
    content: message.content,
    isRead: message.isRead,
    createdAt: message.createdAt.toISOString(),
  }));

  return (
    <div className="w-full">
      <AdminHeader />

      {messages.length === 0 ? (
        <div className="flex min-h-90 flex-col items-center justify-center rounded-2xl border border-dashed border-border/70 bg-white/80 px-6 text-center shadow-[0_8px_24px_rgb(58_107_82/0.04)]">
          <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent">
            <Inbox className="size-6" />
          </div>
          <p className="text-base font-semibold text-foreground">
            Henüz mesaj yok
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            İletişim formundan gelen talepler burada listelenir.
          </p>
        </div>
      ) : (
        <MessagesInbox messages={inboxMessages} />
      )}
    </div>
  );
}
