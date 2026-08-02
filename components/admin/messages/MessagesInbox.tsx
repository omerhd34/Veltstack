/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { resolveContactLabels } from "@/lib/contact-labels";
import { Button } from "@/components/ui/shadcn/button";
import { MessageDetailPanel } from "./MessageDetailPanel";
import { MessagesTable } from "./MessagesTable";
import { MessagesToolbar } from "./MessagesToolbar";
import type {
  AdminMessageItem,
  SortDirection,
  SortKey,
  StatusFilter,
} from "./types";
import { compareMessages, normalize, PAGE_SIZE } from "./utils";

export type { AdminMessageItem } from "./types";

interface MessagesInboxProps {
  messages: AdminMessageItem[];
}

export function MessagesInbox({
  messages: initialMessages,
}: MessagesInboxProps) {
  const router = useRouter();
  const [messages, setMessages] = useState(initialMessages);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [service, setService] = useState("all");
  const [serviceTier, setServiceTier] = useState("all");
  const [budget, setBudget] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [sortKey, setSortKey] = useState<SortKey>("createdAt");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, status, service, serviceTier, budget, sortKey, sortDirection]);

  const unreadCount = useMemo(
    () => messages.filter((message) => !message.isRead).length,
    [messages],
  );

  const filteredMessages = useMemo(() => {
    const q = normalize(query);

    const filtered = messages.filter((message) => {
      if (status === "unread" && message.isRead) return false;
      if (status === "read" && !message.isRead) return false;
      if (service !== "all" && message.service !== service) return false;
      if (serviceTier !== "all" && message.serviceTier !== serviceTier)
        return false;
      if (budget !== "all" && message.budget !== budget) return false;

      if (!q) return true;

      const labels = resolveContactLabels({
        service: message.service ?? "",
        servicePackage: message.servicePackage ?? "",
        serviceTier: message.serviceTier ?? "",
        budget: message.budget ?? "",
      });

      const haystack = [
        message.name,
        message.email,
        message.phone ?? "",
        message.content,
        labels.service,
        labels.servicePackage,
        labels.serviceTier,
        labels.budget,
      ]
        .join(" ")
        .toLocaleLowerCase("tr-TR");

      return haystack.includes(q);
    });

    return [...filtered].sort((a, b) =>
      compareMessages(a, b, sortKey, sortDirection),
    );
  }, [
    budget,
    messages,
    query,
    service,
    serviceTier,
    sortDirection,
    sortKey,
    status,
  ]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }
    setSortKey(key);
    setSortDirection(key === "createdAt" || key === "status" ? "desc" : "asc");
  }

  const visibleMessages = filteredMessages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredMessages.length;
  const remainingCount = Math.max(filteredMessages.length - visibleCount, 0);
  const nextBatchSize = Math.min(PAGE_SIZE, remainingCount);

  const hasActiveFilters =
    query.trim() !== "" ||
    status !== "all" ||
    service !== "all" ||
    serviceTier !== "all" ||
    budget !== "all";

  function clearFilters() {
    setQuery("");
    setStatus("all");
    setService("all");
    setServiceTier("all");
    setBudget("all");
    setVisibleCount(PAGE_SIZE);
  }

  const selected =
    messages.find((message) => message.id === selectedId) ?? null;

  async function markAsRead(id: string) {
    setMessages((prev) =>
      prev.map((message) =>
        message.id === id ? { ...message, isRead: true } : message,
      ),
    );

    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isRead: true }),
      });
      if (!response.ok) throw new Error("mark-read-failed");
      startTransition(() => router.refresh());
    } catch {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === id ? { ...message, isRead: false } : message,
        ),
      );
    }
  }

  function openMessage(id: string) {
    setSelectedId(id);
    const message = messages.find((item) => item.id === id);
    if (message && !message.isRead) {
      void markAsRead(id);
    }
  }

  function closeDetail() {
    setSelectedId(null);
  }

  async function deleteMessage(id: string) {
    const snapshot = messages;
    setDeletingId(id);
    setMessages((prev) => prev.filter((message) => message.id !== id));
    setSelectedId(null);

    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("delete-failed");
      startTransition(() => router.refresh());
    } catch {
      setMessages(snapshot);
      setSelectedId(id);
    } finally {
      setDeletingId(null);
    }
  }

  useEffect(() => {
    if (!selectedId) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedId(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedId]);

  return (
    <>
      <MessagesToolbar
        filteredCount={filteredMessages.length}
        unreadCount={unreadCount}
        query={query}
        status={status}
        service={service}
        serviceTier={serviceTier}
        budget={budget}
        hasActiveFilters={hasActiveFilters}
        onQueryChange={setQuery}
        onStatusChange={setStatus}
        onServiceChange={setService}
        onServiceTierChange={setServiceTier}
        onBudgetChange={setBudget}
        onClearFilters={clearFilters}
      />

      <MessagesTable
        messages={visibleMessages}
        selectedId={selectedId}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onToggleSort={toggleSort}
        onOpenMessage={openMessage}
      />

      {hasMore ? (
        <div className="mt-5 flex justify-center">
          <Button
            type="button"
            variant="outline"
            className="rounded-xl border-border/70 bg-white/80 px-5 shadow-sm hover:bg-white"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            Diğer {nextBatchSize} mesajı göster
          </Button>
        </div>
      ) : null}

      {selected ? (
        <MessageDetailPanel
          message={selected}
          marking={isPending}
          deleting={deletingId === selected.id}
          onClose={closeDetail}
          onDelete={deleteMessage}
        />
      ) : null}
    </>
  );
}
