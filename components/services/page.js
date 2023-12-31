import Image from "next/image";
import styles from "./Service.module.css";

import { Raleway, Oswald } from "next/font/google";

const Oswald1 = Oswald({
  weight: "400",
  subsets: ["latin"],
});

const raleWay = Raleway({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-raleWay",
});

export default function Services() {
  return (
    <div
      className={raleWay.className}
      style={{ display: "block", marginBottom: "5%" }}
    >
      <div className={styles.Header}>
        <h2
          className={Oswald1.className}
          style={{ textAlign: "center", margin: "5%" }}
        >
          Services
        </h2>
      </div>

      <div className={styles.Container}>
        <div className={styles.Services}>
          <div className={styles.ServiceImage}>
            <Image
              src="/En2/Loft2.jpg"
              style={{ objectFit: "contain" }}
              blurDataURL="data:..."
              placeholder="blur"
              fill={true}
              alt="Loft Conversions"
            />
          </div>
          <div className={styles.ServiceText}>
            <h2 className={Oswald1.className}>Loft Conversions</h2>
            <p>
              {" "}
              we specialize in transforming attic spaces into functional living
              areas. Our expert team offers tailored services from design to
              finish, adding value and enhancing your home with quality
              craftsmanship. Trust us to make your loft a stunning extension of
              your home
            </p>
          </div>
        </div>

        <div className={styles.Services}>
          <div className={styles.ServiceImage}>
            <Image
              src="/Gallery/Side_Extension.jpg"
              style={{ objectFit: "contain" }}
              blurDataURL="data:..."
              placeholder="blur"
              fill={true}
              alt="Side Extension"
            />
          </div>
          <div className={styles.ServiceText}>
            <h2 className={Oswald1.className}>Side Extension</h2>
            <p>
              Our side extension services are designed to maximize your living
              space while seamlessly blending with your existing home. With a
              focus on quality craftsmanship and innovative design, we create
              functional and aesthetically pleasing extensions tailored to your
              needs. Trust us to expand your living space, adding value and
              comfort to your property.
            </p>
          </div>
        </div>

        <div className={styles.Services}>
          <div className={styles.ServiceImage}>
            <Image
              src="/Gallery/Enfiled Fibre Glass Roof.jpg"
              style={{ objectFit: "contain" }}
              blurDataURL="data:..."
              placeholder="blur"
              fill={true}
              alt="GRP flat roof installation"
            />
          </div>

          <div className={styles.ServiceText}>
            <h2 className={Oswald1.className}>GRP flat roof installation</h2>
            <p>
              Our GRP roofing solutions offer superior protection and durability
              for your property. With expert installation and top-quality
              materials, we guarantee a watertight and long-lasting roofing
              system that demands minimal maintenance. Rest easy knowing our GRP
              roofing can withstand the elements while enhancing your property's
              aesthetics.
            </p>
          </div>
        </div>

        <div className={styles.Services}>
          <div className={styles.ServiceImage}>
            <Image
              src="/Gallery/74.jpg"
              blurDataURL="data:..."
              style={{ objectFit: "contain" }}
              placeholder="blur"
              fill={true}
              alt="Steel Installation"
            />
          </div>

          <div className={styles.ServiceText}>
            <h2 className={Oswald1.className}>Steel Installation</h2>

            <p>
              we excel in precision and strength. Our experienced team delivers
              efficient and reliable steel installations for various
              applications, ensuring structural integrity and safety. Whether
              it's for residential or commercial projects, trust us to provide
              robust steel solutions that meet your specific needs while
              adhering to industry standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
