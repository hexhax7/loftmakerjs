import Image from "next/image";
import style from "./reviews.module.css";
import Link from "next/link";

import { Raleway } from "next/font/google";
import { Oswald } from "next/font/google";

const Oswald1 = Oswald({
  weight: "400",
  subsets: ["latin"],
});
const raleWay = Raleway({
  weight: "500",
  subsets: ["latin"],
});

export default function Reviews() {
  return (
    <div className={raleWay.className}>
      <div className={style.reviews}>
        <h1 className={Oswald1.className}>Testimonials</h1>
        <div className={style.testimonials}>
          <div className={style.card}>
            <h3>John</h3>

            <p>
              "Craig is great to work with. He is trustworthy and reliable. He
              has done quite a bit of work for me and is always on hand to help
              out with issues whether they are small or large. Craig completed a
              high quality loft extension and kitchen remodel for me a couple of
              years ago and he has always been available to come back to house
              to sort out any issues. Loftmaker provides a complete service and
              doesn't forget you once they have completed a job."
            </p>
          </div>

          <div className={style.card}>
            <h3>Robert</h3>

            <p>
              "I am delighted with my experience with Loft Makers London. Craig
              and his team provided a friendly and skillful loft conversion
              service. The loft extension and kitchen remodel they completed
              were of excellent quality."
            </p>
          </div>

          <div className={style.card}>
            <h3>Mary </h3>

            <p>
              "Upon the recommendation of a friend, we decided to hire Loft
              Makers London for a side extension and kitchen installation
              project. Loft Makers proved to be an excellent choice, as they not
              only adhered to the original timeframe but also delivered
              exceptional quality throughout the project. The on-site team was
              consistently friendly and punctual, starting work at 8 am every
              morning and ensuring a clean and tidy site every night, a detail
              that we greatly appreciate. Furthermore, Craig's post-project
              support has provided us with peace of mind, knowing that he is
              readily available and just a phone call away."
            </p>
          </div>
          <div className={style.card}>
            <h3>Martin</h3>

            <p>
              "Craig and the Loft Makers London team transformed our loft into a
              stunning living space. Their dedication to reliability and
              hardwork were evident throughout the project. The result aligns
              perfectly with our vision, and we highly recommend their
              services."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
