'use client'
import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from './footer.module.css'

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger)

  // useGSAP(()=>{
  //   const Redwall = styles.redwall
  //   gsap.to(`.${Redwall}`,{
  //     // yPercent:100,
  //     height:0,
  //     duration:1,
  //     scrollTrigger: {
  //       trigger: "#footer",
  //       start: "-50vh top",
  //       end: "top bottom", 
  //       scrub: false,      
  //       markers:true,
  //     },
  //   })
  // })
  return (
    <footer id='footer' className={styles.footer}>
      {/* <div className={styles.redwall}></div> */}
    <div className="flex flex-wrap items-center">
    <div className={styles.profile}>
    <img className={styles.image1} src="/images/profilepicture.jpg"/> 
  </div>
  <div className={styles['footer-content']}>
    <h2 className={styles.contact}>Let&#39;s work Together</h2>
    <div className='flex lg:justify-between flex-wrap lg:mt-10 mt-3'>
    <h6><a href='tel:+917339023531'>+917339023531</a></h6>
    <h6><a target='__blank' href='mailto:pranavsharma733902@gmail.com'>EMAIL</a></h6>
    <h6><a href='https://www.linkedin.com/in/pranav-sharma-618914187/' target='__blank'>LINKED_IN</a></h6>
    <h6><a href='https://www.instagram.com/cyberpunkpranav/' target='__blank'>INSTAGRAM</a></h6>
    <h6><a href='https://github.com/Cyberpunkpranav' target='__blank'>GIT_HUB</a></h6>
    </div>
  </div>
    </div>
    <p className="text-center py-4">Design & Develop with ❤️ by Pranav Sharma</p>
  </footer>
  )
}

export default Footer
