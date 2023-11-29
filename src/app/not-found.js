'use client'

import styles from './styles/not-found.module.scss'
import { useState, useEffect } from 'react'
import Base from './components/base'

export default function NotFound() {

  const [data, setData] = useState()

  useEffect(() => {

    fetch(`${process.env.BASE_URL}/404.json`).then(response => response.json()).then(response => setData(response))

  }, [])

  return (

    <Base>

      <div className={styles.root}>

        <div className={styles.container}>

          <div className={styles.entry}>

            {

              data &&

              <>

                <a href={process.env.BASE_URL} className={styles.entry__title}>
                  {data.title}
                </a>

                <div className={styles.entry__content}>

                  <span>
                    {data.subtitle}
                  </span>

                  <div>

                    <span>
                      {data.message}
                    </span>

                    <a href={process.env.BASE_URL} className={styles.entry__link}>
                      {data.link}
                    </a>

                  </div>

                </div>

              </>

            }

          </div>

        </div>

      </div>

    </Base>

  )
}