import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const { error } = await requireAdminSession();
  if (error) return error;

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(messages);
}
