"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
const OpenS = Open_Sans({
  weight: "500",
  subsets: ["latin"],
});

export default function Contactform() {
  return (
    <>
      <header>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </header>
      <div className={styles.main}>
        <div className={styles.menu}>
          <div className={styles.Links}>
            <ul>
              <li>
                <Link className={OpenS.className} href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={OpenS.className} href={"/LoftTypes"}>
                  Loft Types
                </Link>
              </li>
              <li>
                <Link className={OpenS.className} href={"/Gallery"}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link className={OpenS.className} href={"/#About"}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.Contact}>
            <div>
              {" "}
              <h4 className={OpenS.className}>
                {" "}
                <Link href="tel:+447469434317"> +447469434317</Link>
              </h4>
              <h4 className={OpenS.className}>
                {" "}
                <Link href="tel:+447736777527">+447736777527</Link>
              </h4>
              <h4 className={OpenS.className}>
                {" "}
                <a href="mailto:info@lml.ltd">info@lml.ltd</a>
              </h4>
            </div>
          </div>
        </div>

        <div className={styles.insta}>
          <Link href="https://www.instagram.com/loftmakerlondon/">
            <Image
              loading="lazy"
              src="/InstaLogo.webp"
              blurDataURL="data:..."
              placeholder="blur"
              width={45}
              height={45}
              style={{ objectFit: "cover" }}
              alt="Bathroom Photo"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
