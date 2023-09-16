'use client'

import styles from './styles/portfolio.module.scss'

import React from 'react'
import { useState, useRef, useEffect } from 'react'

import Block from './block'

import Email from './icons/e-mail'
import Github from './icons/github'
import LinkedIn from './icons/linked-in'
import Facebook from './icons/facebook'

import data from './data'

export default function Home() {

  const [mousePosition, setMousePosition] = useState()
  const [activeLink, setActiveLink] = useState()

  const navigation = useRef([])
  const icons = { email: Email, github: Github, linkedin: LinkedIn, facebook: Facebook }

  useEffect(() => {

    if (window.location.hash) {

      const element = document.querySelector(`[id="${window.location.hash.substring(1)}"]`)
      if (element) window.scrollTo({ top: window.innerWidth < 1024 ? element.offsetTop : element.offsetTop - 90 })
    }

    window.addEventListener('scroll', () => navigation.current.forEach(link => {

      if (link.getBoundingClientRect().top === 0) setActiveLink(link.parentElement.id)
    }))
  }, [])

  return (

    <div className={styles.root}>

      <div style={mousePosition?.top ? { background: ` radial-gradient(640px at ${mousePosition.left}px ${mousePosition.top}px, currentColor, transparent 75%)` } : null} className={styles.main} onMouseMove={event => setMousePosition(window.innerWidth >= 1024 ? { left: event.pageX, top: event.pageY } : null)} >

        <div className={styles.container}>

          <div className={styles.header}>

            <div className={styles.lead}>

              <div className={styles.lead__headline}>

                <a href="/" className={styles.lead__title}>
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

                  <div className={`${activeLink !== url ? styles.blocks__headline : `${styles.blocks__headline} ${styles.blocks__headline____active}`}`} ref={element => navigation.current[index] = element}>

                    <a href={`#${url}`} className={styles.blocks__title}>
                      {title}
                    </a>

                  </div>

                  <div className={styles.blocks__content}>

                    {

                      content.map((block, index) => (

                        <React.Fragment key={index}>

                          {

                            !block.url

                              ?

                              <div className={styles.block}>
                                <Block styles={styles} {...block} />
                              </div>

                              :

                              <a target="_blank" href={block.url} className={`${styles.block} ${styles.block____link}`}>
                                <Block styles={styles} {...block} />
                              </a>

                          }

                        </React.Fragment>

                      ))
                    }

                  </div>

                </div>

              ))
            }

          </div>

        </div>

      </div>

    </div>
  )
}
