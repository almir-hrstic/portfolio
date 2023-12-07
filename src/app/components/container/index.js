import styles from './root.module.scss'
import { debounce } from '../../helpers'
import { useState, useRef, useEffect } from 'react'

export default function Container({ children }) {

  const [mousePosition, setMousePosition] = useState()
  const root = useRef()

  const setScreenHeight = () => root.current.style.setProperty('--screen-height', `${Math.floor(window.innerHeight)}px`)

  const getMousePosition = (event = null) => {

    if (window.innerWidth < 1024) setMousePosition(null)
    else if (event) setMousePosition({ x: event.pageX, y: event.pageY })
  }

  const triggerMousePosition = () => {

    if (!mousePosition) {

      root.current.style.removeProperty('background')

    } else {

      root.current.style.setProperty(

        'background',
        `radial-gradient(640px at ${mousePosition.x}px ${mousePosition.y}px, var(--color-blue-light), transparent 75%)`
      )
    }
  }

  useEffect(() => {

    setScreenHeight()

    window.addEventListener('resize', debounce(() => {

      setScreenHeight()
      getMousePosition()
    }))

  }, [])

  useEffect(() => triggerMousePosition(), [mousePosition])

  return (

    <div className={styles.root} ref={root} onMouseMove={event => getMousePosition(event)}>
      {children}
    </div>
  )
}