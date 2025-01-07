'use client'
import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from './footer.module.css'

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    const Redwall = styles.redwall
    gsap.to(`.${Redwall}`,{
      // yPercent:100,
      height:0,
      duration:1,
      scrollTrigger: {
        trigger: "#footer",
        start: "-100vh top",
        end: "top bottom", 
        scrub: false,      
        markers:false,
      },
    })
  })
  return (
    <footer id='footer' className={styles.footer}>
      <div className={styles.redwall}></div>
    <div className="flex items-center h-[90vh]">
    <div className={styles.profile}>
    <img className={styles.image1} src="/images/profilepicture.jpg"/> 
  </div>
  <div className={styles['footer-content']}>
    <h3>PRANAV SHARMA</h3>
    <h2 className={styles.contact}>CONTACT ME</h2>
    <div className='flex justify-between flex-wrap mt-10'>
    <h4>+917339023531</h4>
    <h4><a target='__blank' href='mailto:pranavsharma733902@gmail.com'>EMAIL</a></h4>
    <h4><a href='https://www.linkedin.com/in/pranav-sharma-618914187/' target='__blank'>LINKED IN</a></h4>
    <h4><a href='https://www.instagram.com/cyberpunkpranav/' target='__blank'>INSTAGRAM</a></h4>
    <h4><a href='https://github.com/Cyberpunkpranav' target='__blank'>GITHUB</a></h4>
    </div>
  </div>
    </div>
    <p className="text-center py-4">Design & Develop with ❤️ by Pranav Sharma</p>
  </footer>
  )
}

export default Footer
