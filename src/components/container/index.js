'use client'

import styles from './container.module.scss'
import { useRef, useEffect } from 'react'

import debounce from '../../helpers/debounce'
import resized from '../../helpers/resized'

export default function Container({ children }) {

  const root = useRef()

  const setScreenHeight = () => root.current.style.setProperty('--screen-height', `${window.innerHeight - .01}px`)

  const setResize = debounce(() => {

    if (!resized()) return false

    setScreenHeight()
  })

  useEffect(() => {

    setScreenHeight()
    window.addEventListener('resize', setResize)

    return () => window.removeEventListener('resize', setResize)

  }, [])

  return (

    <div className={styles.root} ref={root}>
      {children}
    </div>
  )
}