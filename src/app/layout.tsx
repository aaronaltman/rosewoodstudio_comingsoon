import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={lato.className}>
        <div className="flex flex-col min-h-screen max-w-5xl mx-auto bg-[#ADBFAB]">
          {children}
        </div>
      </body>
    </html>
  );
}
