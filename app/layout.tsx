import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hakuraku Running Club",
  description: "日常に走る楽しみを。友達同士で楽しむランニングクラブ。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
