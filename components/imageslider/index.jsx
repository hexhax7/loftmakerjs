// pages/index.js
import React from 'react'
import EmblaCarousel from './emblaCarousel'
import { Oswald } from "next/font/google";

const Oswald1 = Oswald({
  weight: "400",
  subsets: ["latin"],
});
import './css/sandbox.css'
import './css/embla.css'

const OPTIONS = { dragFree: true, containScroll: 'trimSnaps' }
const SLIDE_COUNT = 21
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home = () => (
  <main className="sandbox">
    <section className="sandbox__carousel">
      <h2 className={Oswald1.className}> EN 2 || project</h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
)

export default Home
