import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biking Singh Rathor | Adventure Biker",
  description: "Passionate Adventure Biker from India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
