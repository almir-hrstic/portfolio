import Link from '../../icons/link'

const Content = ({ url, overline, title, description, tags, styles }) => {

  return (

    <>

      {

        (overline || title) &&

        <div className={styles.block__header}>

          {

            overline &&

            <span className={styles.block__overline}>
              {overline}
            </span>

          }

          {

            title &&

            <div className={styles.block__headline}>

              {
                url && <Link />
              }

              <span className={styles.block__title}>
                {title}
              </span>

            </div>

          }

        </div>
      }

      {

        description &&

        <p className={styles.block__description}>
          {description}
        </p>

      }

      {

        !!tags?.length &&

        <div className={styles.block__tags}>

          {

            tags.map((tag, index) => (

              <span key={index} className={styles.block__tag}>
                {tag}
              </span>

            ))
          }

        </div>

      }

    </>
  )
}

export default Content
