'use client'
import {useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Home() {  
  const [sparkles,setsparkles]=useState([])
  const [sparkleColors,setSparkleColors] = useState(["#08090b","#0c6da1","#0caad8","#0b5771","#09375a","#061b33","#09303c","#657171","#373a3c","#748c8c"])
  const SparklesGeneration = (number)=>{
    let arr = []

    for(let i=0;i<number;i++){
      const x=  Math.round(Math.random()*100)
      const y=  Math.round(Math.random()*100)
      const size=Math.round(Math.random()*10)
      const delay = Math.random()*1
      const duration = Math.random()*2
      arr.push({x:x,y:y,size:size,delay:delay,duration:duration})
    }
    return arr
  }
  useEffect(()=>{
    setsparkles(SparklesGeneration(200))
  },[])
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    const t1 = gsap.timeline()
    t1.to('#content',{
      rotateX:60,
      rotateY:60,
      z:500
    },0)
    .to('#content',{
      rotateX:75,
      rotateY:75,
      z:600
    },0)
    .to('#content',{
      rotateX:90,
      rotateY:90,
      z:700
    },0)
    .to('#rectangle1',{
      height:'5px',
    },0.6)
    .to('#content',{
      opacity:0
    },0.6)
    .to('#content',{
      rotateX:0,
      rotateY:0,
      z:0
    },1.2)
    .to('#rectangle1',{
      height:'100vh',
    },1.2)
    .to('#content',{
      z:0,
    },1.2)
     .to('#rectangle1',{
      xPercent:-100
     },1.9)
     .to('#experience',{
      width:'100%'
     },1.9)
    ScrollTrigger.create({
      animation:t1,
      start:'1vh center',
      trigger: "#content",
      end:'+=4000vh top',
      pin:'#portfolio',
      scrub:1,
      markers:false
    })
  },[])

  const thumbnails = ['make your website flow','make sustainable softwares','experienced in different domains of softwares','creativity in every page of your website','team player with worthful skills']
  const [thumbnail,setthumbnail] = useState(thumbnails[0])
  const indexRef = useRef(0); // Use a ref to track the current index


  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % thumbnails.length; // Update the index
      setthumbnail(thumbnails[indexRef.current]); // Set the new thumbnail
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [thumbnails]);
  
  return (
    <div id="portfolio">
    <div id="explosion" className={styles.explosion}>
    <div id="blast" className={styles.blast}></div>
    {
      sparkles.map((data,i)=>(
        <div key={i} data-top={data.x} data-left={data.y} 
        style={{
          "--sparkles-top": `${data.x}%`,
          "--sparkles-left": `${data.y}%`,
          "--sparkles-size": `${data.size}vh`,
          "--sparkles-delay": `${data.delay}s`,
          "--sparkles-duration": `${data.duration}s`,
          backgroundColor:`${sparkleColors[Math.round(Math.random(sparkleColors)*sparkleColors.length)]}`,
          boxShadow:`0px 0px 1px 4px ${sparkleColors[Math.round(Math.random(sparkleColors)*sparkleColors.length)]}`
        }} className={styles.sparkles}></div>
      ))
    }
    <div id="cover" className={styles.cover}>
      <div className={`${styles.content} grid place-items-center h-full w-full`}>
      <div id="content" className="p-5">
      <div id="caption" className={`${styles.caption}`}>This is your's truly</div>
      <div id="name" className={`${styles.name}`}>Pranav Sharma</div>
      </div>
      <div id="rectangle1" className={styles.rectangle1}>
        <div id="stack" className="h-[100vh] w-full flex flex-col align-items-center justify-center overflow-hidden">
        <div className={styles.stack}>
          <h4>Expertise in</h4>
          <h1>FullStack Development</h1>
        </div>
        <div id="thumbnail-container" className={styles['thumbnails-container']}>
        <div className={styles.thumbnails}>
        <p id="thumbnail1" className={`${styles.thumbnail}`}>{thumbnail}</p>
        </div>
        </div>
        </div>
        <div className={`${styles.tech_container}`}>   
      <div className={`flex relative gap-x-5 overflow-hidden py-5 ${styles.techs}`} style={{ '--time': '80s' }}>
      <article className='flex items-center'>
      <div><Image alt='html' width={100} height={100} src='/logo/html.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/css.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/js.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/jQuery.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/bootstrap.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/tailwind.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/reactjs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/nodejs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/nextjs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/expressjs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/golang.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/mysql.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/aws.png'/></div>
      </article>
      <article className='flex items-center'>
      <div><Image alt='html' width={100} height={100} src='/logo/html.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/css.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/js.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/jQuery.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/bootstrap.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/tailwind.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/reactjs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/nodejs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/nextjs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/expressjs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/golang.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/mysql.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/aws.png'/></div>
      </article>
      </div>
      <div className={`flex relative gap-x-5 overflow-hidden py-5 ${styles.techs}`} style={{ '--time': '80s' }}>
      <article className='flex items-center'>
      <div><Image alt='css' width={100} height={100} src='/logo/aws.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/mysql.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/golang.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/expressjs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/nextjs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/nodejs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/reactjs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/tailwind.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/bootstrap.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/jQuery.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/js.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/css.png'/></div>
      <div><Image alt='html' width={100} height={100} src='/logo/html.png'/></div>
      </article>
      <article className='flex items-center'>
      <div><Image alt='css' width={100} height={100} src='/logo/aws.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/mysql.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/golang.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/expressjs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/nextjs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/nodejs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/reactjs.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/tailwind.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/bootstrap.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/jQuery.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/js.png'/></div>
      <div><Image alt='css' width={100} height={100} src='/logo/css.png'/></div>
      <div><Image alt='html' width={100} height={100} src='/logo/html.png'/></div>
      </article>
      </div>
      </div>
      </div>
      <div id="experience" className={styles.experience}>
        <h1>Experience</h1>
      </div>
      </div>
    </div>
    </div>
    {/* <div id="stack" className={`${styles.stack}`}>
    <div className={`${styles.gate1} gate1`}>1</div>
    <div className={`${styles.gate2} gate2`}>2</div>

    </div> */}
    </div>
  )
}
