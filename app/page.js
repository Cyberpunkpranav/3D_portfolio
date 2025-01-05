'use client'
import {useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Lenis from "lenis";

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
    console.log(CreativeArray);
    gsap.fromTo(CreativeArray, {
      transform: 'translateY(5vh)',
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
      },{
        transform: 'translateY(0)',
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.out", // Add easing for smooth effect
        duration:1,
        stagger: 0.1,
        scrollTrigger: {
        trigger: ".cover",
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
    }
    )
    const Utilities = styles['dev-utilities-wraps']
    const UtilitiesArray = gsap.utils.toArray(`.${Utilities}`)

    gsap.to(UtilitiesArray,{
      xPercent:-100,
      stagger: 0.1,
      scrollTrigger:{
        trigger: "#rectangle1",
        start: "-400vh top",
        end: "bottom center",
        scrub: true,      
        markers:true,
      }
    })

    const Utilities2 = styles['dev-utilities-wraps2']
    const UtilitiesArray2 = gsap.utils.toArray(`.${Utilities2}`)

    gsap.to(UtilitiesArray2,{
      xPercent:100,
      stagger: 0.1,
      scrollTrigger:{
        trigger: "#rectangle1",
        start: "top top",
        end: "bottom center",
        scrub: true,      
        markers:true,
      }
    })
  })
  
  useEffect(()=>{
// Initialize Lenis
const lenis = new Lenis({
  duration:2,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
return(()=>{
  lenis.destroy()
})
  },[])
  return (
    <div  id="portfolio">
    <div id="cover" className={styles.cover}>
      <div className={`${styles.content} grid place-items-center h-full w-full`} >
        <h1 className="flex flex-wrap justify-center z-[500] ">
        <span className={styles.punchline}>
          <div className={styles.creative}>C</div>
          <div className={styles.creative}>r</div>
          <div className={styles.creative}>e</div>
          <div className={styles.creative}>a</div>
          <div className={styles.creative}>t</div>
          <div className={styles.creative}>i</div>
          <div className={styles.creative}>v</div>
          <div className={styles.creative}>e</div>
          </span>
          <span className={styles.punchline}>
          <div className={styles.creative}>W</div>
          <div className={styles.creative}>e</div>
          <div className={styles.creative}>b</div>
          </span>
          <span className={styles.punchline}>
          <div className={styles.creative}>D</div>
          <div className={styles.creative}>e</div>
          <div className={styles.creative}>s</div>
          <div className={styles.creative}>i</div>
          <div className={styles.creative}>g</div>
          <div className={styles.creative}>n</div>
          <div className={styles.creative}>e</div>
          <div className={styles.creative}>r</div>
          </span>
          <span className={styles.punchline}>
          <div className={styles.creative}>a</div>
          <div className={styles.creative}>n</div>
          <div className={styles.creative}>d</div>
          </span>
        <span className={styles.punchline}>
        <div className={`${styles.creative} text-red`}>D</div>
        <div className={`${styles.creative} text-red`}>e</div>
        <div className={`${styles.creative} text-red`}>v</div>
        <div className={`${styles.creative} text-red`}>e</div>
        <div className={`${styles.creative} text-red`}>l</div>
        <div className={`${styles.creative} text-red`}>o</div>
        <div className={`${styles.creative} text-red`}>p</div>
        <div className={`${styles.creative} text-red`}>e</div>
        <div className={`${styles.creative} text-red`}>r</div>
        </span>
        </h1>
      <div className={styles.parent_rectangle}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      </div>
      <div className={styles.horizontal_rectangle1}></div>
      <div className={styles.horizontal_rectangle2}></div>
      <div className={styles.horizontal_rectangle3}></div>
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
          </p>
        </div>
    <div id="rectangle1" className={styles.rectangle1}>
    <div className={`${styles['dev-utilities-wrap1']} ${styles['dev-utilities-wraps']}`}></div>  
    <div className={`${styles['dev-utilities-wrap2']} ${styles['dev-utilities-wraps']}`}></div>  
    <div className={`${styles['dev-utilities-wrap3']} ${styles['dev-utilities-wraps']}`}></div>  
      <article>NEW EDGE DESIGNS</article>
      <article>PIXEL PERFECT RESULTS</article>
      <article>RESPONSIVE DESIGNS</article>
            <div className={styles.developments}>
                  <div className={styles['tech-pill']}>
                  <Image alt='html' width={100} height={100} src='/logo/html.png'/> 
                  <h4>HTML</h4>
                  </div>
                <div className={styles['tech-pill']}>
                <Image alt='css' width={100} height={100} src='/logo/css.png'/>
                <h4>CSS</h4>
                </div>
                <div className={styles['tech-pill']}>
                <Image alt='javascript' width={100} height={100} src='/logo/js.png'/>
                <h4>JAVASCRIPT</h4>
                </div>
                <div className={styles['tech-pill']}>
                <Image alt='bootstrap' width={100} height={100} src='/logo/bootstrap.png'/>
                <h4>BOOTSTRAP</h4>
                </div>
                <div className={styles['tech-pill']}>
                <Image alt='tailwind' width={100} height={100} src='/logo/tailwind.png'/>
                <h4>TAILWIND</h4>
                </div>
                <div className={styles['tech-pill']}>
                <Image alt='materialui' width={100} height={100} src='/logo/mui.png'/>
                <h4>MATERIAL UI</h4>
                </div>
                <div className={styles['tech-pill']}>
                <Image alt='jquery' width={100} height={100} src='/logo/jQuery.png'/>
                <h4>JQUERY</h4>
                </div>
                <div className={styles['tech-pill']}>
                <Image className={styles['techs-img']} alt='reactjs' width={100} height={100} src='/logo/reactjs.png'/>
                <h4>REACT JS</h4>
                </div>
                <div className={styles['tech-pill']}>
                <Image className={styles['techs-img']} alt='nextjs' width={100} height={100} src='/logo/nextjs.png'/>
                <h4>NEXT JS</h4>
                </div>
                <div className={styles['tech-pill']}>
              <Image className={styles['techs-img']} alt='nodejs' width={100} height={100} src='/logo/nodejs.png'/>
              <h4>NODE JS</h4>
              </div>
              <div className={styles['tech-pill']}>
              <Image className={styles['techs-img']} alt='expressjs' width={100} height={100} src='/logo/expressjs.png'/>
              <h4>EXPRESS JS</h4>
              </div>
              <div className={styles['tech-pill']}>
              <Image className={styles['techs-img']} alt='golang' width={100} height={100} src='/logo/golang.png'/>
              <h4>GOLANG</h4>
              </div>
              <div className={styles['tech-pill']}>
              <Image className={styles['techs-img']} alt='mysql' width={100} height={100} src='/logo/mysql.png'/>
              <h4>MY SQL</h4>
              </div>
              <div className={styles['tech-pill']}>
              <Image className={styles['techs-img']} alt='aws' width={100} height={100} src='/logo/aws.png'/>
              <h4>AMAZON WEB SERVICES</h4>
              </div>
              <div className="flex justify-between">
                <div className="text-nowrap relative">
                <h2 className="opacity-0">FRONT END </h2>
                <h2 ref={frontendRef} className={styles.frontend}>FRONT END </h2>
                <h2 className={styles.backend}>BACK END </h2>
                <h2 className={styles.fullstack}>FULLSTACK </h2>
                </div>
                <h2>DEVELOPMENT.</h2></div>
              </div>

    <div className={`${styles['dev-utilities-wrap4']} ${styles['dev-utilities-wraps2']}`}></div>  
    <div className={`${styles['dev-utilities-wrap5']} ${styles['dev-utilities-wraps2']}`}></div>  
    <div className={`${styles['dev-utilities-wrap6']} ${styles['dev-utilities-wraps2']}`}></div> 
      <article className="text-left">SCALABLE SOFTWARES</article>
      <article className="text-left">SYSTEM DESIGN</article>
      <article className="text-left">AGILE METHODOLOGY</article>
    </div>
    <div id="experience" className={`${styles.experience}`}>
      <div className={styles.heading}>
      <h2 >EXPERIENCE</h2>
      </div>
        <section id="experiences" className={`${styles.experiences}`}>
        <article>
        <div id="experience1" className={styles.experience1}>
        <h6>MAY 2024 - PRESENT</h6>
        <h2>Tech Rajendra</h2>
        <h3>Software Engineer</h3>
        <video style={{left:x}} autoPlay muted loop src="/videos/techrajendra.mp4"/>
        </div>
        <div id="experience2" className={styles.experience2}>
        <h6>JAN 2024 - MAY 2024</h6>
        <h2>Legal Buddy India Pvt Ltd</h2>
        <h3>Full Stack Engineer</h3>
        <video style={{left:x}} autoPlay muted loop src="/videos/legalbuddy.mp4"/>
        </div>
        <div id="experience3" className={styles.experience3}>
        <h6>OCT 2022 - DEC 2023</h6>
        <h2>Aartas Care Pvt Ltd</h2>
        <h3>Software Developer Associate</h3>    
        <video style={{left:x}} autoPlay muted loop src="/videos/connectapp.mp4"/>  
        </div>
        <div id="experience4" className={styles.experience4}>
        <h6>APR 2022 - OCT 2022</h6>
        <h2>Addon ShareWare Pvt Ltd</h2>
        <h3>Front End Developer </h3>
        <video style={{left:x}} autoPlay muted loop src="/videos/ayurhomes.mp4"/>
        </div>
        </article>
        </section>
      </div>
      <div id="education" className={styles.education}>
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
      </div>
    </div>
  )
}
