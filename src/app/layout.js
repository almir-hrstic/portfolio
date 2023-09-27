import './styles/globals.scss'
import styles from './styles/portfolio.module.scss'

import { Inter } from 'next/font/google'

const fonts = Inter({ subsets: ['latin'] })

export async function generateMetadata({params}) {

  const data = await fetch(`${process.env.BASE_URL}/meta.json`).then(response => response.json())

  return {

    title: data.title,
    description: data.description
  }
}

export default function Layout({ children }) {

  return (

    <html lang="en">

      <body className={fonts.className}>

        <div className={styles.root}>
          {children}
        </div>

      </body>

    </html>
  )
}
