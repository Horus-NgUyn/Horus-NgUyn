import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: "Nguyễn Văn Uy | Backend-Fullstack Portfolio",
  description:
    "Portfolio của Nguyễn Văn Uy - Intern PHP, định hướng Backend-Fullstack, tập trung vào kiến trúc hệ thống và tối ưu hiệu suất.",
  openGraph: {
    title: "Nguyễn Văn Uy | Backend-Fullstack Portfolio",
    description:
      "Showcase dự án TruyenZ, kiến trúc microservices, AI RAG chatbot và tối ưu MySQL.",
    type: "website",
    locale: "vi_VN",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Portfolio Nguyễn Văn Uy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Văn Uy | Backend-Fullstack Portfolio",
    description:
      "Intern PHP định hướng Backend-Fullstack, tập trung kiến trúc hệ thống và hiệu suất.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
