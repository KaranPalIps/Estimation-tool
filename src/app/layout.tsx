
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { Card } from "@/components/ui/card";
import Header from "@/components/ui/header";
import MainLayout from "@/components/main-layout";
import { Toaster } from "@/components/ui/toaster";

const inter = Roboto({ subsets: ["cyrillic-ext"], weight: "500" });

export const metadata: Metadata = {
  title: "Estimation tool",
  description: "This is the app where you generate the estimation using Ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="min-h-screen">
                <div className="flex">
                    <MainLayout/>
                    <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
                        {children}
                        <Toaster />
                    </div>
                </div>
            </div>
      </body>
    </html>
  );
}
