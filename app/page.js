"use client";

import React from "react";
import { NextSeo } from "next-seo";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import { Playfair_Display, Oswald, Raleway } from "next/font/google";

import Services from "../components/services/page";
import ImageSlider from "../components/imageslider/index";
import ContactForm from "../components/Contactform/page";
import Reviews from "../components/reviews/page";
import Footer from "../components/Footer/page";

import styles from "./page.module.css";
import stylesAbout from "./About.module.css";

const Playfair = Playfair_Display({ weight: "700", subsets: ["latin"] });
const raleWay = Raleway({ weight: "500", subsets: ["latin"] });
const Oswald1 = Oswald({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "290%"]);

  return (
    <>
      <NextSeo
        title="Loft Makers London Ltd Loft conversions and side extension specialists."
        description="Loft Makers London Ltd Loft conversion and side extension specialists. Based in Muswell Hill and serve all of north London."
        canonical="https://loftmaker.co.uk/"
        openGraph={{
          url: "https://loftmaker.co.uk/",
          title: "Loft Maker London Ltd",
          description: "Loft Makers London Ltd Loft conversions and side extension specialists. Based in Muswell Hill and serve all of north London.",
          siteName: "Loft Maker London Ltd",
        }}
      />
      <div className={raleWay.className}>
        <Head>
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

        <main className={styles.main}>
          <motion.div className={styles.mainImage} style={{ y }}>
            <Image
              src="/images/extension1.png"
              layout="fill"
              objectFit="contain"
              alt="Loft conversion example"
            />
            <Image
              src="/images/extension3.png"
              layout="fill"
              objectFit="cover"
              alt="Side extension example"
            />
          </motion.div>

          <motion.div className="motionSection">
            <div className="content">
              <section className="item">
                <div className="Intro">
                  <h1 className={Playfair.className} style={{ fontSize: "xx-large" }}>
                    Complex Problems, Innovative Solutions part two
                  </h1>
                  <p>
                    From start to finish, we ensure that your loft conversion meets your desired requirements. With a focus on exceptional service and a high-quality finish, we take pride in our workmanship. We offer a range of loft conversion options to suit any lifestyle and budget, recognizing that every home is unique. Whether you're looking for a simple conversion or a more complex project, our skilled team can bring your ideas to life. Our commitment to quality and customization guarantees a loft conversion or extension that is truly personalized for you. Contact us today to schedule a free initial consultation.
                  </p>
                </div>
              </section>

              <section className="item" id="services">
                <Services />
              </section>

              <section className="item">
                <div className="image-slide-div">
                  <ImageSlider />
                </div>
              </section>

              <section className="item">
                <div className="reviews">
                  <Reviews />
                </div>
              </section>

              <section className="item" id="About">
                <div className={raleWay.className}>
                  <div className={stylesAbout.Container}>
                    <div className={stylesAbout.AboutText}>
                      <h2 className={Oswald1.className}>About us</h2>
                      <p>
                        With over 20 years of experience transforming homes in London, our team is committed to delivering exceptional renovations and extensions, fueled by our deep knowledge and expertise. We are driven by a passion for design, constantly seeking out innovative solutions to create unique spaces.
                      </p>
                      <p>
                        At Loftmaker London, we understand the challenges that can arise during a renovation project. However, we are well-prepared to overcome any obstacles that may come our way. Our goal is to ensure that your project stays within budget and is completed on schedule. We work closely with architects, building control, structural engineers, and planning departments, or can operate independently, to ensure that our results align perfectly with your vision.
                      </p>
                      <p>
                        With Loftmaker London, you can trust that your home renovation will be handled with utmost professionalism and attention to detail.
                      </p>
                    </div>
                    <div className={stylesAbout.AboutList}>
                      {[
                        { title: "Experienced Builders", description: "With over three decades of construction and project management experience in the industry, our business boasts a wealth of knowledge" },
                        { title: "Fully insured", description: "Key thresholds for Public Liability, Employers Liability, Contract Works Insurance, and Professional Indemnity Insurance." },
                        { title: "Warranty", description: "We take pride in the quality of our work, which is why we offer a 10-year structural warranty with every project. This warranty underscores our commitment to excellence and provides you with peace of mind knowing that your investment is protected. Our expert craftsmanship and durable materials will not only enhance your property but also stand the test of time." },
                        { title: "Coverage", description: "Based in Muswell Hill, we offer comprehensive coverage across the entirety of London." }
                      ].map((item, index) => (
                        <div className={stylesAbout.Item} key={index}>
                          <Image
                            loading="lazy"
                            src="/checkbox.png"
                            blurDataURL="data:..."
                            placeholder="blur"
                            width={70}
                            height={70}
                            objectFit="cover"
                            alt={`${item.title} Icon`}
                          />
                          <div>
                            <h2 className={raleWay.className}>{item.title}</h2>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="item" id="Footer">
                <ContactForm />
                <Footer />
              </section>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
}