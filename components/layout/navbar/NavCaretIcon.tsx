import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { navItemCaretClass } from "./nav-link-styles";

interface NavCaretIconProps {
  open: boolean;
  active?: boolean;
  className?: string;
}

export function NavCaretIcon({
  open,
  active = false,
  className,
}: NavCaretIconProps) {
  const Icon = open ? FaCaretUp : FaCaretDown;

  return (
    <Icon className={cn(navItemCaretClass(active), className)} aria-hidden />
  );
}
