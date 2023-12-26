import styles from './entry.module.scss'
import Content from './content'

const Entry = ({ entry }) => {

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

export default Entry