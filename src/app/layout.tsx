import type { Metadata, Viewport } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
