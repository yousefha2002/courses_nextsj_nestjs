import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "CourseHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-[100vh] flex flex-col justify-between">
          <div>
            <Navbar/>
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
