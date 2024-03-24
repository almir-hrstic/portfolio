import styles from './navigation.module.scss'

export default function Navigation({ blocks, activeBlock }) {

  return (

    <div className={styles.root}>

      {

        blocks.map(({ id, title }, index) => (

          <a className={activeBlock !== index ? `${styles.root__link}` : `${styles.root__link} ${styles.root__link____active}`} href={`#${id}`} key={index}>
            {title}
          </a>

        ))
      }

    </div>
  )
}
