"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { myAction } from "./actions";
import { Open_Sans } from "next/font/google";

const OpenS = Open_Sans({
  weight: "500",
  subsets: ["latin"],
});

export default function Contact() {
  const { register, handleSubmit, setValue, getValues } = useForm(); // Use useForm hook

  const onSubmit = async (data) => {
    const response = await myAction(data); // Call myAction function with form data
    setResult(response.message); // Update result state with the response message
  };

  const [result, setResult] = React.useState("");

  return (
    <>
      <header>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </header>
      <div className={styles.Footer}>
        <div className={styles.Contact}>
          <h2>Contact Us</h2>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputs}>
              <input
                required
                type="text"
                name="name"
                placeholder="Name"
                {...register("name")}
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                {...register("email")}
              />
            </div>

            <textarea
              required
              name="message"
              placeholder="Message"
              {...register("message")}
            />

            <div className={styles.button}>
              <input required type="submit" />

              <span>{result}</span>
            </div>
          </form>
        </div>
        <div className={styles.ContactText}>
          <div>
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

            <Link href="https://www.instagram.com/loftmakerlondon/">
              <Image
                loading="lazy"
                src="/facebook_logo.png"
                blurDataURL="data:..."
                placeholder="blur"
                width={55}
                height={55}
                style={{ objectFit: "cover" }}
                alt="Bathroom Photo"
              />
            </Link>
          </div>

          <p>
            We're excited to work with clients who value quality and attention
            to detail. If you're looking for a builder in North London, we'd be
            happy to give you a quote.
          </p>
          <p>We are based in Muswell Hill, and we serve all of North London.</p>
          <br></br>
          <h2 className={OpenS.className}>
            {" "}
            <span className="material-symbols-outlined">call </span>{" "}
            <Link href="tel:+447469434317"> +44 7469434317</Link>
          </h2>
          <h2 className={OpenS.className}>
            {" "}
            <span className="material-symbols-outlined">call </span>{" "}
            <Link href="tel:+447736777527">+44 773 6777527</Link>
          </h2>
          <h2 className={OpenS.className}>
            {" "}
            <span className="material-symbols-outlined">mail</span>{" "}
            <a href="mailto:info@lml.ltd">info@lml.ltd</a>
          </h2>
        </div>
      </div>
    </>
  );
}
