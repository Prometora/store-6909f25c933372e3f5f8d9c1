import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "DOGS 58",
  description: "marketplace for dog owners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Visual Edit Client Script - enables element selection in editor */}
        <script src="/visual-edit-client.js" defer></script>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
