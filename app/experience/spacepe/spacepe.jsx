'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from './spacepe.module.css'

const SpacePe = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        const imagesdiv = document.getElementById('web-images')
        const screenwidth = imagesdiv.offsetWidth;
        const imageswidth = imagesdiv.scrollWidth;
        const scrollWidth = imageswidth - screenwidth;
        console.log(scrollWidth);
        const t5 = gsap.timeline()
        t5.fromTo(`#web-images`,{
            x:0
        },{
            x:-(scrollWidth+(scrollWidth/7)),
            ease:"none"
        })
        ScrollTrigger.create({
            animation:t5,
            pin:'#section1',
            duration:2,
            trigger:'#website',
            start:'top top',
            end:`${scrollWidth+(scrollWidth/7)}px botttom`,
            scrub:true,
            markers:false
        })
    },[])

  return (
    <div className=''>
     <section className={styles.section} id='section1'>
    <div id='website' className={styles.website}>
    <article>
        <div className={styles.box1}>
        <h2>TechRajendra</h2>
        </div>
        <div className={styles.box2}>
        <p>techrajendra.com is a site where clients can see and have faith in the company&#39;s team that we can deliver the projects. The products we are working on and have delivered are smooth and good to use. Using animations, I made the website more catchy, and the product pages show the exact information and capability of our products.</p>
        </div>
        <div className={styles.box3}>
        <p>Contribution</p>
        <p>Developed and maintaining whole website as a solo project</p>
        <p className={styles.livesite}><a target='__blank' href='https://www.techrajendra.com' >Live site</a></p>
        </div>
    </article>
    <div className='overflow-x-hidden mt-[10vh]'>
        <aside id='web-images' className='relative'>
            <Image alt='' className={styles['web-img-1']} unoptimized={true} src='/images/spacepe/website-homepage.png' height={100} width={100}/>
            <video src='/videos/spacepe/website-baas-mobile.mp4' autoPlay muted loop/>
            <Image alt='' className={styles['web-img-2']} unoptimized={true} src='/images/spacepe/website-contact.png' height={100} width={100}/>
            <video src='/videos/techrajendra.mp4' autoPlay muted loop/>
            <Image alt='' className={styles['web-img-3']} unoptimized={true} src='/images/spacepe/website-product-baas.png' height={100} width={100}/>
            <Image alt='' className={styles['web-img-4']} unoptimized={true} src='/images/spacepe/website-products.png' height={100} width={100}/>
            <video src='/videos/spacepe/website-product-crm.mp4' autoPlay muted loop/>
            <Image alt='' className={styles['web-img-5']} unoptimized={true} src='/images/spacepe/website-product-contact.png' height={100} width={100}/>
        </aside>
        </div>
    </div>
    </section>
    <section className={styles.section} id='section2'>
        <div className={styles.crm}>
            <aside>
            <h2>Customer Relationship Management</h2>
            <div className="flex justify-between items-center mt-3">
            <p style={{marginTop:'0'}} className=''>Contribution</p>
            <p style={{marginTop:'0'}} className={styles.livesite}><a target='__blank' href='https://crm.southeast.ind.deploy.techrajendra.com/' >see demo</a></p>
            </div>
            <p> In Customer Relationship Management , executive needs to create a lead in order to solve customer problems.</p>
            <p> Leads will get assigned to that corresponding task to execute it.</p>
            <p>If any customer still gets the issue , the executive could also create a complaint against a task or lead in it.</p>
            <p> Customers account lists with custom search facility</p>
            <p> Account statements of each customer to get the information of ones statements</p>
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
    </div>
  )
}

export default SpacePe