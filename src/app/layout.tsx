import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dataset Finder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css?family=Inter:400,400i,500,500i,600,600i,700,700i&amp;display=swap" rel="preload" as="style"></link>
      <link href="https://fonts.googleapis.com/css2?family=Google+Symbols:FILL@0..1&amp;display=block" rel="preload" as="style"></link>
      <link href="https://fonts.googleapis.com/css?family=Inter:400,400i,500,500i,600,600i,700,700i&amp;display=swap" rel="stylesheet" media="all" id="async-google-font-1"></link>
      <link href="https://fonts.googleapis.com/css2?family=Google+Symbols:FILL@0..1&amp;display=block" rel="stylesheet" media="all" id="async-google-font-2"></link>
      
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
