import Image from "next/image";
import styles from "./Lofts.module.css";
import Contact from "../../components/contact/page";
import { Raleway } from "next/font/google";
import { Oswald } from "next/font/google";
import Head from "next/head";
const Oswald1 = Oswald({
  weight: "400",
  subsets: ["latin"],
});
const raleWay = Raleway({
  weight: "500",
  subsets: ["latin"],
});
export const metadata = {
  title: "Loft Makers London Ltd",
  description: "Loft conversions and side extentsions muswell",
  alternates: {
    canonical: "https://loftmaker.co.uk/LoftTypes",
  },
};
export default function LoftTypes() {
  return (
    <div className={raleWay.className}>
      <div className={styles.main}>
        <div className={styles.content}>
          <p className={styles.textmain}>
            Loft Makers London specializes in various loft conversion styles,
            offering a tailored approach based on property size, available
            space, and budget constraints. Explore the diverse options available
            for transforming your loft space:
          </p>
          <div className={styles.type}>
            <Image
              loading="lazy"
              src="/Renders/Dormer.png"
              blurDataURL="data:..."
              placeholder="blur"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
              alt="Dormer Loft Conversion London"
            />
            <div className={styles.info}>
              <h3>Dormer Loft Conversion:</h3>

              <p className={styles.text}>
                A Dormer loft conversion extends from the existing sloping roof,
                creating additional usable space and headroom. The introduction
                of Dormer windows or doors brings in natural light, turning a
                cramped loft into a spacious and airy room. Flat roof Dormers, a
                popular and cost-effective choice, provide increased space and
                natural light.
              </p>
            </div>
          </div>
          <div className={styles.type}>
            <Image
              loading="lazy"
              src="/Renders/L-ShapeDormer.png"
              blurDataURL="data:..."
              placeholder="blur"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
              alt="Rear L Shape Dormer"
            />
            <div className={styles.info}>
              <h3>Rear L Shape Dormer:</h3>
              <p className={styles.text}>
                Ideal for terraced properties, the Rear L Shape Dormer is an
                extension that adds an extra room at the rear of the property.
                Perfect for achieving two bedrooms and a shower room, this
                conversion offers practical and functional space for homeowners.
              </p>
            </div>
          </div>
          <div className={styles.type}>
            <Image
              loading="lazy"
              src="/Renders/pitchedroof.png"
              blurDataURL="data:..."
              placeholder="blur"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
              alt="Pitched Roof Loft Type"
            />
            <div className={styles.info}>
              <h3>Pitched Roof Dormer:</h3>
              <p className={styles.text}>
                Maintaining aesthetic appeal, the Pitched Roof Dormer creates
                extra space, particularly effective when the existing roof pitch
                is high. This option combines functionality with an attractive
                design, resulting in a spacious and visually pleasing loft
                space.
              </p>
            </div>
          </div>
          <div className={styles.type}>
            <Image
              loading="lazy"
              src="/Renders/HipToGable.png"
              blurDataURL="data:..."
              placeholder="blur"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
              alt="Hip To gable Loft Type"
            />
            <div className={styles.info}>
              <h3>Hip to Gable:</h3>
              <p className={styles.text}>
                A common choice for semi-detached or detached properties, the
                Hip to Gable loft conversion extends the sloped sides of the
                roof outwards, forming a vertical gable wall. This maximizes
                space and can be constructed using timber or brickwork according
                to preferences.
              </p>
            </div>
          </div>
          <div className={styles.type}>
            <Image
              loading="lazy"
              src="/Renders/Mansard.png"
              blurDataURL="data:..."
              placeholder="blur"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
              alt="Mansard Loft Type"
            />
            <div className={styles.info}>
              <h3>Mansard:</h3>
              <p className={styles.text}>
                Suited for older terraced properties, the Mansard loft
                conversion alters the roof design to a near-vertical wall
                pitched at 72 degrees. While it requires more construction work
                due to the intricacies of forming the brickwork sides, it
                generates a significant amount of extra space and light.
              </p>
            </div>
          </div>
          <div className={styles.type}>
            <Image
              loading="lazy"
              src="/Renders/Velux.png"
              blurDataURL="data:..."
              placeholder="blur"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
              alt="Velux Loft Type"
            />
            <div className={styles.info}>
              <h3>Velux:</h3>
              <p className={styles.text}>
                A quick and cost-effective solution for creating additional
                space, Velux loft conversions involve installing windows into
                the pitch of the existing roof. This allows ample natural light
                into the room, creating a bright and airy environment without
                altering the overall roof structure.
              </p>
            </div>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}
