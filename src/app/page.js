'use client'

import styles from './styles/page.module.scss'
import React, { useState, useRef, useEffect } from 'react'
import { setup } from './helpers'

import Container from './components/container'
import Entry from './components/entry/index'

import Email from './icons/e-mail'
import CV from './icons/cv'
import LinkedIn from './icons/linkedin'

export default function Page() {

  const [data, setData] = useState()
  const [activeBlock, setActiveBlock] = useState()

  const blocks = useRef([])
  const icons = { email: Email, cv: CV, linkedin: LinkedIn }

  const getData = () => {

    fetch(`${process.env.BASE_URL}/data.json`).then(response => response.json()).then(response => setData(response))
  }

  const getActiveBlock = () => {

    blocks.current.forEach(block => block.children[0].getBoundingClientRect().top > 1 ? false : setActiveBlock(block.id))
  }

  const updateActiveBlock = () => {

    if (!window.location.hash) return false

    for (let i = 0; i < blocks.current.length; i++) {

      if (blocks.current[i].id !== window.location.hash.substring(1)) continue

      window.scrollTo({ top: window.innerWidth < 1024 ? blocks.current[i].offsetTop : blocks.current[i].offsetTop - 90 })
      break
    }
  }

  useEffect(() => {

    setup()
    getData()

  }, [])

  useEffect(() => {

    if (!data) return () => false

    updateActiveBlock()
    window.addEventListener('scroll', getActiveBlock)

    return () => window.removeEventListener('scroll', getActiveBlock)

  }, [data])

  return (

    <Container>

      <div className={styles.root}>

        {

          data &&

          <>

            <div className={styles.header}>

              <a href={process.env.BASE_URL} className={styles.header__title}>
                {data.header.title}
              </a>

              <p className={styles.header__subtitle}>
                {data.header.subtitle}
              </p>

              <p className={styles.header__description}>
                {data.header.description}
              </p>

              <div className={styles.contact}>

                {

                  data.header.contact.map(({ url, label, icon }, index) => (

                    <a href={url} target="_blank" className={styles.contact__link} aria-label={label} key={index}>
                      {React.createElement(icons[icon])}
                    </a>

                  ))
                }

              </div>

            </div>

            <div className={styles.blocks}>

              {

                data.blocks.map(({ id, title, entries }, index) => (

                  <div id={id} className={activeBlock !== id ? `${styles.block}` : `${styles.block} ${styles.block____active}`} ref={block => blocks.current[index] = block} key={index}>

                    <div className={styles.block__headline}>

                      <a href={`#${id}`} className={styles.block__title}>
                        {title}
                      </a>

                    </div>

                    <div className={styles.block__entries}>

                      {

                        entries.map((entry, index) => (

                          <Entry entry={entry} key={index} />
                        ))
                      }

                    </div>

                  </div>

                ))
              }

            </div>

          </>

        }

      </div>

    </Container>

  )
}
