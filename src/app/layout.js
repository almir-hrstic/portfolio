import './styles/globals.scss'
import { Inter } from 'next/font/google'

const fonts = Inter({ subsets: ['latin'] })

export async function generateMetadata() {

  const data = await fetch(`${process.env.BASE_URL}/meta.json`).then(response => response.json())
  return { title: data.title, description: data.description }
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
