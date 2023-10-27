import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { Oswald } from 'next/font/google';

const Oswald1 = Oswald({
    weight: '400',
    subsets: ['latin'],
  })
  
export default function Navbar() {
    return (
        <div className={Oswald1.className}>
                <nav className={styles.Nav}>
                    <Link style={{margin: "1%"}} href={"/"}><Image
                src="/3.png"
                width={100}
                height={100}
                
                alt="Picture of the author"
                /></Link>
            
            
            <ul className={styles.Links}>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/Gallery"} >Gallery</Link>
                </li>
                <li>
                    <Link href={"/#About"} >About</Link>
                </li>
               
                <li>
                    <Link href={"/#Footer"}>Contact</Link>
                </li>
            </ul>
        </nav>
        </div>
        
    )};