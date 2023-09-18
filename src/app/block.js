import React from 'react'
import Link from './icons/link'

const Block = ({ url, overline, title, description, tags, styles }) => {

  return (

    <React.Fragment>

      <div className={styles.block__header}>

        {

          !!overline &&

          <span className={styles.block__overline}>
            {overline}
          </span>

        }

        <div className={styles.block__headline}>

          {
            url && <Link />
          }

          <span className={styles.block__title}>
            {title}
          </span>

        </div>

      </div>

      {

        !!description &&

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

    </React.Fragment>
  )
}

export default Block
