import type { Metadata } from "next";
import "./globals.css";
import { sfDisplay } from "./fonts/fonts";
import { ClerkProvider } from "@clerk/nextjs";


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
    <ClerkProvider appearance={{
      variables: {colorPrimary: "#000000"}
    }}>
      <html lang="en">
        <body
          className={`${sfDisplay.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
