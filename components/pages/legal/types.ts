export interface LegalSection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export type LegalPageKey = "privacy" | "terms" | "cookies" | "kvkk";
