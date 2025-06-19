import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iPhone 16 Pro - Apple (India)",
  description: "iPhone 16 Pro. Pro. Beyond. Buy iPhone 16 Pro with free delivery.",
  keywords: "iPhone 16 Pro, Apple, smartphone, titanium, A18 Pro, camera",
  authors: [{ name: "Apple Inc." }],
  openGraph: {
    title: "iPhone 16 Pro - Apple (India)",
    description: "iPhone 16 Pro. Pro. Beyond. Buy iPhone 16 Pro with free delivery.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhone 16 Pro - Apple (India)",
    description: "iPhone 16 Pro. Pro. Beyond. Buy iPhone 16 Pro with free delivery.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
