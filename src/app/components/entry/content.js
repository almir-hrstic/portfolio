import Link from '../../icons/link'

const Content = ({ url, overline, title, description, tags, styles }) => {

  return (

    <>

      {

        (overline || title) &&

        <div className={styles.main__header}>

          {

            overline &&

            <span className={styles.main__overline}>
              {overline}
            </span>

          }

          {

            title &&

            <div className={styles.main__headline}>

              {
                url && <Link />
              }

              <span className={styles.main__title}>
                {title}
              </span>

            </div>

          }

        </div>
      }

      {

        description &&

        <p className={styles.main__description}>
          {description}
        </p>

      }

      {

        !!tags?.length &&

        <div className={styles.main__tags}>

          {

            tags.map((tag, index) => (

              <span key={index} className={styles.main__tag}>
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
