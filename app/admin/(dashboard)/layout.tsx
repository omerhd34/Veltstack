import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();
  if (!session?.user) redirect("/admin/login");

  return (
    <div className="relative min-h-screen bg-[#F4F6F5]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(58,107,82,0.09),transparent_50%)]"
      />
      <main className="relative w-full px-4 py-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {children}
      </main>
    </div>
  );
}
