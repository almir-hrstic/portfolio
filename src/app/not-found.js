'use client'

import styles from './styles/portfolio.module.scss'

import { useState, useEffect } from 'react'
import Main from './components/main'

export default function NotFound() {

  const [data, setData] = useState()

  useEffect(() => {

    fetch(`${process.env.BASE_URL}/404.json`).then(response => response.json()).then(response => setData(response))

  }, [])

  return (

    <Main>

      <div className={styles.error_404}>

        {

          data &&

          <>

            <a href={process.env.BASE_URL} className={styles.error_404__title}>
              {data.title}
            </a>

            <div className={styles.error_404__content}>

              <span>{data.subtitle}</span>

              <div>

                <span>
                  {data.message}
                </span>

                <a href={process.env.BASE_URL} className={styles.error_404__link}>
                  {data.link_label}
                </a>

              </div>

            </div>

          </>

        }

      </div>

    </Main>

  )
}