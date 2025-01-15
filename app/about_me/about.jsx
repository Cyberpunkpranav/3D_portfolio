'use client'
import React, { useEffect, useState } from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const About = () => {
    const about = ``
    
    const aboutArray = about.split("")
    const about_space = aboutArray.map((data)=>(
        data== ' ' ? '&nbsp;':data
    ))        
    
gsap.registerPlugin(ScrollTrigger)    

useGSAP(()=>{
            const aboutArticle = styles['about-article']

            gsap.fromTo(`.${aboutArticle}`, {
                transform: 'translateY(15vh)',
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },{
                  transform: 'translateY(0)',
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  ease: "power2.out", // Add easing for smooth effect
                  duration:1,
                  stagger: 0.5,
                  scrollTrigger: {
                  trigger: "#about",
                  start: "top center",
                  end: "bottom center", 
                  scrub: false,      
                  markers:false,
                }
              })
    },[])
    
  return (
    <>
    <h1 className={styles.heading}>All About Me</h1>
    <section id='about' className={styles.about}>
        <aside>
            <div className={styles.images}>
                <div className={styles.image_cover}></div>
            <Image alt='profile' unoptimized={true} className={styles.image1} width={100} height={100} quality={100} src='/images/picture_far.jpeg'/>
            </div>
        </aside>
        <article className='scroll'>
            <h4 id='about-article' className='text-wrap'>
            A Software Engineer who is deeply passionate about creating solutions With over 3 years of experience in software development . Contributing to projects that help businesses simplify complex processes, and embrace the future of technology. These experiences laid the foundation for my curiosity and drive to continuously learn and innovate. I can design and develop intuitive systems or crafting animated websites that captivate users. I&#39;m committed to using my skills to build tools and experiences that uplift and empower. Let&#39;s connect and work towards a future where technology truly works for everyone!.
                {/* {
               about_space.map((data,i)=>(
                    data == '&nbsp;' ?                    
                    <span key={i} className={styles.about_char}>&nbsp;</span>
                    :
                    <span key={i} className={styles.about_char}>{data}</span>
                ))
                } */}
                </h4>
        </article>
    </section>
    <section className={styles.education}>
        <h2 className={styles.heading}>Education</h2>
        <article>
        <h4>Indira gandhi National Open University</h4>
        <h3>Bachelor in Computer Application</h3>
        </article>
        <article>
        <h4>CSI Polytechnic College</h4>
        <h3>Diploma in Electronics & Communication Engineering</h3>
        </article>
    </section>
    </>
  )
}

export default About