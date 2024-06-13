"use client";
import Services from "../components/services/page";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

import { Playfair_Display, Oswald, Raleway } from "next/font/google";

import ImageSlider from "../components/imageslider/index";
import styles from "./page.module.css";
import ContactForm from "../components/Contactform/page";
import Script from "next/script";
import Reviews from "../components/reviews/page";
import Head from "next/head";
import Footer from "../components/Footer/page";
import stylesAbout from "./About.module.css";

const Playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

const raleWay = Raleway({
  weight: "500",
  subsets: ["latin"],
});

const Oswald1 = Oswald({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  let { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "290%"]);
  return (
    <>
      <NextSeo
        title="Loft Makers London Ltd Loft conversions and side extension specialists."
        description="Loft Makers London Ltd Loft conversion and side 
        extension specialists. Based in Muswell Hill and serve all of north London"
        canonical="https://loftmaker.co.uk/"
        openGraph={{
          url: "https://loftmaker.co.uk/",
          title: "Loft Maker London Ltd",
          description:
            "Loft Makers London Ltd Loft conversions and side extension specialists. Based in Muswell Hill and serve all of north London",

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

        <div className="main">
          <motion.div className={styles.mainImage} style={{ y }}>
            <Image
              src="/images/extension1.png"
              fill={true}
              className="landScape"
              style={{ objectFit: "contain" }}
              alt="Picture of the author"
            />
            <Image
              src="/images/extension3.png"
              fill={true}
              className="Portrait"
              style={{ objectFit: "cover" }}
              alt="Picture of the author"
            />
          </motion.div>
          <motion.div className="motionSection">
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
                    From start to finish, we ensure that your loft conversion
                    meets your desired requirements. With a focus on exceptional
                    service and a high-quality finish, we take pride in our
                    workmanship. We offer a range of loft conversion options to
                    suit any lifestyle and budget, recognizing that every home
                    is unique. Whether you're looking for a simple conversion or
                    a more complex project, our skilled team can bring your
                    ideas to life. Our commitment to quality and customization
                    guarantees a loft conversion or extension that is truly
                    personalized for you. Contact us today to schedule a free
                    intial consultation.{" "}
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
                  <div className={raleWay.className}>
                    <div className={stylesAbout.Container}>
                      <div className={stylesAbout.AboutText}>
                        <h2 className={Oswald1.className}>About us</h2>
                        <p>
                          With over 20 years of experience transforming homes in
                          london , Our team is committed to delivering
                          exceptional renovations and extensions, fueled by our
                          deep knowledge and expertise. We are driven by a
                          passion for design, constantly seeking out innovative
                          solutions to create unique spaces.
                        </p>
                        <p>
                          At Loftmaker London, we understand the challenges that
                          can arise during a renovation project. However, we are
                          well-prepared to overcome any obstacles that may come
                          our way. Our goal is to ensure that your project stays
                          within budget and is completed on schedule. We work
                          closely with architects, building control, structural
                          engineers, and planning departments, or can operate
                          independently, to ensure that our results align
                          perfectly with your vision.
                        </p>
                        <p>
                          With Loftmaker London, you can trust that your home
                          renovation will be handled with utmost professionalism
                          and attention to detail.
                        </p>
                      </div>
                      <div className={stylesAbout.AboutList}>
                        <div className={stylesAbout.Item}>
                          <Image
                            loading="lazy"
                            src="/checkbox.png"
                            blurDataURL="data:..."
                            placeholder="blur"
                            width={70}
                            height={70}
                            style={{
                              objectFit: "cover",
                              width: "10%",
                              height: "10%",
                            }}
                            alt="Bathroom Photo"
                          />
                          <div>
                            <h2 className={raleWay.className}>
                              Experienced Builders
                            </h2>
                            <p>
                              With over three decades of construction and
                              project management experience in the industry, our
                              business boasts a wealth of knowledge
                            </p>
                          </div>
                        </div>
                        <div className={stylesAbout.Item}>
                          <Image
                            loading="lazy"
                            src="/checkbox.png"
                            blurDataURL="data:..."
                            placeholder="blur"
                            width={70}
                            height={70}
                            style={{
                              objectFit: "cover",
                              width: "10%",
                              height: "10%",
                            }}
                            alt="Bathroom Photo"
                          />
                          <div>
                            <h2 className={raleWay.className}>Fully insured</h2>
                            <p>
                              Key thresholds for Public Liability, Employers
                              Liability, Contract Works Insurance, and
                              Professional Indemnity Insurance.
                            </p>
                          </div>
                        </div>
                        <div className={stylesAbout.Item}>
                          <Image
                            loading="lazy"
                            src="/checkbox.png"
                            blurDataURL="data:..."
                            placeholder="blur"
                            width={70}
                            height={70}
                            style={{
                              objectFit: "cover",
                              width: "10%",
                              height: "10%",
                            }}
                            alt="Bathroom Photo"
                          />
                          <div>
                            <h2 className={raleWay.className}>Warranty</h2>
                            <p>
                              We take pride in the quality of our work, which is
                              why we offer a 10-year structural warranty with
                              every project. This warranty underscores our
                              commitment to excellence and provides you with
                              peace of mind knowing that your investment is
                              protected. Our expert craftsmanship and durable
                              materialswill not only enhance your property but
                              also stand the test of time.{" "}
                            </p>
                          </div>
                        </div>
                        <div className={stylesAbout.Item}>
                          <Image
                            loading="lazy"
                            src="/checkbox.png"
                            blurDataURL="data:..."
                            placeholder="blur"
                            width={70}
                            height={70}
                            style={{
                              objectFit: "cover",
                              width: "10%",
                              height: "10%",
                            }}
                            alt="Bathroom Photo"
                          />
                          <div>
                            <h2 className={raleWay.className}>Coverage</h2>
                            <p>
                              {" "}
                              Based in Muswell Hill, we offer comprehensive
                              coverage across the entirety of London
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item" id="Footer">
                <ContactForm />
                <Footer />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}