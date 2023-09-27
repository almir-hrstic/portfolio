import styles from '.././styles/portfolio.module.scss'
import { useState } from 'react'

export default function Main({ children }) {

  const [mousePosition, setMousePosition] = useState()

  return (

    <div style={mousePosition?.top ? { background: ` radial-gradient(640px at ${mousePosition.left}px ${mousePosition.top}px, currentColor, transparent 75%)` } : null} className={styles.main} onMouseMove={event => setMousePosition(window.innerWidth >= 1024 ? { left: event.pageX, top: event.pageY } : null)} >

      <div className={styles.container}>
        {children}
      </div>

    </div>
  )
}3