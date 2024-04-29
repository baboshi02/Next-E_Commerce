import type { Metadata } from "next";
import Header from "./Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Ecommerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-secondaryColor box-border text-center text-lg"
    >
      <body className={inter.className}>
        <Header />
        <div className="m-2 p-1">{children}</div>
      </body>
    </html>
  );
}
