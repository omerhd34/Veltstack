import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";

export async function getAdminSession() {
  return getServerSession(authOptions);
}

export async function requireAdminSession() {
  const session = await getAdminSession();

  if (!session?.user?.id) {
    return {
      session: null,
      error: NextResponse.json({ message: "Yetkisiz" }, { status: 401 }),
    };
  }

  return { session, error: null };
}
