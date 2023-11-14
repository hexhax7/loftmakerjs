import Image from "next/image";
import styles from "./About.module.css";
import Link from "next/link";

import { Raleway } from "next/font/google";
import { Oswald } from "next/font/google";

const Oswald1 = Oswald({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-Oswald1",
});
const raleWay = Raleway({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-raleWay",
});

export default function About() {
  return (
    <div className={raleWay.className}>
      <div className={styles.Container}>
        <div className={styles.AboutText}>
          <h1 className={Oswald1.className}>About us</h1>
          <p>
            With over 20 years of experience transforming homes in london , Our
            team is committed to delivering exceptional renovations and
            extensions, fueled by our deep knowledge and expertise. We are
            driven by a passion for design, constantly seeking out innovative
            solutions to create unique spaces.
          </p>
          <p>
            At Loftmaker London, we understand the challenges that can arise
            during a renovation project. However, we are well-prepared to
            overcome any obstacles that may come our way. Our goal is to ensure
            that your project stays within budget and is completed on schedule.
            We work closely with architects, building control, structural
            engineers, and planning departments, or can operate independently,
            to ensure that our results align perfectly with your vision.
          </p>
          <p>
            With Loftmaker London, you can trust that your home renovation will
            be handled with utmost professionalism and attention to detail.
          </p>
        </div>
        <div className={styles.AboutList}>
          <div className={styles.Item}>
            <Image
              loading="lazy"
              src="/checkbox.png"
              blurDataURL="data:..."
              placeholder="blur"
              width={70}
              height={70}
              style={{ objectFit: "cover", width: "10%", height: "10%" }}
              alt="Bathroom Photo"
            />
            <div>
              <h2 className={raleWay.className}>Experienced Builders</h2>
              <p>
                With over three decades of construction and project management
                experience in the industry, our business boasts a wealth of
                knowledge
              </p>
            </div>
          </div>
          <div className={styles.Item}>
            <Image
              loading="lazy"
              src="/checkbox.png"
              blurDataURL="data:..."
              placeholder="blur"
              width={70}
              height={70}
              style={{ objectFit: "cover", width: "10%", height: "10%" }}
              alt="Bathroom Photo"
            />
            <div>
              <h2 className={raleWay.className}>Fully insured</h2>
              <p>
                Key thresholds for Public Liability, Employers Liability,
                Contract Works Insurance, and Professional Indemnity Insurance.
              </p>
            </div>
          </div>
          <div className={styles.Item}>
            <Image
              loading="lazy"
              src="/checkbox.png"
              blurDataURL="data:..."
              placeholder="blur"
              width={70}
              height={70}
              style={{ objectFit: "cover", width: "10%", height: "10%" }}
              alt="Bathroom Photo"
            />
            <div>
              <h2 className={raleWay.className}>Warranty</h2>
              <p>
                We take pride in the quality of our work, which is why we offer
                a 10-year structural warranty with every project. This warranty
                underscores our commitment to excellence and provides you with
                peace of mind knowing that your investment is protected. Our
                expert craftsmanship and durable materialswill not only enhance
                your property but also stand the test of time.{" "}
              </p>
            </div>
          </div>
          <div className={styles.Item}>
            <Image
              loading="lazy"
              src="/checkbox.png"
              blurDataURL="data:..."
              placeholder="blur"
              width={70}
              height={70}
              style={{ objectFit: "cover", width: "10%", height: "10%" }}
              alt="Bathroom Photo"
            />
            <div>
              <h2 className={raleWay.className}>Coverage</h2>
              <p>
                {" "}
                Based in Muswell Hill, we offer comprehensive coverage across
                the entirety of London
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
