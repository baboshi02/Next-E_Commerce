import type { Metadata } from "next";
import NavBar from "@/app/components/NavBar";
import "./globals.css";
import { cn } from '@/lib/utils'
import { Toaster } from "@/components/ui/toaster";

import Footer from "./components/Footer";
import { ThemeProvider } from "./components/themeProvider";
import PageLink from "./components/PageLink";
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
    >
      <body className={cn("min-h-screen flex flex-col font-sans bg-secondaryColor dark:bg-DarkSecondaryColor text-primaryColor dark:text-DarkPrimaryColor box-border text-center text-lg ")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1">
            <NavBar />
            <div className="m-2 p-1">{children}</div>
          </main>
          <Toaster />
          <PageLink />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
