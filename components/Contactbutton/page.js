"use client";

import Image from "next/image";
import styles from "./Contactbutton.module.css";
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

export default function Contactbutton() {
  function toggleContact(event) {
    // Stop propagation to prevent the document click event from triggering
    event.stopPropagation();

    var link = document.getElementById("ContactButton");
    if (link) {
      link.classList.toggle(styles.showbutton);
      console.log(
        "Button clicked. Class toggled:",
        link.classList.contains("showbutton")
      );
    } else {
      console.error("Element with ID 'linkid' not found.");
    }
  }

  function hideMenu() {
    var link = document.getElementById("linkid");
    if (link && link.classList.contains(styles.show)) {
      link.classList.remove(styles.showbutton);
      console.log("Menu hidden.");
    }
  }

  return (
    <div className={Oswald1.className}>
      <div className={styles.main}>
        <div className={styles.nav}>
          <div id="ContactButton" className={styles.infocontact}>
            <h2>Contact Us today</h2>
            <h2 className={OpenS.className}>
              {" "}
              <span className="material-symbols-outlined">call </span>{" "}
              <Link href="tel:+447469434317"> +447469434317</Link>
            </h2>
            <h2 className={OpenS.className}>
              {" "}
              <span className="material-symbols-outlined">call </span>{" "}
              <Link href="tel:+447736777527">+447736777527</Link>
            </h2>
            <h2 className={OpenS.className}>
              {" "}
              <span className="material-symbols-outlined">mail</span>{" "}
              <a href="mailto:info@lml.ltd">info@lml.ltd</a>
            </h2>
          </div>
        </div>
        <button className={styles.image} onClick={toggleContact}>
          <Image
            priority={true}
            src="/3.png"
            width={75}
            height={75}
            alt=" Loft Makers London Ltd Logo"
          />
        </button>
      </div>
    </div>
  );
}
