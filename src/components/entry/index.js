import styles from './entry.module.scss'
import Content from './content'

export default function Entry({ entry }) {

  return (

    !entry.url

      ?

      <div className={styles.root}>
        <Content styles={styles} {...entry} />
      </div>

      :

      <a href={entry.url} target="_blank" className={`${styles.root} ${styles.root____link}`}>
        <Content styles={styles} {...entry} />
      </a>
  )
}
