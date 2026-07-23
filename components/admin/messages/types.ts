export type AdminMessageItem = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  servicePackage: string | null;
  serviceTier: string | null;
  budget: string | null;
  content: string;
  isRead: boolean;
  createdAt: string;
};

export type StatusFilter = "all" | "unread" | "read";

export type SortKey =
  | "status"
  | "name"
  | "service"
  | "servicePackage"
  | "serviceTier"
  | "budget"
  | "content"
  | "createdAt";

export type SortDirection = "asc" | "desc";
