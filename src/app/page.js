'use client'

import styles from './styles/page.module.scss'
import React, { useState, useRef, useEffect } from 'react'

import Root from './components/root'
import Entry from './components/entry/index'

import Email from './icons/e-mail'
import LinkedIn from './icons/linkedin'
import GitHub from './icons/github'
import Facebook from './icons/facebook'

export default function Page() {

  const [data, setData] = useState()
  const [activeBlock, setActiveBlock] = useState()

  const blocks = useRef([])
  const icons = { email: Email, github: GitHub, linkedin: LinkedIn, facebook: Facebook }

  const getActiveBlock = () => {

    blocks.current.forEach(block => {

      if (block.children[0].getBoundingClientRect().top === 0) setActiveBlock(block.id)
    })
  }

  useEffect(() => {

    fetch(`${process.env.BASE_URL}/data.json`).then(response => response.json()).then(response => setData(response))

  }, [])

  useEffect(() => {

    if (window.location.hash) {

      for (let i = 0; i < blocks.current.length; i++) {

        if (blocks.current[i].id === window.location.hash.substring(1)) {

          window.scrollTo({

            top: window.innerWidth < 1024 ? blocks.current[i].offsetTop : blocks.current[i].offsetTop - 90
          })

          break
        }
      }
    }

  }, [data])

  useEffect(() => window.addEventListener('scroll', () => getActiveBlock()), [blocks])

  return (

    <Root>

      <div className={styles.main}>

        <div className={styles.container}>

          {

            data &&

            <div className={styles.content}>

              <div className={styles.header}>

                <div className={styles.lead}>

                  <div className={styles.lead__headline}>

                    <a href={process.env.BASE_URL} className={styles.lead__title}>
                      {data.header.title}
                    </a>

                    <span className={styles.lead__subtitle}>
                      {data.header.subtitle}
                    </span>

                  </div>

                  <p className={styles.lead__description}>
                    {data.header.description}
                  </p>

                </div>

                <div className={styles.contact}>

                  {

                    data.header.contact.map(({ url, icon }, index) => (

                      <a target="_blank" key={index} href={url} className={styles.contact__link}>
                        {React.createElement(icons[icon])}
                      </a>

                    ))
                  }

                </div>

              </div>

              <div className={styles.blocks}>

                {

                  data.blocks.map(({ url, title, content }, index) => (

                    <div key={index} id={url} className={activeBlock !== url ? styles.block : `${styles.block} ${styles.block____active}`} ref={block => blocks.current[index] = block}>

                      <div className={styles.block__headline}>

                        <a href={`#${url}`} className={styles.block__title}>
                          {title}
                        </a>

                      </div>

                      <div className={styles.block__entries}>

                        {

                          content.map((block, index) => (

                            <Entry key={index} block={block} />
                          ))
                        }

                      </div>

                    </div>

                  ))
                }

              </div>

            </div>

          }

        </div>

      </div>

    </Root>

  )
}
