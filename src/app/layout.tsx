import type { Metadata } from "next";
import "./globals.css";
import { sfDisplay } from "./fonts/fonts";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "AI Content Rocket",
  description: "Launch Your Content in Seconds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfDisplay.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
