"use client";
import Services from "../components/services/page";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { Raleway } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import About from "../components/About/page";
import ImageSlider from "../components/imageslider/index";
import Contact from "../components/contact/page";
import ContactForm from "../components/Contactform/page";
import Script from "next/script";
import Reviews from "../components/reviews/page";
import Head from "next/head";
import Footer from "../components/Footer/page";

const Playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

const raleWay = Raleway({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={raleWay.className}>
      <Head>
        <link
          rel="canonical"
          href={"https://loftmaker.co.uk/LoftTypes"}
          key="canonical"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DP4TSF0JWV" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-DP4TSF0JWV');
        `}
        </Script>
      </Head>

      <div className="main">
        <div className="content">
          <div className="item">
            <div className="Intro" style={{ display: "block" }}>
              <h1
                className={Playfair.className}
                style={{ fontSize: "xx-large" }}
              >
                Complex Problems, Innovative Solutions
              </h1>
              <p>
                {" "}
                From start to finish, we ensure that your loft conversion meets
                your desired requirements. With a focus on exceptional service
                and a high-quality finish, we take pride in our workmanship. We
                offer a range of loft conversion options to suit any lifestyle
                and budget, recognizing that every home is unique. Whether
                you're looking for a simple conversion or a more complex
                project, our skilled team can bring your ideas to life. Our
                commitment to quality and customization guarantees a loft
                conversion or extension that is truly personalized for you.
                Contact us today to schedule a free intial consultation.{" "}
              </p>
            </div>
          </div>

          <div className="item">
            <div id="services" style={{ display: "block" }}>
              {" "}
              <Services />
            </div>
          </div>

          <div className="item">
            <div className="image-slide-div" style={{ display: "block" }}>
              {" "}
              <ImageSlider />
            </div>
          </div>
          <div className="item">
            <div className="reviews" style={{ display: "block" }}>
              {" "}
              <Reviews />
            </div>
          </div>
          <div className="item">
            <div id="About" style={{ display: "block" }}>
              <About />
            </div>
          </div>

          <div className="item" id="Footer">
            <ContactForm />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
