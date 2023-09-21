import './styles/globals.scss'
import { Inter } from 'next/font/google'

const fonts = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {

  return (

    <html lang="en">

      <body className={fonts.className}>
        {children}
      </body>

    </html>
  )
}
