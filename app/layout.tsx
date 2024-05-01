'use client'
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ProfileContextProvider } from "@/components/ProfileContext";
import Footer from "@/components/Footer";

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
      <body className="bg-gray-950 text-gray-200">
      <ProgressBar
          height="3px"
          color="#3b82f6"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <main className="min-h-screen flex flex-col items-center">
          <ProfileContextProvider>
           <TopNavbar  />
           <div className="flex space-x-0 w-full">
           
            <Sidebar isOpen={isOpen} toggleOpen={handleToggleIsOpen} />
            
          {children}
      
          </div>
          </ProfileContextProvider>
        </main>
      </body>
    </html>
  );
}
