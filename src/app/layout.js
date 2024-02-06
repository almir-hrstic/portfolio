import { Inter } from 'next/font/google'
import '../styles/layout.scss'
import getUrl from '../helpers/getUrl'

const fonts = Inter({ subsets: ['latin'] })

export const generateMetadata = async () => await fetch(getUrl('meta.json')).then(response => response.json())

export default function Layout({ children }) {

  return (

    <html lang="en">

      <head>

        <link rel="apple-touch-icon" sizes="180x180" href={getUrl('apple-touch-icon.png')} />
        <link rel="icon" type="image/png" sizes="32x32" href={getUrl('favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={getUrl('favicon-16x16.png')} />
        <link rel="manifest" href={getUrl('site.webmanifest')} />
        <link rel="mask-icon" href={getUrl('safari-pinned-tab.svg')} color="#06182d" />
        <link rel="shortcut icon" href={getUrl('favicon.ico')} />

        <meta name="msapplication-TileColor" content="#06182d" />
        <meta name="msapplication-config" href={getUrl('browserconfig.xml')} />
        <meta name="theme-color" content="#06182d" />

      </head>

      <body className={fonts.className}>
        {children}
      </body>

    </html>
  )
}
