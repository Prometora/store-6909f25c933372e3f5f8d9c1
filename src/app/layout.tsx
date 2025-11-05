import type { Metadata } from "next";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";

export const metadata: Metadata = {
  title: "{{STORE_NAME}}",
  description: "{{STORE_DESCRIPTION}}",
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
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
