'use client'
import {useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Cursor from "./components/cursor/cursor";
import Scroll from "./components/scroll/scroll";

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
      gsap.to('#content',{
        scrollTrigger:{
         trigger: '#cover',
         start:'top top',
         end:'top top',
         toggleActions:'start resume none none',
         markers:false
        },
        backgroundColor:'rgb(0,0,0)',
        duration:2
   })
  })

  return (
    <div  id="portfolio">
    {/* <Scroll id='portfolio'/> */}
    <div id="cover" className={styles.cover}>
      <div className={`${styles.content} grid place-items-center h-full w-full`} >
      <div id="content" className="relative">
      <div className={styles.welcome}>
      <div id="hello" className={styles.hello}>Hello there...</div>
      <div id="caption" className={`${styles.caption}`}>This is your's truly</div>
        <div id="name" className={`${styles.name}`}>PRANAV SHARMA</div>
      </div>
      <div className={styles.profile}>
        {/* <img className={styles.image1} src="/images/profile.jpeg"/> */}
        <img className={styles.image1} src="/images/profile2.png"/>
        {/* <img className={styles.image3} src="/images/profilepicture_gray.jpeg"/> */} 
      </div>
      </div>
      </div>
    </div>
    <div id="thumbnail-container" className={styles['thumbnail-container']}>
          {/* <Cursor x={x} y={y}/> */}
          <div className={styles.thumbnails} style={{ '--time': '10s' }}>
          <article>
          <p className={`${styles.thumbnail} ${styles['thumbnail-outline']}`}>make your website flow</p>
          {/* <p className={`${styles.thumbnail}`}>make sustainable softwares</p> */}
          <p className={`${styles.thumbnail} ${styles['thumbnail-fill']}`}>experienced in different domains of softwares</p>
          </article>
          <article>
          <p className={`${styles.thumbnail} ${styles['thumbnail-outline']}`}>make your website flow</p>
          {/* <p className={`${styles.thumbnail}`}>make sustainable softwares</p> */}
          <p className={`${styles.thumbnail} ${styles['thumbnail-fill']}`}>experienced in different domains of softwares</p>
          </article>
          </div>
          <div className={styles.thumbnails} style={{ '--time': '10s' }}>
          <article>
          <div className={`${styles.thumbnail} ${styles['thumbnail-outline']}`}>creativity in every page of your website</div>
          <div className={`${styles.thumbnail} ${styles['thumbnail-fill']}`}>team player with worthful skills</div>
          </article>
          <article>
          <div className={`${styles.thumbnail} ${styles['thumbnail-outline']}`}>creativity in every page of your website</div>
          <div className={`${styles.thumbnail} ${styles['thumbnail-fill']}`}>team player with worthful skills</div>
          </article>
          </div>
        </div>
    <div id="rectangle1" className={styles.rectangle1}>
          <div className={styles.stacks}>
          <h4>Expertise in</h4>
            <div className={styles.developments}>
              <div className={styles.development}>
                <div className={styles.tape}></div>
                <div className={styles.tape}></div>
                <div className={styles.tape}></div>
              </div>
              {/* <div className={styles.development}>
              <h3> NODEJS
              EXPRESSJS
              GOLANG
              RESTAPI
              WEBSOCKETS
              MYSQL</h3>
              <h2>BACK END</h2>
              </div>
              <div className={styles.development}>
                <h3>AMAZON WEB SERVICES</h3>
                <h2>DEV OPS</h2>         
              </div>
              <div className={styles.development}>
                              <h3>
              POSTMAN
              VSCODE
              GIT & GITHUB</h3>
                <h2>TOOLS & SOFTWARES</h2>
              </div>
              <h3>HTML5
              CSS3
              JAVASCRIPT
              TAILWINDCSS
              BOOTSTRAP
              MATERIALUI
              JQUERY
              REACTJS
              NEXTJS</h3>
              <h2>FRONT END</h2> */}
              </div>
            </div>
            </div>
        {/* <div className={styles.stack}>
        <div className={styles.techs}>
          <Image className={styles['techs-img']} alt='html' width={100} height={100} src='/logo/html.png'/>
          <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/css.png'/>
          <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/js.png'/>
          <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/mui.png'/>
          <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/nextjs.png'/>
          </div>
          <div className="flex w-full">
          <div className="flex flex-col justify-evenly">
          <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/bootstrap.png'/>
          <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/tailwind.png'/>
          </div>
          <div className="p-10 relative">
          <h4>Expertise in</h4>
          <h2>FULLSTACK </h2>
          <h2>DEVELOPMENT</h2>
          </div>
          <div className="flex flex-col justify-evenly">
            <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/jQuery.png'/>
            <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/reactjs.png'/>
          </div>
          </div>
          <div className={styles.techs}>
            <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/nodejs.png'/>
            <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/expressjs.png'/>
            <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/golang.png'/>
            <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/mysql.png'/>
            <Image className={styles['techs-img']} alt='css' width={100} height={100} src='/logo/aws.png'/>
            </div>
        </div> */}
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
        {/* <aside>
        <video autoPlay muted loop src="/videos/aartas.mp4"/>
        <video autoPlay muted loop src="/videos/weddingweb.mp4"/>
        <video autoPlay muted loop src="/videos/ayurhomes.mp4"/>
        </aside> */}
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
      <p className="text-center py-4">Design & Develop with ❤️ by pranav sharma</p>
    </div>
  )
}
