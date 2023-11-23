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

export default function Contactform() {
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
      <div>
        <div className={styles.Footer}>
          <div className={styles.Contact}>
            <h2>Contact Us</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputs}>
                <p className={styles.name}>
                  Hello my name is{" "}
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    {...register("name")}
                  />
                </p>
                <p className={styles.dropdown}>
                  I would like a quote for a{" "}
                  <select {...register("projectType")} defaultValue="">
                    <option value="" disabled hidden>
                      Select an option
                    </option>
                    <option value="Loft">Loft</option>
                    <option value="side_extension">Side Extension</option>
                    <option value="maintenance">Maintenance and Repairs</option>
                    <option value="Other">Other</option>
                  </select>
                </p>
                <p className={styles.textarea}>
                  Other information about the project i would like to include is{" "}
                  <textarea
                    name="message"
                    placeholder="Message"
                    {...register("message")}
                  />
                </p>
                <p className={styles.email}>
                  My email is{" "}
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                </p>
                <p className={styles.phone}>
                  My phone number is{" "}
                  <input
                    required
                    type="phonenumber"
                    name="phone"
                    placeholder="Phone number"
                    {...register("Phone_number")}
                  />
                </p>
              </div>

              <div className={styles.button}>
                <input required type="submit" />

                <span>{result}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
