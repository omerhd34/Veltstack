import type { Metadata } from "next";
import { Black_Ops_One, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const blackOpsOne = Black_Ops_One({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Veltstack",
    template: "%s | Veltstack",
  },
  description:
    "Kurumsal web sitesi, e-ticaret, mobil uygulama ve SEO hizmetleri.",
  metadataBase: new URL("https://www.Veltstack.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full">
      <body
        className={`${blackOpsOne.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-full flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
