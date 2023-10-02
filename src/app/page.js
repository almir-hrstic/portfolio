'use client'

import styles from './styles/page.module.scss'
import React, { useState, useEffect, useRef } from 'react'

import Root from './components/root'
import Entry from './components/entry/index'

import Email from './icons/e-mail'
import LinkedIn from './icons/linkedin'
import GitHub from './icons/github'
import Facebook from './icons/facebook'

export default function Page() {

  const [data, setData] = useState()
  const [activeLink, setActiveLink] = useState()

  const links = useRef([])
  const icons = { email: Email, github: GitHub, linkedin: LinkedIn, facebook: Facebook }

  useEffect(() => {

    fetch(`${process.env.BASE_URL}/data.json`).then(response => response.json()).then(response => setData(response))

  }, [])

  useEffect(() => {

    if (window.location.hash) {

      const element = document.getElementById(window.location.hash.substring(1))
      if (element) window.scrollTo({ top: window.innerWidth < 1024 ? element.offsetTop : element.offsetTop - 90 })
    }

  }, [data])

  useEffect(() => window.addEventListener('scroll', () => links.current.forEach(link => {

    if (link.getBoundingClientRect().top === 0) setActiveLink(link.parentElement.id)

  })), [links])

  return (

    <Root>

      <div className={styles.main}>

        <div className={styles.container}>

          <div className={styles.content}>

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

                <div className={styles.blocks}>

                  {

                    data.blocks.map(({ url, title, content }, index) => (

                      <div key={index} id={url} className={styles.block}>

                        <div className={activeLink !== url ? styles.block__headline : `${styles.block__headline} ${styles.block__headline____active}`} ref={link => links.current[index] = link}>

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

              </>

            }

          </div>

        </div>

      </div>

    </Root>

  )
}
