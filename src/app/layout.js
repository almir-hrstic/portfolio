import './styles/global.scss'
import { Inter } from 'next/font/google'

const fonts = Inter({ subsets: ['latin'] })

export async function generateMetadata() {

  return fetch(`${process.env.BASE_URL}/meta.json`).then(response => response.json())
}

export default function Layout({ children }) {

  return (

    <html lang="en">

      <head>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#092443" />

        <meta name="msapplication-TileColor" content="#092443" />
        <meta name="theme-color" content="#092443" />

      </head>

      <body className={fonts.className}>
        {children}
      </body>

    </html>
  )
}
