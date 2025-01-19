import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import Montserrat font
import "./globals.css";

import Menu from "@/components/menu/Menu";
import Preloader from "@/components/preloader/prealoader";

// Import Montserrat font
const montserrat = Montserrat({
  variable: "--font-montserrat", // Custom variable name for Montserrat
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saptaloka Digital",
  description: "Digitalize Your Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`} // Apply Montserrat font variable
      >
        <Menu />
        <div className="w-full h-full relative">
          <div className="w-full h-full absolute">{children}</div>
          {/* <Preloader /> */}
        </div>
      </body>
    </html>
  );
}
