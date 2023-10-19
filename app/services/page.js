import Image from 'next/image'
import styles from './Service.module.css'
import Link from 'next/link'
import { Raleway } from 'next/font/google'
import { Oswald } from 'next/font/google';

const Oswald1 = Oswald({
    weight: '400',
    subsets: ['latin'],
  })
  
  const raleWay = Raleway({
    weight: '500',
    subsets: ['latin'],
  })
  
export default function Services() {
    return (
        <div className={raleWay.className}>
            <div className={styles.Header}>
            <h1 className={Oswald1.className} style={{textAlign: "center"}}>Services</h1>
            </div>
            
       <div className={styles.Container}>
        
        <div className={styles.Services}>
            <div className={styles.ServiceImage}>
                <Image  src="/En2AL/Loft2.jpg" blurDataURL="data:..."  placeholder="blur" fill={true}  alt="Bathroom Photo" />
            </div>
            <div className={styles.ServiceText}>
                <h2>Loft Extensions</h2>
                <p> we specialize in transforming attic spaces into functional living areas. Our expert team offers tailored services from design to finish, adding value and enhancing your home with quality craftsmanship. Trust us to make your loft a stunning extension of your home</p>
            </div>   
        </div>

        <div className={styles.Services}>
        <div className={styles.ServiceImage}>
                <Image  src="/Gallery/61.jpg" blurDataURL="data:..."  placeholder="blur" fill={true}  alt="Bathroom Photo" />
        </div> 
        <div className={styles.ServiceText}>
                <h2>Side Extension</h2>
                <p>Our side extension services are designed to maximize your living space while seamlessly blending with your existing home. With a focus on quality craftsmanship and innovative design, we create functional and aesthetically pleasing extensions tailored to your needs. Trust us to expand your living space, adding value and comfort to your property.</p>
        </div>
                           
        </div>

        <div className={styles.Services}>
            
            <div className={styles.ServiceImage}>
                <Image  src="/Gallery/Enfiled Fibre Glass Roof.jpg" blurDataURL="data:..."  placeholder="blur" fill={true}  alt="Bathroom Photo" />
            </div>
            
            <div className={styles.ServiceText}>
                <h2>GRP flat roof installation</h2>
                <p>Our GRP roofing solutions offer superior protection and durability for your property. With expert installation and top-quality materials, we guarantee a watertight and long-lasting roofing system that demands minimal maintenance. Rest easy knowing our GRP roofing can withstand the elements while enhancing your property's aesthetics.</p>
            </div>   
        </div>

        <div className={styles.Services}>
        <div className={styles.ServiceImage}>
                <Image  src="/Gallery/74.jpg" blurDataURL="data:..."  placeholder="blur" fill={true}  alt="Bathroom Photo" />
        </div>        

        <div className={styles.ServiceText}>
                <h2>Steel Installation</h2>
                <p>we excel in precision and strength. Our experienced team delivers efficient and reliable steel installations for various applications, ensuring structural integrity and safety. Whether it's for residential or commercial projects, trust us to provide robust steel solutions that meet your specific needs while adhering to industry standards.</p>
        </div>
        <Image  
                src="/En2aL/Loft.jpg"
                fill={true}
                className="landScape"
                style={{objectFit: "cover"}}
                alt="Picture of the author"
                />
                      
        </div>

       </div>
       </div>
       
    )};