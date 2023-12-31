import { Inter } from 'next/font/google'
import '../styles/layout.scss'

const fonts = Inter({ subsets: ['latin'] })


export default function Layout({ children }) {

  return (

    <html lang="en">

      <head>

        <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.BASE_URL}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.BASE_URL}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.BASE_URL}/favicon-16x16.png`} />
        <link rel="manifest" href={`${process.env.BASE_URL}/site.webmanifest`} />
        <link rel="mask-icon" href={`${process.env.BASE_URL}/safari-pinned-tab.svg`} color="#06182d" />
        <link rel="shortcut icon" href={`${process.env.BASE_URL}/favicon.ico`} />

        <meta name="msapplication-TileColor" content="#06182d" />
        <meta name="msapplication-config" href={`${process.env.BASE_URL}/browserconfig.xml`} />
        <meta name="theme-color" content="#06182d" />

      </head>

      <body className={fonts.className}>
        {children}
      </body>

    </html>
  )
}
