import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Oswald } from "next/font/google";

const Oswald1 = Oswald({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
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

        <ul className={styles.Links}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/LoftTypes"}>Loft Types</Link>
          </li>
          <li>
            <Link href={"/Gallery"}>Gallery</Link>
          </li>
          <li>
            <Link href={"/#About"}>About Us</Link>
          </li>

          <li>
            <Link href={"/#Footer"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
