import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://coral-creative.com";
const siteDescription =
  "SwiftUIを中心に、直感的で美しいiOSアプリを設計・開発。AI活用・Webサービス開発も手がける個人開発スタジオ。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Coral Creative | iOS・AI・Web開発スタジオ",
    template: "%s | Coral Creative",
  },
  description: siteDescription,
  keywords: [
    "iOS",
    "アプリ開発",
    "AI",
    "Web開発",
    "個人開発",
    "Coral Creative",
    "SwiftUI",
  ],
  authors: [{ name: "Coral Creative" }],
  creator: "Coral Creative",
  publisher: "Coral Creative",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "Coral Creative",
    title: "Coral Creative | iOS・AI・Web開発スタジオ",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coral Creative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coral Creative | iOS・AI・Web開発スタジオ",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
