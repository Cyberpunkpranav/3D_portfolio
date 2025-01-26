'use client'
import React from 'react'
import styles from './work.module.css'

const Work = () => {
  return (
    <section className={styles.work}>
        <h1>Work</h1>
        <div className={styles.videos}>
        <div className="relative h-full w-full">
        <video className={styles.video1} id="video1" autoPlay muted loop src="/videos/techrajendra.mp4"/>
        <video className={styles.video2} id="video2" autoPlay muted loop src="/videos/legalbuddy.mp4"/>
        <video className={styles.video3} id="video3" autoPlay muted loop src="/videos/connectapp.mp4"/>  
        <video className={styles.video4} id="video4" autoPlay muted loop src="/videos/ayurhomes.mp4"/> 
        </div>
      </div>
    </section>
  )
}

export default Work