'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from './aartas.module.css'
import Link from 'next/link';

const Aartas = () => {

    gsap.registerPlugin(ScrollTrigger)


     useGSAP(()=>{
          const imagesdiv = document.getElementById('web-images')
          const imageswidth = imagesdiv.scrollWidth;
          const scrollWidth = imageswidth - window.innerWidth;
          console.log(scrollWidth,scrollWidth+25*10);
          const t5 = gsap.timeline()
          t5.fromTo(`#web-images`,{
              x:0
          },{
              x:-(scrollWidth+(scrollWidth/4)),
              ease:"none"
          })
          ScrollTrigger.create({
              animation:t5,
              pin:'#section1',
              duration:2,
              trigger:'#website',
              start:'top top',
              end:`${(scrollWidth+(scrollWidth/4))}px bottom`,
              scrub:2,
              markers:false
          })
      },[])
    // <div className="flex justify-between items-center mt-3">
    // <p style={{marginTop:'0'}} className=''>Contribution</p>
    // <p style={{marginTop:'0'}} className={styles.livesite}><a target='__blank' href='https://crm.southeast.ind.deploy.techrajendra.com/' >see demo</a></p>
    // </div>
  return (
        <div className=''>
     <section className={`${styles.section} overflow-x-hidden`} id='section1'>
    <div id='website' className={styles.website}>
    <article>
        <div className={styles.box1}>
        <h2>Connect App</h2>
        </div>
        <div className={styles.box2}>
        <h6><span className='ml-10'></span>techrajendra.com is a site where clients can see and have faith in the company&#39;s team that we can deliver the projects. The products we are working and delivered, are smooth and good to use. Using animations, I made the website more catchy, and the product pages show the exact information and capability of our products.</h6>
        </div>
        <div className={styles.box3}>
        <p>Contribution</p>
        <p>Developed and maintaining whole website as a solo project</p>
        <p className={styles.livesite}><a target='__blank' href='https://www.techrajendra.com' >Live site</a></p>
        </div>
    </article>
    <div className=''>
        <aside id='web-images' className='relative'>
            <Image alt='' className={styles['web-img-1']} unoptimized={true} src='/images/spacepe/website-homepage.png' height={100} width={100}/>
            <video src='/videos/spacepe/website-baas-mobile.mp4' autoPlay muted loop/>
            <Image alt='' className={styles['web-img-2']} unoptimized={true} src='/images/spacepe/website-products.png' height={100} width={100}/>
            <video src='/videos/spacepe/website-product-crm.mp4' autoPlay muted loop/>
            <Image alt='' className={styles['web-img-3']} unoptimized={true} src='/images/spacepe/website-product-baas.png' height={100} width={100}/>
            <Image alt='' className={styles['web-img-4']} unoptimized={true} src='/images/spacepe/website-blogs.png' height={100} width={100}/>
            <Image alt='' className={styles['web-img-5']} unoptimized={true} src='/images/spacepe/website-contact.png' height={100} width={100}/>
        </aside>
        </div>
    </div>
    </section>
    <section className={styles.section} id='section2'>
        <div className={styles.crm}>
            <aside className=''>
            <h2 className='pt-[5vh]'>CRM Dashboard</h2>
            <div className="flex justify-between items-center mt-3">
            <h6 style={{marginTop:'0'}} className=''>Contribution</h6>
            <p style={{marginTop:'0'}} className={styles.livesite}><a target='__blank' href='https://crm.southeast.ind.deploy.techrajendra.com/' >see demo</a></p>
            </div>
            <p> In Customer Relationship Management , executive needs to create a lead in order to solve customer problems.</p>
            <p> Leads will get assigned to that corresponding task to execute it.</p>
            <p>If any customer still gets the issue , the executive could also create a complaint against a task or lead in it.</p>
            <p>Customers account lists with custom search facility</p>
            <p>Account statements of each customer to get the information of ones statements</p>
            <p>Customer explained detail to help executive to know customer better</p>
            <p>Facility to download excel sheet of leads, tasks and complaints to help executive to complete their jobs.</p>
            <p>I contribute in Rule Based Access - RBA feature along with the project manager to make it happen in front end as well as the backend structure </p>
            <p>It filters up the customers on the based conditions for choosen offer</p>
            <p>Executive can download the filtered customers to call and explain the offer to them</p>
            </aside>    
            <article>
                <video src='/videos/spacepe/crm-dashboard.mov' autoPlay muted loop/>
                <div className='flex flex-wrap justify-between'>
                <Image alt='' unoptimized={true} className={styles['crm1-img1']} src='/images/spacepe/crm-create-complaint.png' height={100} width={100}/>
                <Image alt='' unoptimized={true} className={styles['crm1-img2']} src='/images/spacepe/crm-create-task.png' height={100} width={100}/>
                <Image alt='' unoptimized={true} className={styles['crm1-img3']} src='/images/spacepe/crm-create-lead.png' height={100} width={100}/>
                <Image alt='' unoptimized={true} className={styles['crm2-img1']} src='/images/spacepe/crm-accounts-list.png' height={100} width={100}/>
                <Image alt='' unoptimized={true} className={styles['crm2-img2']} src='/images/spacepe/crm-account-statements.png' height={100} width={100}/>
                <Image alt='' unoptimized={true} className={styles['crm2-img3']} src='/images/spacepe/crm-account-details.png' height={100} width={100}/>
                <Image alt='' unoptimized={true} className={styles['crm3-img1']} src='/images/spacepe/crm-download-tasks.png' height={100} width={100}/>
                <Image alt='' unoptimized={true} className={styles['crm4-img1']} src='/images/spacepe/crm-rba-working.png' height={100} width={100}/>
                <Image alt='' unoptimized={true} className={styles['crm4-img2']} src='/images/spacepe/crm-rba-customer-download.png' height={100} width={100}/>
                </div>
            </article>
        </div>
    </section>
    <a href='/experience/legalbuddy'><h2 className='flex items-center justify-end text-right font-extralight px-5 mt-[10vh]'><span>Next</span> <Image alt='' className='ml-5' src='/icons/arrow-right.png' width={25} height={25}/></h2></a>
    </div>
  )
}

export default Aartas