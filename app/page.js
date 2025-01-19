'use client'
import {useState, useEffect, useRef, use } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {  
  const [x,setX] = useState(0)
  const [y,setY] = useState(0)
  
  useEffect(()=>{
const MouseMov = (e)=>{
setX(e.clientX)
setY(e.clientY)
}
document.addEventListener('mousemove',MouseMov)
return()=>{
  document.removeEventListener('mousemove',MouseMov)
}
  },[x,y])
  gsap.registerPlugin(ScrollTrigger)


  useGSAP(()=>{      
    const Creative = styles.creative;  
    const CreativeArray = gsap.utils.toArray(`.${Creative}`)
    gsap.fromTo(CreativeArray, {
      transform: 'translateY(5vh)',
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      scale:1,
      marginLeft:'0px',
      marginRight:'0px',
      },{
        transform: 'translateY(0)',
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale:1.3,
        marginLeft:'0.3vw',
        marginRight:'0.3vw',
        ease: "power2.out", // Add easing for smooth effect
        duration:1,
        stagger: 0.1,
        scrollTrigger: {
        trigger: ".cover",
        start: "top bottom",
        end: "top center", 
        scrub: false,      
        markers:false,
      }
    })
    // const HorizontalRectangles = styles.horizontal_rectangle
    // const HorizontalRectanglesArray = gsap.utils.toArray(`.${HorizontalRectangles}`)
    // gsap.fromTo(HorizontalRectanglesArray, {
    //   scale:0,
    //   },{
    //     scale:1,
    //     ease: "power2.out", // Add easing for smooth effect
    //     duration:1,
    //     delay:2,
    //     stagger: 0.1,
    //     scrollTrigger: {
    //     trigger: "#cover",
    //     start: "top bottom",
    //     end: "top center", 
    //     scrub: false,      
    //     markers:false,
    //   },
    // })
    const Thumbnail = styles.thumbnail;  
    const ThumbnailArray = gsap.utils.toArray(`.${Thumbnail}`)

    gsap.to(ThumbnailArray,{
      color:'var(--red)',
      y:0,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger:{
        trigger: "#thumbnail-container",
        start: "top center",
        end: "center top",
        scrub: true,      
        markers:false,
      }
    })

    const Utilities = styles['dev-utilities-wraps']
    const UtilitiesArray = gsap.utils.toArray(`.${Utilities}`)

    gsap.fromTo(UtilitiesArray, {
      transform: 'translateY(15vh)',
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },{
        transform: 'translateY(0)',
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.out", // Add easing for smooth effect
        duration:1,
        stagger: 0.5,
        scrollTrigger: {
        trigger: "#rectangle1",
        start: "top center",
        end: "bottom center", 
        scrub: false,      
        markers:false,
      }
    })

    const TechSquares = styles['tech-square']
    const TechSquaresArray = gsap.utils.toArray(`.${TechSquares}`)

    gsap.fromTo(TechSquaresArray,{
      scale:0
    },{
      scale:1,
      stagger: 0.1,
      scrollTrigger:{
        trigger: "#rectangle1",
        start: "-100vh top",
        end: "bottom center",
        scrub: true,      
        markers:false,
        markers:false,
      }
    })

    const MultiColor = styles['multicolor']
    const MultiColor2 = styles['multicolor2']

    function divheight(){
      const className = styles['experience']; // Get the class name from the styles object
      const divElement = document.querySelector(`.${className}`); // Select the element with the class
      if (divElement) {
        const divHeight = divElement.clientHeight; // Get the height of the element
       return divHeight
      }
    }

    const t1 = gsap.timeline()
    t1.to(`#experience1 .${MultiColor}`,{
      width:'100%',
    }).to(`#experience1 .${MultiColor}`,{
      xPercent:100,
    },0.9)
    .to(`#experience1 .${styles['experience-explain']}`,{
      backgroundColor:'var(--brown)'
    },0.9)

    ScrollTrigger.create({
      animation:t1,
      trigger: `#experiences`,
      start: "-300vh top",
      ease: "power2.out",
      end: "bottom bottom", 
      scrub: false,      
      markers:false,
    })

    const t2 = gsap.timeline()
    t2.to(`#experience2 .${MultiColor2}`,{
      width:'100%',
    }).to(`#experience2 .${MultiColor2}`,{
      xPercent:-100,
    },0.9)
    .to(`#experience2 .${styles['experience-explain']}`,{
      backgroundColor:'var(--brown)'
    },0.9)

    ScrollTrigger.create({
      animation:t2,
      trigger: `#experiences`,
      start:  `${divheight()/2}px top`,
      ease: "power2.out",
      end: "bottom bottom", 
      scrub: false,      
      markers:false,
    })
   
    const t3 = gsap.timeline()
    t3.to(`#experience3 .${MultiColor}`,{
      width:'100%',
    }).to(`#experience3 .${MultiColor}`,{
      xPercent:100,
    },0.9)
    .to(`#experience3 .${styles['experience-explain']}`,{
      backgroundColor:'var(--brown)'
    },0.9)
       
    ScrollTrigger.create({
      animation:t3,
      trigger: `#experiences`,
      start: `${divheight()}px top`,
      end: "bottom bottom", 
      ease: "power2.out",
      scrub: false,      
      markers:false,
    })

    const t4 = gsap.timeline()
    t4.to(`#experience4 .${MultiColor2}`,{
      width:'100%',
    }).to(`#experience4 .${MultiColor2}`,{
      xPercent:-100,
    },0.9)
    .to(`#experience4 .${styles['experience-explain']}`,{
      backgroundColor:'var(--brown)'
    },0.9)

        
    ScrollTrigger.create({
      animation:t4,
      trigger: `#experiences`,
      start: `${divheight()*2}px top`,
      end: "bottom bottom", 
      ease: "power2.out",
      scrub: false,      
      markers:false,
    })

  },[])

  return (
    <div id="portfolio">
    <div id="cover" className={styles.cover}>
      <div className={`${styles.content} grid place-items-center h-full w-full`} >
        <h1 className="flex flex-wrap justify-center z-[500] ">
        <span className={styles.punchline}>
          <div style={{color:'var(--red)'}} className={styles.creative}>C</div>
          <div style={{color:'var(--red)'}} className={styles.creative}>r</div>
          <div style={{color:'var(--red)'}} className={styles.creative}>e</div>
          <div style={{color:'var(--red)'}} className={styles.creative}>a</div>
          <div style={{color:'var(--red)'}} className={styles.creative}>t</div>
          <div style={{color:'var(--red)'}} className={styles.creative}>i</div>
          <div style={{color:'var(--red)'}} className={styles.creative}>v</div>
          <div style={{color:'var(--red)'}} className={styles.creative}>e</div>
          </span>
          <span className={styles.punchline}>
          <div className={styles.creative}>W</div>
          <div className={styles.creative}>e</div>
          <div className={styles.creative}>b</div>
          </span>
        <span className={styles.punchline}>
        <div className={styles.creative}>D</div>
        <div className={styles.creative}>e</div>
        <div className={styles.creative}>v</div>
        <div className={styles.creative}>e</div>
        <div className={styles.creative}>l</div>
        <div className={styles.creative}>o</div>
        <div className={styles.creative}>p</div>
        <div className={styles.creative}>e</div>
        <div className={styles.creative}>r</div>
        </span>
        </h1>
      </div>
    </div>
    <div id="thumbnail-container" className={styles['thumbnail-container']}>
          <p className="flex flex-wrap z-[500] ">
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>D</div>
            <div className={styles.thumbnail}>e</div>
            <div className={styles.thumbnail}>s</div>
            <div className={styles.thumbnail}>i</div>
            <div className={styles.thumbnail}>g</div>
            <div className={styles.thumbnail}>n</div>
            </span>
            <span className={styles.thumbnails}>
            <div className={styles.thumbnail}>&</div>
          </span>
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>D</div>
            <div className={styles.thumbnail}>e</div>
            <div className={styles.thumbnail}>v</div>
            <div className={styles.thumbnail}>e</div>
            <div className={styles.thumbnail}>l</div>
            <div className={styles.thumbnail}>o</div>
            <div className={styles.thumbnail}>p</div>
            </span>
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>U</div>
            <div className={styles.thumbnail}>s</div>
            <div className={styles.thumbnail}>e</div>
            <div className={styles.thumbnail}>r</div>
          </span>  
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>F</div>
            <div className={styles.thumbnail}>r</div>
            <div className={styles.thumbnail}>i</div>
            <div className={styles.thumbnail}>e</div>
            <div className={styles.thumbnail}>n</div>
            <div className={styles.thumbnail}>d</div>
            <div className={styles.thumbnail}>l</div>
            <div className={styles.thumbnail}>y</div>
          </span>
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>S</div>
            <div className={styles.thumbnail}>o</div>
            <div className={styles.thumbnail}>f</div>
            <div className={styles.thumbnail}>t</div>
            <div className={styles.thumbnail}>w</div>
            <div className={styles.thumbnail}>a</div>
            <div className={styles.thumbnail}>r</div>
            <div className={styles.thumbnail}>e</div>
            <div className={styles.thumbnail}>s</div>
          </span>
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>W</div>
            <div className={styles.thumbnail}>i</div>
            <div className={styles.thumbnail}>t</div>
            <div className={styles.thumbnail}>h</div>
          </span>
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>M</div>
            <div className={styles.thumbnail}>e</div>
          </span>
          </p>
    </div>
    <div id="rectangle1" className={styles.rectangle1}>
      <article className={styles['dev-utilities-wraps']}>New Edge Designs</article>
      <article className={styles['dev-utilities-wraps']}>Pixel Perfect Results</article>
      <article className={styles['dev-utilities-wraps']}>Responsive Designs</article>
            <div id="developments" className={styles.developments}>
            <div className="text-center">
            <h2 className={styles.subheading}>Knowledge</h2>
            <h6 className={styles['subheading-description']}>Technologies i know</h6>
            </div>
              <div className={styles['tech-square']}><h4>HTML</h4> </div>
              <div className={styles['tech-square']}><h4>CSS</h4> </div>
              <div className={styles['tech-square']}><h4>JAVASCRIPT</h4> </div>
              <div className={styles['tech-square']}><h4>BOOTSTRAP</h4> </div>
              <div className={styles['tech-square']}><h4>TAILWIND</h4> </div>
              <div className={styles['tech-square']}><h4>MATERIAL UI</h4> </div>
              <div className={styles['tech-square']}><h4>JQUERY</h4> </div>
              <div className={styles['tech-square']}><h4>REACT JS</h4> </div>
              <div className={styles['tech-square']}><h4>NEXT JS</h4> </div>
              <div className={styles['tech-square']}><h4>NODE JS</h4> </div>
              <div className={styles['tech-square']}><h4>EXPRESS JS</h4> </div>
              <div className={styles['tech-square']}><h4>GOLANG</h4> </div>
              <div className={styles['tech-square']}><h4>MY SQL</h4> </div>
              <div className={styles['tech-square']}><h4>AWS</h4> </div>
              <div className={styles['tech-square']}><h4>GIT HUB</h4> </div>
              <div className={styles['tech-square']}><h4>POSTMAN</h4> </div>
            </div>
    </div>
    <div id="experiences" className={styles.experiences}>
      <div className="mb-10 text-center">
      <h2 className={styles.subheading}>Experience</h2>
      <h6 className={styles['subheading-description']}>Making softwares from <span className="text-red font-semibold">3 years</span> and going on..</h6>
      </div>
      <a href='/experience/spacepe' id="experience1" className={styles.experience}>
      <aside>
      <video autoPlay muted loop src="/videos/techrajendra.mp4"/>
      </aside>
      <article className="relative">
        <div className={styles['experience-explain']}>
        <h6>MAY 2024 - PRESENT</h6>
        <h2>Space Pe LLP </h2>
        <h5 className="inline-block mt-5">IT products and services</h5>
        <small className="mb-10">Subsidary company of Rajendra management group pvt ltd</small>
        <h3 className="font-light">Software Engineer</h3>
        </div>
        <div className={styles.multicolor}></div>
      </article>  
      </a>
      <a href='/experience/legalbuddy' id="experience2" className={styles.experience}>
      <article className="relative">
      <div className={styles['experience-explain']}>
        <p>JAN 2024 - MAY 2024</p>
        <h2>Legal Buddy India Pvt Ltd</h2>
        <h5 className="inline-block mt-5">Legal Tech</h5>
        <small className="mb-10">A startup to help lawyers maintain compliance for the companies</small>
        <h3 className="font-light">Full Stack Engineer</h3>
      </div>
      <div className={styles.multicolor2}></div>
      </article>
      <aside>
      <video autoPlay muted loop src="/videos/legalbuddy.mp4"/>
      </aside>
      </a>
      <a   href="/experience/aartas" id="experience3" className={styles.experience}>
      <aside>
      <video autoPlay muted loop src="/videos/connectapp.mp4"/>  
      </aside>
      <article className="relative">
      <div className={styles['experience-explain']}>
        <p>OCT 2022 - DEC 2023</p>
        <h2 className="">Aartas Care Pvt Ltd</h2>
        <h5 className="inline-block mt-5">Medical Care</h5>
        <small className="mb-10">An innovative startup helps doctor provide medical space and care</small>
        <h3 className="font-light">Software Developer Associate</h3> 
      </div>
      <div className={styles.multicolor}></div>
      </article>
      </a>
      <div id="experience4" className={styles.experience}>
      <article className="relative">
      <div className={styles['experience-explain']}>
        <p>APR 2022 - OCT 2022</p>
        <h2>Addon ShareWare Pvt Ltd</h2>
        <h5 className="inline-block mt-5">IT Services</h5>
        <small className="mb-10">Delivers bespoken custom softwares and projects to clients </small>
        <h3 className="font-light">Front End Developer </h3>
      </div>
      <div className={styles.multicolor2}></div>
      </article>
      <aside>
      <video autoPlay muted loop src="/videos/ayurhomes.mp4"/> 
      </aside>
      </div>
    </div>
    </div>   
  )
}
