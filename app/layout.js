import Head from "next/head";
import Contact from "../components/contact/page";
import "./globals.css";
import Navbar from "../components/navbar/page";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Raleway } from "next/font/google";
import Contactbutton from "@/components/Contactbutton/page";

<Head></Head>;

const raleWay = Raleway({
  weight: "500",
  subsets: ["latin"],
});
export const metadata = {
  title:
    "Loft Makers London Ltd Loft conversion and side extension specialists.",
  description:
    "Loft Makers London Ltd Loft conversion and side extension specialists. Based in Muswell Hill and serve all of north London",
  alternates: {
    canonical: `https://loftmaker.co.uk/`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleWay.className}>
        <Navbar />
        <Contactbutton />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
