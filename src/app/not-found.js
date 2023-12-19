'use client'

import styles from './styles/not-found.module.scss'
import { useState, useEffect } from 'react'
import Container from './components/container'

export default function NotFound() {

  const [data, setData] = useState()

  const getData = () => {

    fetch(`${process.env.BASE_URL}/404.json`).then(response => response.json()).then(response => setData(response))
  }

  useEffect(() => getData(), [])

  return (

    <Container contain>

      <div className={styles.root}>

        {

          data &&

          <>

            <a href={process.env.BASE_URL} className={styles.root__title}>
              {data.title}
            </a>

            <p className={styles.root__subtitle}>
              {data.subtitle}
            </p>

            <a href={process.env.BASE_URL} className={styles.root__link}>
              {data.message}
            </a>

          </>

        }

      </div>

    </Container>

  )
}