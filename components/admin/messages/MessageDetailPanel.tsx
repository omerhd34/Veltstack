"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Check, Loader2, Mail, Phone, Send, Trash2, X } from "lucide-react";
import { resolveContactLabels } from "@/lib/contact-labels";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/shadcn/button";
import type { AdminMessageItem } from "./types";
import { formatDetailDate, getInitials } from "./utils";

interface MessageDetailPanelProps {
  message: AdminMessageItem;
  marking: boolean;
  deleting: boolean;
  onClose: () => void;
  onDelete: (id: string) => void;
}

export function MessageDetailPanel({
  message,
  marking,
  deleting,
  onClose,
  onDelete,
}: MessageDetailPanelProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [replyOpen, setReplyOpen] = useState(false);
  const [subject, setSubject] = useState(
    `Re: Teklif talebi — VeltStack — ${message.name}`,
  );
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const labels = resolveContactLabels({
    service: message.service ?? "",
    servicePackage: message.servicePackage ?? "",
    serviceTier: message.serviceTier ?? "",
    budget: message.budget ?? "",
  });

  const details = [
    { label: "HİZMET", value: labels.service },
    { label: "PAKET", value: labels.servicePackage },
    { label: "KADEME", value: labels.serviceTier },
    { label: "BÜTÇE", value: labels.budget },
  ].filter((item) => item.value);

  useEffect(() => {
    setSubject(`Re: Teklif talebi — VeltStack — ${message.name}`);
    setBody("");
    setSendError(null);
    setSent(false);
    setReplyOpen(false);
  }, [message.id, message.name]);

  useEffect(() => {
    if (!confirmOpen && !replyOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.stopPropagation();
        if (confirmOpen) setConfirmOpen(false);
        else if (replyOpen && !sending) setReplyOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, [confirmOpen, replyOpen, sending]);

  async function handleSendReply(event: FormEvent) {
    event.preventDefault();
    if (sending || sent) return;

    const trimmedSubject = subject.trim();
    const trimmedBody = body.trim();
    if (!trimmedSubject || !trimmedBody) {
      setSendError("Konu ve mesaj zorunludur.");
      return;
    }

    setSending(true);
    setSendError(null);

    try {
      const res = await fetch(`/api/admin/messages/${message.id}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: trimmedSubject,
          body: trimmedBody,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : "E-posta gönderilemedi",
        );
      }

      setSent(true);
      setTimeout(() => {
        setReplyOpen(false);
        setBody("");
        setSent(false);
      }, 1400);
    } catch (err) {
      setSendError(
        err instanceof Error ? err.message : "E-posta gönderilemedi",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Kapat"
        className="absolute inset-0 bg-black/35 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="message-detail-title"
        className="relative flex h-full w-full max-w-2xl flex-col border-l border-border/60 bg-white shadow-2xl motion-safe:animate-in motion-safe:slide-in-from-right motion-safe:duration-300"
      >
        <div className="relative overflow-hidden border-b border-border/60">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-accent/8 via-transparent to-transparent"
          />
          <div className="relative flex items-start justify-between gap-4 px-5 py-5 sm:px-6">
            <div className="flex min-w-0 items-start gap-3.5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-accent text-sm font-semibold tracking-wide text-white shadow-sm shadow-brand-accent/25">
                {getInitials(message.name)}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-brand-accent">
                    MESAJ DETAYI
                  </p>
                  {marking ? (
                    <span className="text-[10px] text-muted-foreground">
                      kaydediliyor…
                    </span>
                  ) : null}
                </div>
                <h2
                  id="message-detail-title"
                  className="mt-1 truncate text-xl font-semibold tracking-tight text-foreground"
                >
                  {message.name}
                </h2>
                <time
                  dateTime={message.createdAt}
                  className="mt-1 block text-xs text-muted-foreground"
                >
                  {formatDetailDate(message.createdAt)}
                </time>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              className="shrink-0 rounded-xl border-border/70"
              onClick={onClose}
              aria-label="Kapat"
            >
              <X className="size-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 space-y-5 overflow-x-hidden overflow-y-auto px-5 py-5 sm:px-6">
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="inline-flex min-w-0 items-center gap-2.5 rounded-xl border border-border/60 bg-[#F8FAF9] px-3.5 py-2.5 text-sm text-foreground">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-muted-foreground shadow-sm">
                <Mail className="size-3.5" />
              </span>
              <span className="truncate">{message.email}</span>
            </div>
            {message.phone ? (
              <a
                href={`tel:${message.phone}`}
                className="inline-flex items-center gap-2.5 rounded-xl border border-border/60 bg-[#F8FAF9] px-3.5 py-2.5 text-sm text-foreground transition hover:border-brand-accent/30 hover:bg-brand-accent/4 hover:text-brand-accent"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-muted-foreground shadow-sm">
                  <Phone className="size-3.5" />
                </span>
                {message.phone}
              </a>
            ) : null}
          </div>

          {details.length > 0 ? (
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-2">
              {details.map((item) => (
                <div key={item.label} className="bg-[#F8FAF9] px-4 py-3.5">
                  <dt className="text-[10px] font-semibold tracking-widest text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="rounded-2xl border border-border/60 bg-white p-4 sm:p-5">
            <p className="text-[10px] font-semibold tracking-widest text-muted-foreground">
              MESAJ
            </p>
            <p className="mt-3 wrap-break-word whitespace-pre-wrap break-all text-[15px] leading-7 text-foreground/90">
              {message.content?.trim() || "—"}
            </p>
          </div>
        </div>

        <div className="border-t border-border/60 bg-[#F8FAF9]/80 px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <Button
              type="button"
              className="h-11 flex-1 rounded-xl bg-brand-accent text-sm font-semibold shadow-sm shadow-brand-accent/20 hover:bg-brand-accent/90"
              onClick={() => {
                setSendError(null);
                setSent(false);
                setReplyOpen(true);
              }}
            >
              <Mail className="size-4" />
              E-posta ile yanıtla
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={deleting}
              className="h-11 rounded-xl border-red-200 text-sm font-semibold text-red-600 hover:bg-red-50 hover:text-red-700 sm:px-5"
              onClick={() => setConfirmOpen(true)}
            >
              <Trash2 className="size-4" />
              {deleting ? "Siliniyor…" : "Sil"}
            </Button>
          </div>
        </div>
      </aside>

      {replyOpen ? (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="İptal"
            disabled={sending}
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            onClick={() => {
              if (!sending) setReplyOpen(false);
            }}
          />
          <form
            role="dialog"
            aria-modal="true"
            aria-labelledby="reply-message-title"
            onSubmit={handleSendReply}
            className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_24px_64px_rgb(0_0_0/0.18)] motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-200"
          >
            <div className="flex items-start justify-between gap-3 border-b border-border/60 px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-[0.16em] text-brand-accent">
                  YANIT YAZ
                </p>
                <h3
                  id="reply-message-title"
                  className="mt-1 truncate text-lg font-semibold tracking-tight text-foreground"
                >
                  {message.name}
                </h3>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {message.email}
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                disabled={sending}
                className="shrink-0 rounded-xl border-border/70"
                onClick={() => setReplyOpen(false)}
                aria-label="Kapat"
              >
                <X className="size-4" />
              </Button>
            </div>

            <div className="space-y-4 px-5 py-5 sm:px-6">
              <div className="space-y-1.5">
                <label
                  htmlFor="reply-subject"
                  className="text-[10px] font-semibold tracking-widest text-muted-foreground"
                >
                  KONU
                </label>
                <input
                  id="reply-subject"
                  type="text"
                  required
                  maxLength={200}
                  value={subject}
                  disabled={sending || sent}
                  onChange={(e) => setSubject(e.target.value)}
                  className={cn(
                    "h-11 w-full rounded-xl border border-border/70 bg-[#F8FAF9] px-3.5 text-sm outline-none transition",
                    "placeholder:text-muted-foreground/70",
                    "focus:border-brand-accent focus:bg-white focus:ring-3 focus:ring-brand-accent/20",
                    "disabled:opacity-60",
                  )}
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="reply-body"
                  className="text-[10px] font-semibold tracking-widest text-muted-foreground"
                >
                  MESAJ
                </label>
                <textarea
                  id="reply-body"
                  required
                  rows={8}
                  maxLength={5000}
                  value={body}
                  disabled={sending || sent}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Yanıtınızı yazın…"
                  className={cn(
                    "w-full resize-none rounded-xl border border-border/70 bg-[#F8FAF9] px-3.5 py-3 text-sm leading-relaxed outline-none transition",
                    "placeholder:text-muted-foreground/70",
                    "focus:border-brand-accent focus:bg-white focus:ring-3 focus:ring-brand-accent/20",
                    "disabled:opacity-60",
                  )}
                />
              </div>

              {sendError ? (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700"
                >
                  {sendError}
                </p>
              ) : null}

              {sent ? (
                <p
                  role="status"
                  className="flex items-center gap-2 rounded-xl border border-brand-accent/20 bg-brand-accent/8 px-3.5 py-2.5 text-sm font-medium text-brand-accent"
                >
                  <Check className="size-4" />
                  E-posta gönderildi
                </p>
              ) : null}
            </div>

            <div className="flex flex-col-reverse gap-2.5 border-t border-border/60 bg-[#F8FAF9]/80 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
              <Button
                type="button"
                variant="outline"
                disabled={sending}
                className="h-11 rounded-xl border-border/70 sm:px-5"
                onClick={() => setReplyOpen(false)}
              >
                İptal
              </Button>
              <Button
                type="submit"
                disabled={sending || sent || !body.trim() || !subject.trim()}
                className="h-11 rounded-xl bg-brand-accent text-sm font-semibold shadow-sm shadow-brand-accent/20 hover:bg-brand-accent/90 sm:min-w-40"
              >
                {sending ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                {sending ? "Gönderiliyor…" : "Gönder"}
              </Button>
            </div>
          </form>
        </div>
      ) : null}

      {confirmOpen ? (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="İptal"
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            onClick={() => setConfirmOpen(false)}
          />
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-message-title"
            aria-describedby="delete-message-desc"
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_24px_64px_rgb(0_0_0/0.18)] motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-200"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-red-50 to-transparent"
            />
            <div className="relative px-6 pt-7 pb-6 text-center">
              <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
                <Trash2 className="size-5" />
              </span>
              <h3
                id="delete-message-title"
                className="mt-4 text-lg font-semibold tracking-tight text-foreground"
              >
                Mesajı sil
              </h3>
              <p
                id="delete-message-desc"
                className="mt-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="font-medium text-foreground">
                  {message.name}
                </span>{" "}
                adlı kişinin mesajı kalıcı olarak silinecek. Bu işlem geri
                alınamaz.
              </p>
              <div className="mt-6 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-center">
                <Button
                  type="button"
                  variant="outline"
                  disabled={deleting}
                  className="h-11 flex-1 rounded-xl border-border/70 sm:max-w-36"
                  onClick={() => setConfirmOpen(false)}
                >
                  İptal
                </Button>
                <Button
                  type="button"
                  disabled={deleting}
                  className="h-11 flex-1 rounded-xl bg-red-600 text-sm font-semibold text-white shadow-sm shadow-red-600/20 hover:bg-red-700 sm:max-w-36"
                  onClick={() => onDelete(message.id)}
                >
                  <Trash2 className="size-4" />
                  {deleting ? "Siliniyor…" : "Sil"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
