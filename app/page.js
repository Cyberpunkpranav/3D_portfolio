'use client'
import {useState, useEffect } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Home() {  
  const [sparkles,setsparkles]=useState([
    {
      x:0,
      y:0
    },
    {
      x:0,
      y:10
    },
    {
      x:0,
      y:20
    },
    {
      x:0,
      y:30
    },
    {
      x:0,
      y:40
    },
    {
      x:0,
      y:50
    },
    {
      x:0,
      y:60
    },
    {
      x:0,
      y:70
    },
    {
      x:0,
      y:80
    },
    {
      x:0,
      y:90
    },
    {
      x:0,
      y:100
    }
  ])
  useGSAP(()=>{
    // .to('#bee-animate2', {
    //   paddingLeft:'25%',
    // },0).to('#bee-animate2',{
    //   opacity: 1,
    // },0.5).to('#bee-animate3',{
    //   left:'25%',
    //   paddingLeft:'25%',
    // },1).to('#bee-animate3',{
    //   opacity: 1,
    // },1.5)
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const bee = gsap.timeline();
      bee.to('#blast',{
        width: "100vh",
        height: "100vh",
      }).to('#cover',{
        opacity:1
      })
      ScrollTrigger.create({
          animation: bee,
          trigger: "#bee-animate",
          start: "top top",
          end: "+=1000vh center",
          scrub: 2,
          pin:'#bee-animate',
          markers:false,
          pinSpacer:false
      })
    }
  })


  return (
    <div id="bee-animate" className={styles.bee_animate}>
    {/* 
    <div id="bee-animate1" className={`${styles['bee-animate1']} section`}>
    <img className={styles['bee-animate1-image']}  src="/creatives/bumblebee.png"/>
    </div>
    <div id="bee-animate2" className={`${styles['bee-animate2']} section`}>
    <img className={styles['bee-animate2-image']} src="/creatives/bumblebee_active.png"/>
    </div>
    <div id="bee-animate3" className={`${styles['bee-animate3']} section`}>
    <div className="relative">
    <img className={styles['bee-animate3-image']}  src="/creatives/bumblebee_active_2.png"/>
    </div>
    </div> 
    */}
    <div id="blast" className={styles.blast}></div>
    {
      sparkles.map((data,i)=>(
        <div key={i} data-top={data.x} data-left={data.y} 
        style={{
          "--sparkles-top": `${data.x}%`,
          "--sparkles-left": `${data.y}%`,
        }} className={styles.sparkles}></div>
      ))
    }
    {/* <div id="cover" className={styles.cover}>
      <div className={styles.caption}>This is your's truly</div>
      <div className={styles.name}>Pranav Sharma</div>
    </div> */}
    </div>
  )
}
