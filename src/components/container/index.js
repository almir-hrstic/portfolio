'use client'

import styles from './container.module.scss'
import { useRef, useEffect } from 'react'

import debounce from '../../helpers/debounce'
import resized from '../../helpers/resized'

export default function Container({ children }) {

  const root = useRef()

  const setScreenHeight = () => root.current.style.setProperty('--screen-height', `${window.innerHeight - .01}px`)
  const clearMousePosition = () => window.innerWidth >= 1024 ? false : root.current.style.removeProperty('background')

  const setMousePosition = (event) => {

    if (window.innerWidth < 1024) return false

    root.current.style.setProperty(

      'background',
      `radial-gradient(640px at ${event.pageX}px ${event.pageY}px, var(--color-blue-light), transparent 75%)`
    )
  }

  const setResize = debounce(() => {

    if (!resized()) return false

    setScreenHeight()
    clearMousePosition()
  })

  useEffect(() => {

    setScreenHeight()
    window.addEventListener('resize', setResize)

    return () => window.removeEventListener('resize', setResize)

  }, [])

  return (

    <div className={styles.root} ref={root} onMouseMove={event => setMousePosition(event)}>
      {children}
    </div>
  )
}