import styles from './entry.module.scss'
import Content from '../entry/content'

const Entry = ({ block }) => {

  return (

    !block.url

      ?

      <div className={styles.root}>
        <Content styles={styles} {...block} />
      </div>

      :

      <a target="_blank" href={block.url} className={`${styles.root} ${styles.root____link}`}>
        <Content styles={styles} {...block} />
      </a>

  )
}

export default Entry