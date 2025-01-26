'use client'
import {useState, useEffect, useRef, use } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
      transform: 'translateY(10%)',
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
    const Thumbnail = styles.thumbnail;  
    const ThumbnailArray = gsap.utils.toArray(`.${Thumbnail}`)

    gsap.to(ThumbnailArray,{
      color:'var(--black)',
      y:0,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger:{
        trigger: "#thumbnail-container",
        start: "-200vh center",
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
        stagger: 0.1,
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
        start: "-200vh top",
        end: "bottom center",
        scrub: true,      
        markers:false,
        markers:false,
      }
    })



  },[])

  return (
    <div id="portfolio">
    <div id="cover" className={styles.cover}>
      <div className={`${styles.content} grid place-items-center h-full w-full`} >
        <div className="absolute bottom-0 text-right right-0 p-4">
          <small>18.12.2000</small>
          <br/>
          <small> Started in 2021</small>
        </div>
        <div>
        <p className="text-left p-2">I ' m a</p>
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
        <p className="text-right p-2">Based in Delhi, India</p>
        </div>
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
      <article className={styles['dev-utilities-wraps']}>3+ years of Work</article>
      <article className={styles['dev-utilities-wraps']}>3+ Projects</article>
      <article className={styles['dev-utilities-wraps']}>Variety of software domains </article>
            <div id="developments" className={styles.developments}>
            <div className="text-center">
            <h2>Knowledge</h2>
            <h6>Technologies i know</h6>
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
      <div className="mb-10 text-center flex flex-wrap items-center justify-between">
      <h2 className="mr-5">Experience</h2>
      <h6>Making softwares from <span className="text-red font-semibold">3 years</span> and going on..</h6>
      </div>

      <a href='#' id="experience1" className={styles.experience}>
          <div>
          <p>Work Tenure</p>
          <h5>MAY 2024 - PRESENT</h5>
          </div>
        <div>
        <p>Company</p>
        <h3>Space Pe LLP </h3>
        </div>
        <div>
        <p>Specialization</p>
        <h5>IT products and services</h5>
        <p>Subsidary company of Rajendra management group pvt ltd</p>
        </div>
        <div className="text-right">
        <p>Designation</p>
        <h4>Software Engineer</h4>
        </div>
      </a>
      <a href='/#' id="experience2" className={styles.experience}>
        <div>
          <p>Work Tenure</p>
          <h5>JAN 2024 - MAY 2024</h5>
        </div>
        <div>
          <p>Company</p>
          <h3>Legal Buddy India Pvt Ltd</h3>
        </div>
        <div>
          <p>Specialization</p>
          <h5>Legal Tech</h5>
          <p>A startup to help lawyers maintain compliance for the companies</p>
        </div>
        <div className="text-right">
        <p>Designation</p>
        <h4>Full Stack Engineer</h4>
        </div>
      </a>
      <a href="/#" id="experience3" className={styles.experience}>
        <div>
        <p>Work Tenure</p>
        <h5>OCT 2022 - DEC 2023</h5>
        </div>
        <div>
          <p>Company</p>
          <h3>Aartas Care Pvt Ltd</h3>
        </div>
        <div>
          <p>Specialization</p>
          <h5>Medical Care</h5>
          <p>An innovative startup helps doctor provide medical space and care</p>
        </div>
        <div className="text-right">
          <p>Designation</p>
          <h4>Software Developer Associate</h4> 
        </div>
      </a>
      <a href="/#" id='experience4' className={styles.experience}>
        <div>
          <p>Work Tenure</p>
          <h5>APR 2022 - OCT 2022</h5>
        </div>
        <div>
          <p>Company</p>
          <h3>Addon ShareWare Pvt Ltd</h3>
        </div>
        <div>
          <p>Specialization</p>
          <h5>IT Services</h5>
          <p>Delivers bespoken custom softwares and projects to clients </p>
        </div>
        <div className="text-right">
          <p>Designation</p>
          <h4>Front End Developer </h4>
        </div>
      </a>
    </div>
    </div>   
  )
}
