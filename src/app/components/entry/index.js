import styles from './entry.module.scss'
import Content from '../entry/content'

const Entry = ({ entry }) => {

  return (

    !entry.url

      ?

      <div className={styles.container}>
        <Content styles={styles} {...entry} />
      </div>

      :

      <a href={entry.url} target="_blank" className={`${styles.container} ${styles.container____link}`}>
        <Content styles={styles} {...entry} />
      </a>

  )
}

export default Entry