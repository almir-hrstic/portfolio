import Link from '../../icons/link'

const Content = ({ url, overline, title, description, tags, styles }) => {

  return (

    <>

      {

        (overline || title) &&

        <div className={styles.root__header}>

          {

            overline &&

            <span className={styles.root__overline}>
              {overline}
            </span>

          }

          {

            title &&

            <div className={styles.root__headline}>

              {
                url && <Link />
              }

              <span className={styles.root__title}>
                {title}
              </span>

            </div>

          }

        </div>
      }

      {

        description &&

        <p className={styles.root__description}>
          {description}
        </p>

      }

      {

        !!tags?.length &&

        <div className={styles.root__tags}>

          {

            tags.map((tag, index) => (

              <span key={index} className={styles.root__tag}>
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
