import styles from './container.module.scss'
import { debounce } from '../../helpers'
import { useRef, useEffect } from 'react'

export default function Container({ children }) {

  const root = useRef()

  const setScreenHeight = () => root.current.style.setProperty('--screen-height', `${window?.innerHeight - .01}px`)

  const clearMousePosition = () => {

    if (window.innerWidth < 1024) root.current.style.removeProperty('background')
  }

  const setMousePosition = (event) => {

    if (window.innerWidth >= 1024) {

      root.current.style.setProperty(

        'background',
        `radial-gradient(640px at ${event.pageX}px ${event.pageY}px, var(--color-blue-light), transparent 75%)`
      )
    }
  }

  useEffect(() => {

    setScreenHeight()

    window.addEventListener('resize', debounce(() => {

      setScreenHeight()
      clearMousePosition()

    }))

  }, [])

  return (

    <div className={styles.root} ref={root} onMouseMove={event => setMousePosition(event)}>
      {children}
    </div>
  )
}