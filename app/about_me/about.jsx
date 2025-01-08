'use client'
import React, { useEffect, useState } from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const About = () => {
    const [About,setAbout] = useState([])
    const about = `Software Engineer from the vibrant city of Ghaziabad, Uttar Pradesh. Beyond the lines of code, I am someone deeply passionate about creating solutions that genuinely make life easier for people. With over 3 years of experience in software development, I’ve had the privilege of contributing to projects that help businesses simplify complex processes, connect better with their customers, and embrace the future of technology.
Education has been a cornerstone of my journey. I earned my Bachelor
s degree in Computer Applications from Indira Gandhi National Open University and completed a Diploma in Electronics and Communication Engineering at CSI Polytechnic College. These experiences laid the foundation for my curiosity and drive to continuously learn and innovate.
What inspires me most about my work is its potential to create a positive impact. Whether it’s designing intuitive customer relationship systems, developing seamless banking solutions, or crafting animated websites that captivate users, I strive to put people at the center of everything I do.
Outside of work, I love exploring the world of technology, but I’m also someone who finds joy in simpler things—spending time with family, catching a good story, or just reflecting on how we can use technology to bring people closer together.
I believe that technology should serve humanity, and I’m committed to using my skills to build tools and experiences that uplift and empower. Let’s connect and work towards a future where technology truly works for everyone!.`
gsap.registerPlugin(ScrollTrigger)    
useEffect(()=>{
    const aboutArray = about.split("")
    const about_space = aboutArray.map((data)=>(
        data== ' ' ? '%20%':data
    ))        
    console.log(about_space);

    setAbout(about_space)
},[])
useGSAP(()=>{
        
    const AboutClass = styles.about_char;  
    console.log(About);
    const AboutArray = About.length>0&&gsap.utils.toArray(`.${AboutClass}`)
        
    AboutArray.length>0&& gsap.to(AboutArray,{
      color:'var(--brown)',
      stagger: 0.1,
      scrollTrigger:{
        trigger: "#about",
        start: "top top",
        end: "bottom bottom",
        scrub: true,      
        markers:true,
      }
    })
    })
    
  return (
    <section id='about' className={styles.about}>
        <aside>
            <div className={styles.images}>
                <div className={styles.image_cover}></div>
            <Image alt='profile' unoptimized={true} className={styles.image1} width={100} height={100} quality={100} src='/images/picture_far.jpeg'/>
            </div>
        </aside>
        <article>
            <h1>Hello! I’m Pranav Sharma,</h1>
            <div>
            <h2 className='inline-block font-bold'>A</h2>
            <h4 className='inline-block'>{
                About&&About.map((data,i)=>(
                    data == '%20%' ?                    
                    <span key={i} className={styles.about_char}>&nbsp;</span>
                    :
                    <span key={i} className={styles.about_char}>{data}</span>
                ))
                }</h4>
            </div>
        </article>
    </section>
  )
}

export default About