import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Worthy Registry",
  description: "A private place for your festival crew registration details.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
