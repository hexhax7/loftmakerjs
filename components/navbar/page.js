"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { Open_Sans } from "next/font/google";

const OpenS = Open_Sans({
  weight: "500",
  subsets: ["latin"],
});
const Oswald1 = Oswald({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  function toggleMenu(event) {
    // Stop propagation to prevent the document click event from triggering
    event.stopPropagation();

    var link = document.getElementById("linkid");
    if (link) {
      link.classList.toggle(styles.show);
      console.log(
        "Button clicked. Class toggled:",
        link.classList.contains("show")
      );
    } else {
      console.error("Element with ID 'linkid' not found.");
    }
  }

  function hideMenu() {
    var link = document.getElementById("linkid");
    if (link && link.classList.contains(styles.show)) {
      link.classList.remove(styles.show);
      console.log("Menu hidden.");
    }
  }

  return (
    <div className={Oswald1.className}>
      <nav className={styles.Nav}>
        <Link className={styles.contact} href={"/#Footer"} onClick={hideMenu}>
          REQUEST A FREE QUOTE
        </Link>

        <button className={styles.button} onClick={toggleMenu}>
          <div className={styles.ham}></div>
          <div className={styles.ham}></div>
          <div className={styles.ham}></div>
        </button>

        <ul id="linkid" className={styles.Links}>
          <li>
            <Link href={"/"} onClick={hideMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/LoftTypes"} onClick={hideMenu}>
              Loft Types
            </Link>
          </li>
          <li>
            <Link href={"/maintenance"} onClick={hideMenu}>
              Maintenance
            </Link>
          </li>
          <li>
            <Link href={"/#Footer"} onClick={hideMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link href={"/Gallery"} onClick={hideMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href={"/#About"} onClick={hideMenu}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
