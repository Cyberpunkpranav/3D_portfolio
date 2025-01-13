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
  const frontendRef = useRef(null)
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
    const HorizontalRectangles = styles.horizontal_rectangle
    const HorizontalRectanglesArray = gsap.utils.toArray(`.${HorizontalRectangles}`)
    gsap.fromTo(HorizontalRectanglesArray, {
      scale:0,
      },{
        scale:1,
        ease: "power2.out", // Add easing for smooth effect
        duration:1,
        delay:2,
        stagger: 0.1,
        scrollTrigger: {
        trigger: "#cover",
        start: "top bottom",
        end: "top center", 
        scrub: false,      
        markers:false,
      },
    })
    const Thumbnail = styles.thumbnail;  
    const ThumbnailArray = gsap.utils.toArray(`.${Thumbnail}`)

    gsap.to(ThumbnailArray,{
      color:'var(--brown)',
      stagger: 0.1,
      scrollTrigger:{
        trigger: "#thumbnail-container",
        start: "-400vh top",
        end: "bottom center",
        scrub: true,      
        markers:false,
      }
    })

    const Utilities = styles['dev-utilities-wraps']
    const UtilitiesArray = gsap.utils.toArray(`.${Utilities}`)

    gsap.to(UtilitiesArray,{
      xPercent:-100,
      stagger: 0.1,
      scrollTrigger:{
        trigger: "#thumbnail-container",
        start: "top center",
        end: "1000vh center",
        scrub: 4,      
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
        start: "-300vh top",
        end: "bottom center",
        scrub: true,      
        markers:false,
        markers:false,
      }
    })
    const ExperienceExplain = styles['experience-explain']
    const ExperienceExplainArray = gsap.utils.toArray(`.${ExperienceExplain}`)
    
    gsap.fromTo(ExperienceExplainArray, {
      scale:0.5,
      opacity:0.6
      },{
        scale:1,
        opacity:1,
        ease: "power2.out", // Add easing for smooth effect
        duration:1,
        stagger:0.8,
        scrollTrigger: {
        trigger: `#experiences`,
        start: "-250vh top",
        end: "bottom bottom", 
        scrub: 4,      
        markers:false,
      },
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
      <div className={styles.horizontal_rectangle} style={{height:'10vh',width:'10vw'}}></div>
      <div className={styles.horizontal_rectangle} style={{height:'20vh',width:'20vw'}}></div>
      <div className={styles.horizontal_rectangle} style={{height:'30vh',width:'30vw'}}></div>
      <div className={styles.horizontal_rectangle} style={{height:'40vh',width:'40vw'}}></div>
      <div className={styles.horizontal_rectangle} style={{height:'50vh',width:'50vw'}}></div>
      <div className={styles.horizontal_rectangle} style={{height:'60vh',width:'60vw'}}></div>
      <div className={styles.horizontal_rectangle} style={{height:'70vh',width:'70vw'}}></div>
      <div className={styles.horizontal_rectangle} style={{height:'80vh',width:'80vw'}}></div>

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
    <div className={`${styles['dev-utilities-wrap1']} ${styles['dev-utilities-wraps']}`}></div>  
    <div className={`${styles['dev-utilities-wrap2']} ${styles['dev-utilities-wraps']}`}></div>  
    <div className={`${styles['dev-utilities-wrap3']} ${styles['dev-utilities-wraps']}`}></div>  
    <div className={`${styles['dev-utilities-wrap4']} ${styles['dev-utilities-wraps']}`}></div>  
      <article>New Edge Designs</article>
      <article>Pixel Perfect Results</article>
      <article>Responsive Designs</article>
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
      <Link href='/experience/spacepe' id="experience1" className={styles.experience}>
      <aside>
      <video autoPlay muted loop src="/videos/techrajendra.mp4"/>
      </aside>
      <article>
        <div className={styles['experience-explain']}>
        <h6>MAY 2024 - PRESENT</h6>
        <h2>Space Pe LLP </h2>
        <h5 className="inline-block mt-5">IT products and services</h5>
        <small className="mb-10">Subsidary company of Rajendra management group pvt ltd</small>
        <h3 className="font-light">Software Engineer</h3>
        </div>
      </article>  
      </Link>
      <Link href='/experience/legalbuddy' id="experience2" className={styles.experience}>
      <article>
      <div className={styles['experience-explain']}>
        <p>JAN 2024 - MAY 2024</p>
        <h2>Legal Buddy India Pvt Ltd</h2>
        <h5 className="inline-block mt-5">Legal Tech</h5>
        <small className="mb-10">A startup to help lawyers maintain compliance for the companies</small>
        <h3 className="font-light">Full Stack Engineer</h3>
      </div>
      </article>
      <aside>
      <video autoPlay muted loop src="/videos/legalbuddy.mp4"/>
      </aside>
      </Link>
      <div id="experience3" className={styles.experience}>
      <aside>
      <video autoPlay muted loop src="/videos/connectapp.mp4"/>  
      </aside>
      <article>
      <div className={styles['experience-explain']}>
        <p>OCT 2022 - DEC 2023</p>
        <h2 className="">Aartas Care Pvt Ltd</h2>
        <h5 className="inline-block mt-5">Medical Care</h5>
        <small className="mb-10">An innovative startup helps doctor provide medical space and care</small>
        <h3 className="font-light">Software Developer Associate</h3> 
      </div>
      </article>
      </div>
      <div id="experience4" className={styles.experience}>
      <article>
      <div className={styles['experience-explain']}>
        <p>APR 2022 - OCT 2022</p>
        <h2>Addon ShareWare Pvt Ltd</h2>
        <h5 className="inline-block mt-5">IT Services</h5>
        <small className="mb-10">Delivers bespoken custom softwares and projects to clients </small>
        <h3 className="font-light">Front End Developer </h3>
      </div>
      </article>
      <aside>
      <video autoPlay muted loop src="/videos/ayurhomes.mp4"/> 
      </aside>
      </div>
    </div>

      {/* <div id="education" className={styles.education}>
        <div className={styles.heading}>EDUCATION</div>
        <div className={styles.educations}>
          <div className={styles.education1}>
            <h2>Bachelor in Computer Application</h2>
            <h3>Indira Gandhi National Open University</h3>
            <img style={{left:x}} src="/images/degree.jpg"/>
          </div>
          <div className={styles.education2}>
            <h2>Diploma in Electronics and Communication Engineering</h2>
            <h3>CSI Polytechnic college</h3>
            <img style={{left:x}} src="/images/diploma.jpg"/>
          </div>
        </div>
      </div> */}
    </div>   
  )
}
