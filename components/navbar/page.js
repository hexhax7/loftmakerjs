"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Oswald } from "next/font/google";

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
        <Link className={styles.image} href={"/"}>
          <Image
            priority={true}
            src="/3.png"
            width={100}
            height={100}
            alt=" Loft Makers London Ltd Logo"
          />
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
            <Link href={"/Gallery"} onClick={hideMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href={"/#About"} onClick={hideMenu}>
              About Us
            </Link>
          </li>

          <li>
            <Link href={"/#Footer"} onClick={hideMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
