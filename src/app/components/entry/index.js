import styles from './entry.module.scss'
import Content from '../entry/content'

const Entry = ({ block }) => {

  return (

    !block.url

      ?

      <div className={styles.container}>
        <Content styles={styles} {...block} />
      </div>

      :

      <a href={block.url} target="_blank" className={`${styles.container} ${styles.container____link}`}>
        <Content styles={styles} {...block} />
      </a>

  )
}

export default Entry