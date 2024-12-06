'use client'
import {useState, useEffect } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Home() {  
  useGSAP(()=>{
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const bee = gsap.timeline();
      bee.to('#bee-animate2', {
        paddingLeft:'25%',
      },0).to('#bee-animate2',{
        opacity: 1,
      },0.5).to('#bee-animate3',{
        left:'25%',
        paddingLeft:'25%',
      },1).to('#bee-animate3',{
        opacity: 1,
      },1.5)
      ScrollTrigger.create({
          animation: bee,
          trigger: "#bee-animate",
          start: "top top",
          end: "+=1000vh center",
          scrub: true,
          pin:'#bee-animate',
          markers:false,
          pinSpacer:false
      })
    }
  })


  return (
    <div id="bee-animate" className={styles.bee_animate}>
    <div id="bee-animate1" className={`${styles['bee-animate1']} section`}>
    <img className={styles['bee-animate1-image']}  src="/creatives/bumblebee.png"/>
    </div>
    <div id="bee-animate2" className={`${styles['bee-animate2']} section`}>
    <img className={styles['bee-animate2-image']} src="/creatives/bumblebee_active.png"/>
    {/* <img id="cracked_floor" className={styles.cracked_floor} src="/creatives/cracked_floor.png"/> */}
    </div>
    <div id="bee-animate3" className={`${styles['bee-animate3']} section`}>
    <img className={styles['bee-animate3-image']}  src="/creatives/bumblebee_active_2.png"/>
    </div>
    </div>
  )
}
