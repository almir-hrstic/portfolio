import styles from '../styles/not-found.module.scss'
import Container from "../components/container"

export const metadata = { title: 'Page not found' }

export default function NotFound() {

  return (

    <Container>

      <div className={styles.root}>

        <a href={process.env.BASE_URL} className={styles.root__title}>
          404
        </a>

        <p className={styles.root__message}>
          Page not found.
        </p>

        <a href={process.env.BASE_URL} className={styles.root__link}>
          Back home
        </a>

      </div>

    </Container>
  )
}
