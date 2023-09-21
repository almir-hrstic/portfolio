import Content from '../block/content'

const Block = ({ block, styles }) => {

  return (

    !block.url

      ?

      <div className={styles.block}>
        <Content styles={styles} {...block} />
      </div>

      :

      <a target="_blank" href={block.url} className={`${styles.block} ${styles.block____link}`}>
        <Content styles={styles} {...block} />
      </a>

  )
}

export default Block