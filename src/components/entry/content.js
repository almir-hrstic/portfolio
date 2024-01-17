import Link from '../../icons/link'

export default function Content({ url, overline, title, description, tags, styles }) {

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

        <p className={styles.root__headline}>

          {
            url && <Link />
          }

          {title}

        </p>

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

              <span className={styles.root__tag} key={index}>
                {tag}
              </span>

            ))
          }
          
        </div>

      }

    </>
  )
}
