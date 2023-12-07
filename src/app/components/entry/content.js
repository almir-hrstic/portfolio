import Link from '../../icons/link'

const Content = ({ url, overline, title, description, tags, styles }) => {

  return (

    <>

      {

        overline &&

        <p className={styles.root__overline}>
          {overline}
        </p>

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

              <span className={styles.root__tag} key={index} >
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
