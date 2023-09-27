'use client'

import styles from './styles/portfolio.module.scss'

import React from 'react'
import { useState, useRef, useEffect } from 'react'

import Main from './components/main'
import Block from './components/block/index'

import Email from './icons/e-mail'
import LinkedIn from './icons/linked-in'
import Github from './icons/github'
import Facebook from './icons/facebook'

export default function Page() {

  const [data, setData] = useState()
  const [activeUrl, setActiveUrl] = useState()

  const navigation = useRef([])
  const icons = { email: Email, github: Github, linkedin: LinkedIn, facebook: Facebook }

  useEffect(() => {

    fetch(`${process.env.BASE_URL}/data.json`).then(response => response.json()).then(response => setData(response))

  }, [])

  useEffect(() => {

    if (window.location.hash) {

      const element = document.getElementById(window.location.hash.substring(1))
      if (element) window.scrollTo({ top: window.innerWidth < 1024 ? element.offsetTop : element.offsetTop - 90 })
    }

  }, [data])

  useEffect(() => {

    window.addEventListener('scroll', () => navigation.current.forEach(link => {

      if (link.getBoundingClientRect().top === 0) setActiveUrl(link.parentElement.id)
    }))

  }, [navigation])

  return (

    <Main>

      {

        data &&

        <>

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

          <div className={styles.content}>

            {

              data.blocks.map(({ url, title, content }, index) => (

                <div key={index} id={url} className={styles.blocks} >

                  <div className={`${activeUrl !== url ? styles.blocks__headline : `${styles.blocks__headline} ${styles.blocks__headline____active}`}`} ref={element => navigation.current[index] = element}>

                    <a href={`#${url}`} className={styles.blocks__title}>
                      {title}
                    </a>

                  </div>

                  <div className={styles.blocks__content}>

                    {

                      content.map((block, index) => (

                        <Block key={index} block={block} styles={styles} />
                      ))
                    }

                  </div>

                </div>

              ))
            }

          </div>

        </>

      }

    </Main>

  )
}
