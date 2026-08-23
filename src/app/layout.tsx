import type { Metadata } from "next";
import "./globals.css";
import AsyncStylesheet from "@/components/AsyncStylesheet";

export const metadata: Metadata = {
  title: "Peter Zhang | Portfolio",
  description: "Here's my portfolio website.",
  icons: {
    icon: "/logo-dark.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <AsyncStylesheet href="https://cdn.jsdelivr.net/npm/@github/mona-sans/css/mona-sans.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
