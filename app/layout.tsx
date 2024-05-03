
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ProfileContextProvider } from "@/components/ProfileContext";
import Footer from "@/components/Footer";
import NextTopLoader from 'nextjs-toploader';
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Discover polkadot",
  description: "your home to discover polkadot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-gray-950 text-gray-200">
     {/*} <ProgressBar
          height="3px"
          color="#3b82f6"
          options={{ showSpinner: false }}
          shallowRouting
  />*/}

<NextTopLoader
 color="#3b82f6"
 initialPosition={0.08}
 crawlSpeed={200}
 height={3}
 crawl={true}
 showSpinner={false}
 easing="ease"
 speed={200}
 shadow="0 0 10px #2299DD,0 0 5px #2299DD"
/>
        <main className="min-h-screen flex flex-col items-center">
          <ProfileContextProvider>
           <TopNavbar  />
           <div className="flex space-x-0 w-full">
           
            <Sidebar  />
            
          {children}
      
          </div>
          </ProfileContextProvider>
        </main>
      </body>
    </html>
  );
}
