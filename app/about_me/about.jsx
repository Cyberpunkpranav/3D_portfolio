'use client'
import React, { useEffect, useState } from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const About = () => {
    const about = `Hello! I’m Pranav Sharma. 
    A Software Engineer from the vibrant city of Ghaziabad, Uttar Pradesh. Beyond the lines of code, I am someone deeply passionate about creating solutions that genuinely make life easier for people. With over 3 years of experience in software development, I’ve had the privilege of contributing to projects that help businesses simplify complex processes, connect better with their customers, and embrace the future of technology.Education has been a cornerstone of my journey. I earned my Bachelors degree in Computer Applications from Indira Gandhi National Open University and completed a Diploma in Electronics and Communication Engineering at CSI Polytechnic College. These experiences laid the foundation for my curiosity and drive to continuously learn and innovate. What inspires me most about my work is its potential to create a positive impact. Whether it’s designing intuitive customer relationship systems, developing seamless banking solutions, or crafting animated websites that captivate users, I strive to put people at the center of everything I do. Outside of work, I love exploring the world of technology, but I’m also someone who finds joy in simpler things—spending time with family, catching a good story, or just reflecting on how we can use technology to bring people closer together. I believe that technology should serve humanity, and I’m committed to using my skills to build tools and experiences that uplift and empower. Let’s connect and work towards a future where technology truly works for everyone!.`
    
    const aboutArray = about.split("")
    const about_space = aboutArray.map((data)=>(
        data== ' ' ? '&nbsp;':data
    ))        
    
gsap.registerPlugin(ScrollTrigger)    

useGSAP(()=>{
            const AboutClass = styles.about_char;  
            const AboutArray = gsap.utils.toArray(`.${AboutClass}`)
            const aboutArticle = document.getElementById('about-article')
            console.log(aboutArticle.offsetHeight);
            const convertVhToPx = (vh=50) => {
                const oneVhInPx = window.innerHeight / 100;
                return oneVhInPx * vh;
            };
            
            gsap.to(AboutArray,{
              color:'var(--black)',
              stagger:0.1,
              scrollTrigger:{
                trigger: "#about",
                start: "-50vh top",
                end: `${aboutArticle.offsetHeight+convertVhToPx(50)}px bottom`,
                scrub: 2,      
                markers:false,
              }
            })
    })
    console.log(About);
    
  return (
    <section id='about' className={styles.about}>
        <aside>
            <div className={styles.images}>
                <div className={styles.image_cover}></div>
            <Image alt='profile' unoptimized={true} className={styles.image1} width={100} height={100} quality={100} src='/images/picture_far.jpeg'/>
            </div>
        </aside>
        <article className='scroll'>
            <div className=''>
            <h4 id='about-article' className='flex flex-wrap'>
            {/* Hello! I’m Pranav Sharma. A Software Engineer from the vibrant city of Ghaziabad, Uttar Pradesh. Beyond the lines of code, I am someone deeply passionate about creating solutions that genuinely make life easier for people. With over 3 years of experience in software development, I’ve had the privilege of contributing to projects that help businesses simplify complex processes, connect better with their customers, and embrace the future of technology.
            Education has been a cornerstone of my journey. I earned my Bachelor
            s degree in Computer Applications from Indira Gandhi National Open University and completed a Diploma in Electronics and Communication Engineering at CSI Polytechnic College. These experiences laid the foundation for my curiosity and drive to continuously learn and innovate.
            What inspires me most about my work is its potential to create a positive impact. Whether it’s designing intuitive customer relationship systems, developing seamless banking solutions, or crafting animated websites that captivate users, I strive to put people at the center of everything I do.
            Outside of work, I love exploring the world of technology, but I’m also someone who finds joy in simpler things—spending time with family, catching a good story, or just reflecting on how we can use technology to bring people closer together.
            I believe that technology should serve humanity, and I’m committed to using my skills to build tools and experiences that uplift and empower. Let’s connect and work towards a future where technology truly works for everyone!. */}
                {
               about_space.map((data,i)=>(
                    data == '&nbsp;' ?                    
                    <span key={i} className={styles.about_char}>&nbsp;</span>
                    :
                    <span key={i} className={styles.about_char}>{data}</span>
                ))
                }
                </h4>
            </div>
        </article>
    </section>
  )
}

export default About