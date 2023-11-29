import './styles/global.scss'
import { Inter } from 'next/font/google'

const fonts = Inter({ subsets: ['latin'] })

export async function generateMetadata() {

  return fetch(`${process.env.BASE_URL}/meta.json`).then(response => response.json())
}

export default function Layout({ children }) {

  return (

    <html lang="en">

      <body className={fonts.className}>
        {children}
      </body>

    </html>
  )
}
