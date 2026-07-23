import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";
import { AdminLoginForm } from "@/components/admin/login/AdminLoginForm";

export const metadata = {
  title: "Giriş",
};

export default async function AdminLoginPage() {
  const session = await getAdminSession();
  if (session?.user) redirect("/admin/mesajlar");

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(58,107,82,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgb(58,107,82,0.08),transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,rgb(0_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.04)_1px,transparent_1px)]48px_48px]"
      />

      <div className="relative w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex origin-center select-none transition-transform duration-500 ease-out hover:scale-[1.04]"
              aria-label="Veltstack"
            >
              <Image
                src="/images/logo.png"
                alt="Veltstack"
                width={240}
                height={47}
                priority
                className="h-10 w-auto sm:h-11"
              />
            </Link>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Yönetim paneli
          </h1>
        </div>

        <div className="rounded-2xl border border-border/80 bg-card/80 p-8 shadow-sm backdrop-blur-md">
          <AdminLoginForm />
        </div>
      </div>
    </div>
  );
}
