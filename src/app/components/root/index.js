import styles from './root.module.scss'
import { useState, useRef, useEffect } from 'react'

export default function Root({ children }) {

  const [mousePosition, setMousePosition] = useState()
  const root = useRef()

  const setScreenHeight = () => root.current.style.setProperty('--screen-height', `${window.innerHeight}px`)

  const getMousePosition = (event = null) => {

    if (window.innerWidth < 1024) setMousePosition(null)
    else if (event) setMousePosition({ horizontal: event.pageX, vertical: event.pageY })
  }

  const triggerMousePosition = () => {

    if (!mousePosition) {

      root.current.style.removeProperty('background')

    } else {

      root.current.style.setProperty(

        'background',
        `radial-gradient(640px at ${mousePosition.horizontal}px ${mousePosition.vertical}px, currentColor, transparent 75%)`
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

    <div className={styles.main} ref={root} onMouseMove={event => getMousePosition(event)}>
      {children}
    </div>
  )
}