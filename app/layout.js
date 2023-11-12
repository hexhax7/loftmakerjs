import Head from "next/head";
import Contact from "./contact/page";
import "./globals.css";
import Navbar from "./navbar/page";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Raleway } from "next/font/google";

const raleWay = Raleway({
  weight: "500",
  subsets: ["latin"],
});
export const metadata = {
  title: "Loft Makers London Ltd",
  description: "Loft Makers London Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleWay.className}>
        <Navbar />
        {children}
        <Analytics />
        <Contact />
      </body>
    </html>
  );
}
