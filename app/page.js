"use client";
import Services from "../components/services/page";
import Image from "next/image";
import styles from "./page.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { Raleway } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import About from "./About/page";
import ImageSlider from "./imageslider/index";
import Contact from "./contact/page";
import Script from "next/script";
import Reviews from "../components/reviews/page";

const Playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

const raleWay = Raleway({
  weight: "500",
  subsets: ["latin"],
});
export default function Home() {
  let { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "290%"]);

  return (
    <>
      <main className={raleWay.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DP4TSF0JWV" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-DP4TSF0JWV');
        `}
        </Script>
        <motion.div className={styles.mainImage} style={{ y }}>
          <Image
            src="/En2/Loft.jpg"
            width={4000}
            height={400}
            className="landScape"
            style={{ objectFit: "cover" }}
            alt="Picture of the author"
          />
          <Image
            src="/En2/Bathroom-1736X981.jpg"
            fill={true}
            className="Portrait"
            style={{ objectFit: "contain" }}
            alt="Picture of the author"
          />
        </motion.div>

        <motion.div className="motionSection">
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

          <div className="item">
            <div id="Footer" style={{ display: "block" }}>
              <Contact />
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
