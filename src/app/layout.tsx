import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rosewood Studio",
  description: "Your Flower Destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="garden">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen max-w-5xl mx-auto bg-[#ADBFAB]">
          {children}
        </div>
      </body>
    </html>
  );
}
