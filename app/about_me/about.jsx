'use client'
import React, { useEffect, useState } from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const About = () => {

gsap.registerPlugin(ScrollTrigger)    

useGSAP(()=>{
    const parallax = gsap.timeline()
    parallax.to('#profile', {
        yPercent: 15,
        })
      ScrollTrigger.create({
        animation:parallax,
        trigger: "#about",
        start: "top top",
        end: "bottom center", 
        toggleActions:'play reverse restart complete',
        scrub: 2,      
        markers:false,
      })

      gsap.fromTo('#about-article', {
          transform: 'translateY(15vh)',
          opacity:0
          },{
            transform: 'translateY(0)',
            opacity:1,
            ease: "power2.out",
            duration:2,
            stagger: 0.5,
            scrollTrigger: {
            trigger: "#about",
            start: "top center",
            end: "bottom center", 
            scrub: false,      
            markers:false,
          }
        })
          gsap.fromTo('#education-image',{
            top:'-15%'
            },{
            top:'10%',
              scrollTrigger:{
              trigger: "#education",
              start: "-200vh top",
              end: "bottom center", 
              toggleActions:'play reverse restart complete',
              scrub: 2,      
              markers:false,
              }
              })

    },[])
    
  return (
    <>
    <section id='about' className={styles.about}>
        <aside>
            <div className={styles.images}>
            <Image id='profile' alt='profile' unoptimized={true} className={styles.image1} width={100} height={100} quality={100} src='/images/picture_far.jpeg'/>
            <div className={styles.image_cover_top}></div>
            <div className={styles.image_cover_down}></div>
            </div>
        </aside>
        <article>
        <h1>All About Me</h1>
            <p id='about-article' className='text-wrap'>
            A Software Engineer who is deeply passionate about creating solutions With over 3 years of experience in software development. Contributing to projects that help businesses simplify complex processes, and embrace the future of technology.These experiences laid the foundation for my curiosity and drive to continuously learn and innovate. I can design and develop intuitive systems or crafting animated websites that captivate users. I&#39;m committed to using my skills to build tools and experiences that uplift and empower.Let&#39;s connect and work towards a future where technology truly works for everyone!.
                </p>
                <p className='text-right mt-5'> - Pranav Sharma</p>
        </article>
    </section>
    <section id='education' className={styles.education}>
   
        <div className={styles['education-page']}>
        <div className={styles.education_cover_top}></div>
        <Image id='education-image' unoptimized={true} className={styles['education-image']} width={100} height={100} quality={100} src='/images/education.jpeg'/>
        <div className={styles.education_content}>
        <article id='education1'>
        <h2>Education</h2>
        <h6>2021-2024</h6>
        <h4>Bachelor in Computer Application</h4>
        <p>Indira gandhi National Open University</p>
        </article>
        <article id='education2'>
        <h6>2016-2019</h6>
        <h4>Diploma in Electronics & Communication Engineering</h4>
        <p>CSI Polytechnic College</p>
        </article>        
        </div>
         <div id='page_down' className={styles.education_cover_down}></div>
    </div>
    </section>
    </>
  )
}

export default About