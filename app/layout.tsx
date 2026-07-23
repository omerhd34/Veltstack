import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
    <html className="h-full" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-full flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
