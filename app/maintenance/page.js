import Image from "next/image";
import Link from "next/link";
import styles from "./maintenance.module.css";
import Contact from "../../components/contact/page";
import Footer from "../../components/Footer/page";
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
  description: "Loft Makers London Ltd",
  alternates: {
    canonical: "https://loftmaker.co.uk/maintenance",
  },
};

export default function maintenance() {
  return (
    <div className={raleWay.className}>
      <header>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@44,400,0,0"
        />
      </header>
      <div className={styles.main}>
        <div className={styles.content}>
          <h1 className={raleWay.className}>Maintenace</h1>
          <div className={styles.flex}>
            <div className={styles.what}>
              <ul>
                <li>
                  <Link href={"/maintenance#plumbing"}>
                    <span class="material-symbols-outlined">plumbing</span>{" "}
                    Plumbing
                  </Link>
                </li>
                <li>
                  <Link href={"/maintenance#Electrical"}>
                    <span class="material-symbols-outlined">bolt</span>{" "}
                    Electrical
                  </Link>
                </li>
                <li>
                  <Link href={"/maintenance#handyman"}>
                    <span class="material-symbols-outlined">handyman</span>{" "}
                    Handyman
                  </Link>
                </li>

                <li>
                  <Link href={"/maintenance#carpenter"}>
                    <span class="material-symbols-outlined">carpenter</span>{" "}
                    carpentry
                  </Link>
                </li>
                <li>
                  <Link href={"/maintenance#tiler"}>
                    <span class="material-symbols-outlined">grid_view</span>{" "}
                    Tiling
                  </Link>
                </li>

                <li>
                  <Link href={"/maintenance#roofing"}>
                    <span class="material-symbols-outlined">roofing</span>{" "}
                    Roofing
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.prices}>
              <div id="plumbing">
                <h3>PLUMBING SERVICES</h3>

                <p>
                  Committed to delivering top-notch plumbing installations and
                  repairs, Loftmaker London proudly offers professional services
                  through our team of skilled plumbing engineers. Throughout the
                  past decade, our focus has been on delivering the following
                  services to our valued clients:
                </p>

                <ul>
                  <li>Fixing dripping taps</li>
                  <li>Relocating or replacing radiators</li>
                  <li>Addressing faulty shower valves</li>
                  <li>Dealing with overflowing cisterns and tanks</li>
                  <li>Boiler installation</li>
                  <li>Water storage tank solutions</li>
                  <li>Clearing blocked sinks or baths</li>
                  <li>Replacing taps</li>
                  <li>Handling water leaks</li>
                  <li>Bathroom and shower installations</li>
                </ul>

                <h4>PRICING DETAILS</h4>

                <ul>
                  <li>Minimum Call Out Charge: £85.00</li>
                  <li>Additional 30 Minutes: £42.50</li>
                  <li>Additional Hour: £85.00</li>
                  <li>After 5 PM per hour: £130.00</li>
                  <li>Day Rate: £425.00</li>
                </ul>

                <p>
                  Rest assured, our skilled team is dedicated to delivering
                  exceptional plumbing services for your satisfaction.
                </p>
              </div>
              <div id="Electrical">
                <h3>ELECTRICAL SERVICES</h3>

                <p>
                  Loftmaker London is a registered electrical services business,
                  and all our technicians are fully qualified to conduct
                  electrical repairs and installations, providing certification
                  for all required work.
                </p>

                <ul>
                  <li>Installing new switches, sockets, and light fittings</li>
                  <li>Addressing tripping fuse boxes and RCDs</li>
                  <li>Replacing consumer units</li>
                  <li>Handling loose connections and rewiring</li>
                  <li>Addressing water-damaged wiring</li>
                  <li>Installing extractor fans</li>
                  <li>Shower installations</li>
                  <li>Installing smoke/heat alarms</li>
                  <li>TV installations</li>
                  <li>Fire alarm systems</li>
                  <li>Installing cooker units</li>
                  <li>Exterior and security lighting</li>
                  <li>Entry phone systems</li>
                  <li>
                    Conducting Electrical Installation Condition Reports (see
                    below)
                  </li>
                  <li>Portable Appliance Testing (see below)</li>
                </ul>

                <h4>ELECTRICAL PRICES</h4>

                <ul>
                  <li>Minimum Call Out Charge: £85.00</li>
                  <li>Additional 30 Minutes: £42.50</li>
                  <li>Additional Hour: £85.00</li>
                  <li>After 5 PM per hour: £130.00</li>
                  <li>Day Rate: £425.00</li>
                </ul>
              </div>
              <div id="handyman">
                <h3>GENERAL HANDYMAN SERVICES</h3>

                <p>
                  Loftmaker London excels in handling those small jobs other
                  trades won’t touch. Our handyman services provide an
                  experienced and qualified multi-skilled team member to address
                  all items on your to-do list.
                </p>

                <ul>
                  <li>Assembling flat packs</li>
                  <li>Wall hanging</li>
                  <li>Installing bath screens</li>
                  <li>Baby proofing solutions</li>
                  <li>Draft proofing</li>
                  <li>Installing toilet seats</li>
                  <li>Decorating services</li>
                  <li>Installing shelves</li>
                  <li>Tiling, grouting, and silicone services</li>
                  <li>Patch plastering</li>
                  <li>Garden maintenance</li>
                  <li>Installing fence panels</li>
                  <li>Handling curtains and blinds</li>
                  <li>Addressing handles and hinges</li>
                </ul>

                <h4>PRICES</h4>

                <ul>
                  <li>Minimum Call Out Charge: £75.00</li>
                  <li>Additional 30 Minutes: £37.50</li>
                  <li>Additional Hour: £75.00</li>
                  <li>After 5 PM per hour: £110.00</li>
                  <li>Day Rate: £375.00</li>
                </ul>
              </div>
              <div id="carpenter">
                {" "}
                <h3>CARPENTRY SERVICES</h3>
                <p>
                  Carpentry is a foundational trade in the building business,
                  and Loftmaker London ensures that all our carpenters have the
                  expertise and skills needed to execute their job to the
                  highest standards.
                </p>
                <ul>
                  <li>Installing shelves</li>
                  <li>Fitted wardrobe solutions</li>
                  <li>Hardwood flooring installation</li>
                  <li>Sanding and varnishing</li>
                  <li>Addressing Sash Windows repairs</li>
                  <li>Handling handles and hinges</li>
                  <li>Door hanging</li>
                  <li>Fixing floorboards and joists</li>
                  <li>Constructing partition walls</li>
                  <li>Installing stairs, bannisters, and handrails</li>
                  <li>Kitchen installation services</li>
                  <li>Securing property following break-ins</li>
                  <li>Assembling flat packs</li>
                </ul>
                <h4>PRICES</h4>
                <ul>
                  <li>Minimum Call Out Charge: £78.00</li>
                  <li>Additional 30 Minutes: £39.00</li>
                  <li>Additional Hour: £78.00</li>
                  <li>After 5 PM per hour: £115.00</li>
                  <li>Day Rate: £390.00</li>
                </ul>
              </div>
              <div id="tiler">
                <h3>TILING SERVICES</h3>
                <p>
                  Precision is key in executing tiling tasks to a high standard.
                  Tiling is a crucial trade that demands skill and expertise,
                  and at Loftmaker London, we entrust the task of tiling only to
                  experienced professionals.
                </p>

                <h3>Prices</h3>
                <ul>
                  <li>Minimum Call Out Charge: £75.00</li>
                  <li>Additional 30 Minutes: £37.50</li>
                  <li>Additional Hour: £75.00</li>
                  <li>After 5 PM per hour: £110.00</li>
                  <li>Day Rate: £375.00</li>
                </ul>
              </div>
              <div id="roofing">
                <h3>ROOFING SERVICES</h3>
                <p>
                  Loftmaker London has accredited roofers ready to perform
                  expert diagnostics and repairs. Whether you need emergency
                  roof repairs due to a leak or cracked guttering, or you're
                  planning a full roof replacement, Loftmaker London is here to
                  assist.
                </p>

                <h3>Roof Services Include:</h3>
                <ul>
                  <li>Roof repairs</li>
                  <li>Slating (man-made & natural)</li>
                  <li>Flat roof solutions</li>
                  <li>Balcony repairs</li>
                  <li>Pitched roof services</li>
                  <li>Cast Iron & PVC Guttering, Facias & Soffits</li>
                  <li>Loft conversions</li>
                  <li>Chimney repairs</li>
                  <li>Loft insulation services</li>
                  <li>Unblocking gutters and prevention</li>
                  <li>Lead work</li>
                  <li>Three-layer Asphalt covering</li>
                  <li>Skylight installation</li>
                  <li>Scaffolding services</li>
                  <li>Free Estimates</li>
                </ul>

                <h3>Prices</h3>
                <ul>
                  <li>Minimum Call Out Charge: £90.00</li>
                  <li>Additional 30 Minutes: £45.00</li>
                  <li>Additional Hour: £90.00</li>
                  <li>After 5 PM per hour: £160.00</li>
                  <li>Day Rate: £425.00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
