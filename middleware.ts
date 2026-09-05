import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const handleI18n = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/llms.txt") {
    return NextResponse.next();
  }

  return handleI18n(request);
}

export const config = {
  matcher: ["/((?!admin|api|_next|_vercel|.*\\..*).*)"],
};
