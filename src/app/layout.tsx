"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const disableNavbar=["/Login","/Register","/404"];
  const pathname=usePathname();
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" sizes="32" />
      </Head>
      <body className={inter.className}>
        <SessionProvider>
          {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
