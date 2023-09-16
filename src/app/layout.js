import './styles/globals.scss'
import { Inter } from 'next/font/google'
import data from './data'

const fonts = Inter({ subsets: ['latin'] })

export const metadata = { title: data.meta.title, description: data.meta.description }

export default function Layout({ children }) {

  return (

    <html lang="en">

      <body className={fonts.className}>
        {children}
      </body>

    </html>
  )
}
