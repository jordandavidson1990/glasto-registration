import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Glasto Blastos",
  description:
    "Names, registrations and postcodes of Glastonbury Festival 2026 attendees",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
