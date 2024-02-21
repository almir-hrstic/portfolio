'use client'

import styles from './container.module.scss'
import { useRef, useEffect } from 'react'

import debounce from '../../helpers/debounce'
import resized from '../../helpers/resized'

export default function Container({ children }) {

  const root = useRef()

  const setScreenHeight = () => {

    root.current.style.removeProperty('--screen-height')
    root.current.style.setProperty('--screen-height', `${root.current.getBoundingClientRect().height.toFixed(1)}px`)
  }

  const setResize = debounce(() => {

    if (!resized()) return false

    setScreenHeight()
  })

  useEffect(() => {

    window.addEventListener('resize', setResize)
    setScreenHeight()

    return () => window.removeEventListener('resize', setResize)

  }, [])

  return (

    <div className={styles.root} ref={root}>
      {children}
    </div>
  )
}