import type { Metadata } from "next";
import NavBar from "@/app/components/NavBar";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils'
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Ecommerce App",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"

    >
      <body className={cn("min-h-screen font-sans bg-secondaryColor box-border text-center text-lg", fontSans.variable)}>
        <NavBar />
        <div className="m-2 p-1">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
