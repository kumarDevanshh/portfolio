import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>

        <Navbar />

        {/* 👇 Navbar ki height = 80px */}
        <main className="pt-20">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
