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

            <a href={process.env.BASE_URL} className={styles.container__title}>
              {data.title}
            </a>

            <p className={styles.container__subtitle}>
              {data.subtitle}
            </p>

            <div className={styles.container__return}>

              <span className={styles.container__message}>
                {data.message}
              </span>

              <a href={process.env.BASE_URL} className={styles.container__link}>
                {data.link}
              </a>

            </div>

          </>

        }

      </div>

    </Root>

  )
}