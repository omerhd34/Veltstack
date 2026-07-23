"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import { cn } from "@/lib/utils";

interface AdminHeaderProps {
  className?: string;
  title?: string;
}

export function AdminHeader({ className, title }: AdminHeaderProps) {
  return (
    <header
      className={cn(
        "mb-6 flex flex-col gap-5 border-b border-border/60 pb-5 sm:mb-8 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <div className="flex min-w-0 items-center gap-4 sm:gap-6">
        <Link
          href="/"
          className="inline-flex shrink-0 origin-left select-none transition-transform duration-500 ease-out hover:scale-[1.04]"
          aria-label="Veltstack"
        >
          <Image
            src="/images/logo.png"
            alt="Veltstack"
            width={240}
            height={47}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>
        {title ? (
          <>
            <div className="hidden h-8 w-px bg-border/80 sm:block" aria-hidden />
            <h1 className="min-w-0 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {title}
            </h1>
          </>
        ) : null}
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="self-end rounded-xl sm:self-auto"
        onClick={() => signOut({ callbackUrl: "/admin/login", redirect: true })}
      >
        <LogOut className="size-3.5" />
        Çıkış
      </Button>
    </header>
  );
}
