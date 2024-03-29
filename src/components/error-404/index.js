'use client'

import styles from './error-404.module.scss'
import { useState, useEffect } from 'react'
import getUrl from '../../helpers/getUrl'

export default function Error404() {

  const [data, setData] = useState()

  const getData = async () => {

    await fetch(getUrl('404.json')).then(response => response.json()).then(response => setData(response))
  }

  useEffect(() => {

    getData()

  }, [])

  return (

    data &&

    <div className={styles.root}>

      <a href={getUrl()} className={styles.root__title}>
        {data.title}
      </a>

      <p className={styles.root__message}>
        {data.message}
      </p>

      <a href={getUrl()} className={styles.root__link}>
        {data.link}
      </a>

    </div>

  )
}
