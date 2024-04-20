'use client'
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

/*export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setisOpen] = useState(false)

   const handleToggleIsOpen = () =>  {
    setisOpen(! isOpen)
   }
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
           <TopNavbar  />
           <div className="flex space-x-0 w-full">
            <Sidebar isOpen={isOpen} toggleOpen={handleToggleIsOpen} />
          {children}
          </div>
        </main>
      </body>
    </html>
  );
}
