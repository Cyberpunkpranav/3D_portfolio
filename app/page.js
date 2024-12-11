'use client'
import {useState, useEffect } from "react";
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
    // t1.to('#stack',{
    //   transform:'translateY(-100%)',
    // },0.5)
    // .fromTo('.gate1',{
    //   width: '50%',
    // },{
    //   width: '0%',
    // },1)
    // .fromTo('.gate2',{
    //   width: '50%',
    // },{
    //   width: '0%',
    // },1)
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
    })
    .to('#content',{
      opacity:0
    })
    .to('#content',{
      rotateX:0,
      rotateY:0,
      z:0
    })
    .to('#rectangle1',{
      height:'100vh',
    })
    .to('#content',{
      z:0,
    }).to('#front',{
     height:0
    }).to('#back',{
      height:0
     })
     .to('#rectangle1',{
      z:1000
     })
     .to('#experience',{
      height:'100vh'
     })
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

  console.log();
  
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
      <div  className={`${styles.content} grid place-items-center h-full w-full`}>
      <div id="content" className="p-5">
      <div id="caption" className={`${styles.caption}`}>This is your's truly</div>
      <div id="name" className={`${styles.name}`}>Pranav Sharma</div>
      </div>
      <div id="rectangle1" className={styles.rectangle1}>
        <div id="stack" className="h-full w-full grid place-items-center overflow-hidden">
        <div className={styles.stack}>
          <div className={styles.techstacks}>
          <h1 className={styles.front} id="front">FrontEnd</h1>
          <h1 className={styles.back} id="back"> BackEnd</h1>
          <h1 className={styles.full} id="full"> FullStack</h1>
          </div>
          <div>
            <h1>Engineer</h1>
          </div>
        </div>
        </div>
        <div className={` ${styles.tech_container}`}>   
      <div className={`flex mt-[30px] relative overflow-hidden gap-x-5 py-5 ${styles.techs}`} style={{ '--time': '60s' }}>
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
      <div className={`flex relative gap-x-5 overflow-hidden py-5 ${styles.techs}`} style={{ '--time': '60s' }}>
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
      {/* <div id="circle2" className={styles.circle2}></div> */}
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
