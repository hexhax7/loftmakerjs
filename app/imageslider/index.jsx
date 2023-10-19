// pages/index.js
import React from 'react'
import EmblaCarousel from './EmblaCarousel'

import './css/sandbox.css'
import './css/embla.css'

const OPTIONS = { dragFree: true, containScroll: 'trimSnaps' }
const SLIDE_COUNT = 21
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home = () => (
  <main className="sandbox">
    <section className="sandbox__carousel">
      <h2> Current project En2 </h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
)

export default Home
