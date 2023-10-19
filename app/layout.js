import './globals.css'

import { Inter } from 'next/font/google'
import Navbar from './navbar/page'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: 'Loft Makers London Ltd',
  description: 'Loft Makers London Ltd',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar/>{children}</body>
    </html>
  )
}