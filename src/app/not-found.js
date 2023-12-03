'use client'

import styles from './styles/not-found.module.scss'
import { useState, useEffect } from 'react'
import Root from './components/root'

export default function NotFound() {

  const [data, setData] = useState()

  useEffect(() => {

    fetch(`${process.env.BASE_URL}/404.json`).then(response => response.json()).then(response => setData(response))

  }, [])

  return (

    <Root>

      <div className={styles.container}>

        {

          data &&

          <>

            <a href={process.env.BASE_URL} className={`${styles.container__title} text-80-semi-bold`}>
              {data.title}
            </a>

            <p className={`${styles.container__subtitle} text-20-medium`}>
              {data.subtitle}
            </p>

            <a href={process.env.BASE_URL} className={`${styles.container__link} text-20-medium`}>
              {data.message}
            </a>

          </>

        }

      </div>

    </Root>

  )
}