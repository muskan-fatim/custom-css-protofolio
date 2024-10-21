import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/nav";
import { Agdasima, Anybody } from "next/font/google"; // Import your Google fonts

const agdasima = Agdasima({
  subsets: ["latin"],
  weight: ["400"], 
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Describe my all details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={agdasima.className}> {/* Corrected variable name */}
      <body className="bg-gray-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}