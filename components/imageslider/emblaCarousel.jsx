import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import imageByIndex from './imageByIndex'
import Image from 'next/image'
const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Image
              loading="lazy"
              src={imageByIndex(index)}
              blurDataURL="data:..."
              placeholder="blur"
              height={600}
              width={800}
              style={{ objectFit: "cover" }}
              alt="Bathroom Photo"
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
