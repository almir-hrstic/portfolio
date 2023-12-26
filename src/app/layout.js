import '../styles/layout.scss'
import { Inter } from 'next/font/google'

const fonts = Inter({ subsets: ['latin'] })

export const generateMetadata = async () => fetch(`${process.env.BASE_URL}/meta.json`).then(response => response.json())

export default function Layout({ children }) {

  return (

    <html lang="en">

      <head>

        <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.BASE_URL}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.BASE_URL}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.BASE_URL}/favicon-16x16.png`} />
        <link rel="manifest" href={`${process.env.BASE_URL}/site.webmanifest`} />
        <link rel="mask-icon" href={`${process.env.BASE_URL}/safari-pinned-tab.svg`} color="#092443" />
        <link rel="shortcut icon" href={`${process.env.BASE_URL}/favicon.ico`} />

        <meta name="msapplication-TileColor" content="#092443" />
        <meta name="msapplication-config" href={`${process.env.BASE_URL}/browserconfig.xml`} />
        <meta name="theme-color" content="#092443" />

      </head>

      <body className={fonts.className}>
        {children}
      </body>

    </html>
  )
}
