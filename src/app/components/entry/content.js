import Link from '../../icons/link'

const Content = ({ url, overline, title, description, tags, styles }) => {

  return (

    <>

      {

        overline &&

        <p className={styles.container__overline}>
          {overline}
        </p>

      }

      {

        title &&

        <div className={styles.container__headline}>

          {
            url && <Link />
          }

          <span className={styles.container__title}>
            {title}
          </span>

        </div>

      }

      {

        description &&

        <p className={styles.container__description}>
          {description}
        </p>

      }

      {

        !!tags?.length &&

        <div className={styles.container__tags}>

          {

            tags.map((tag, index) => (

              <span className={styles.container__tag} key={index} >
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
