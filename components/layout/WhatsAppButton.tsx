import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "905078492903";

interface WhatsAppButtonProps {
  className?: string;
}

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  const t = useTranslations("footer");
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("whatsAppMessage"))}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsApp")}
      title={t("whatsApp")}
      className={cn(
        "fixed right-6 bottom-[max(0.75rem,calc(env(safe-area-inset-bottom)+0.5rem))] z-50 flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white sm:right-8 sm:bottom-4",
        "shadow-[0_6px_22px_rgb(37_211_102/0.42)]",
        "transition-[transform,background-color,box-shadow] duration-300 ease-out",
        "hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_8px_26px_rgb(37_211_102/0.55)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "motion-reduce:transition-none motion-reduce:hover:scale-100",
        "print:hidden",
        className,
      )}
    >
      <span
        className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366]/55 motion-reduce:hidden"
        aria-hidden
      />
      <FaWhatsapp className="relative size-6" aria-hidden />
    </Link>
  );
}
