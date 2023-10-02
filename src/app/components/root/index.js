import styles from './root.module.scss'
import { useState, useRef, useEffect } from 'react'

export default function Root({ children }) {

  const [mousePosition, setMousePosition] = useState()
  const root = useRef();

  const setScreenHeight = () => root.current.style.setProperty('--screen-height', `${window.innerHeight}px`)

  useEffect(() => {

    setScreenHeight()
    window.addEventListener('resize', () => setScreenHeight())
  })

  return (

    <div style={mousePosition?.top ? { background: ` radial-gradient(640px at ${mousePosition.left}px ${mousePosition.top}px, currentColor, transparent 75%)` } : null} ref={root} className={styles.main} onMouseMove={event => setMousePosition(window.innerWidth < 1024 ? null : { left: event.pageX, top: event.pageY })}>
      {children}
    </div>
  )
}