import React from 'react'

const Block = ({ overline, title, description, tags, styles }) => {

  return (

    <React.Fragment>

      <div className={styles.block__headline}>

        {

          !!overline &&

          <span className={styles.block__overline}>
            {overline}
          </span>

        }

        <span className={styles.block__title}>
          {title}
        </span>

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
