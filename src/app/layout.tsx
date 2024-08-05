import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BK Moklet",
  description: "BK Moklet sahabat siswa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="favicon.ico" sizes="32" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
