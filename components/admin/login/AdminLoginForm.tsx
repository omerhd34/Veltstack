"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import { cn } from "@/lib/utils";

export function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        username: username.trim(),
        password,
        redirect: false,
        callbackUrl: "/admin/mesajlar",
      });

      if (result?.error) {
        setError("Kullanıcı adı veya şifre hatalı.");
        setLoading(false);
        return;
      }

      router.push("/admin/mesajlar");
      router.refresh();
    } catch {
      setError("Giriş sırasında bir hata oluştu.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <label
          htmlFor="username"
          className="text-sm font-medium text-foreground"
        >
          Kullanıcı adı
        </label>
        <div className="relative">
          <User className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={cn(
              "h-11 w-full rounded-xl border border-border bg-background/80 pr-3 pl-10 text-sm outline-none transition",
              "placeholder:text-muted-foreground/70",
              "focus:border-brand-accent focus:ring-3 focus:ring-brand-accent/20",
            )}
            placeholder="Kullanıcı adı"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-foreground"
        >
          Şifre
        </label>
        <div className="relative">
          <Lock className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={cn(
              "h-11 w-full rounded-xl border border-border bg-background/80 pr-11 pl-10 text-sm outline-none transition",
              "placeholder:text-muted-foreground/70",
              "focus:border-brand-accent focus:ring-3 focus:ring-brand-accent/20",
            )}
            placeholder="••••••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
            aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>
      </div>

      {error ? (
        <p
          role="alert"
          className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="h-11 w-full rounded-xl bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent/90"
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Giriş yapılıyor…
          </>
        ) : (
          "Giriş yap"
        )}
      </Button>
    </form>
  );
}
