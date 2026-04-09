import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PivotPath",
  description: "Find your next career path, funding options, and real opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
