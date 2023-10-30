
import Head from 'next/head';
import './globals.css'
import Navbar from './navbar/page'
import { Analytics } from '@vercel/analytics/react';
import Script  from 'next/script';
export const metadata = {
  title: 'Loft Makers London Ltd',
  description: 'Loft Makers London Ltd',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DP4TSF0JWV">
      </Script>
      <Script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-DP4TSF0JWV');
      </Script>
      </Head>
      <body>
        <Navbar/>
          {children}
          <Analytics />
        </body>
    </html>
  )
}