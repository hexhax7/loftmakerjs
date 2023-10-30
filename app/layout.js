
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
 
      <body>
        <Navbar/>
          {children}
          <Analytics />
        </body>
    </html>
  )
}