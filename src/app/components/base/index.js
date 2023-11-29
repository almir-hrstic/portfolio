import styles from './base.module.scss'
import { useState, useRef, useEffect } from 'react'

export default function Base({ children }) {

  const [mousePosition, setMousePosition] = useState()
  const base = useRef()

  const setScreenHeight = () => base.current.style.setProperty('--screen-height', `${window.innerHeight}px`)

  const getMousePosition = (event = null) => {

    if (window.innerWidth < 1024) setMousePosition(null)
    else if (event) setMousePosition({ horizontal: event.pageX, vertical: event.pageY })
  }

  const triggerMousePosition = () => {

    if (!mousePosition) {

      base.current.style.removeProperty('background')

    } else {

      base.current.style.setProperty(

        'background',
        `radial-gradient(640px at ${mousePosition.horizontal}px ${mousePosition.vertical}px, var(--color-blue-light), transparent 75%)`
      )
    }
  }

  useEffect(() => {

    setScreenHeight()

    window.addEventListener('resize', () => {

      setScreenHeight()
      getMousePosition()
    })

  }, [])

  useEffect(() => triggerMousePosition(), [mousePosition])

  return (

    <div className={styles.root} ref={base} onMouseMove={event => getMousePosition(event)}>
      {children}
    </div>
  )
}