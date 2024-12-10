'use client'
import {useState, useEffect } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
      z:800,
    }).to('#content',{
      color:'white'
    }).to('#circle1',{
      height:'20vh',
      width:'20vh'
    }).to('#circle2',{
      height:'15vh',
      width:'15vh'
    }).to('#content',{
      z:0,
    })
    ScrollTrigger.create({
      animation:t1,
      start:'1vh center',
      trigger: "#content",
      end:'+=1000vh top',
      pin:'#portfolio',
      scrub:3,
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
      <div  className={`${styles.content} grid place-items-center relative h-full w-full`}>
      <div id="content" className="relative p-5">
      <div className={`${styles.caption}`}>This is your's truly</div>
      <div className={`${styles.name}`}>Pranav Sharma</div>
      <div id="circle1" className={styles.circle1}></div>
      <div id="circle2" className={styles.circle2}></div>
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
