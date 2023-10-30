
import Head from 'next/head';
import './globals.css'
import Navbar from './navbar/page'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Loft Makers London Ltd',
  description: 'Loft Makers London Ltd',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-DP4TSF0JWV">
      </script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-DP4TSF0JWV');
      </script>
      </Head>
      <body>
        <Navbar/>
          {children}
          <Analytics />
        </body>
    </html>
  )
}