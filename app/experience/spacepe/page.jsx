'use client'
import Image from 'next/image'
import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from './spacepe.module.css'
import Link from 'next/link';

const Page = () => {

    gsap.registerPlugin(ScrollTrigger)

    // useGSAP(()=>{
    //     const image1 = styles['crm1-img1']
    //     const image2 = styles['crm1-img2']
    //     const image3 = styles['crm1-img3']
        
    //     const t1 = gsap.timeline()
    //     t1.to(`.${image3}`,{
    //         top:'-25%',
    //         transform:`rotateX(0deg) scale(0.5)`
    //     },0).to(`.${image2}`,{
    //         top:'13%',
    //         transform:`rotateX(0deg) scale(0.5)`
    //     },0).to(`.${image1}`,{
    //         top:'50%',
    //         transform:`rotateX(0deg) scale(0.5)`
    //     },0)
    //     ScrollTrigger.create({
    //         animation:t1,
    //         trigger:'#crm1',
    //         toggleActions:'play reverse play reverse',
    //         start:'-200vh top',
    //         end:'400vh top',
    //         scrub:false,
    //         markers:false
    //     })
    // })
    // useGSAP(()=>{
    //     const image1 = styles['crm2-img1']
    //     const image2 = styles['crm2-img2']
    //     const image3 = styles['crm2-img3']
        
    //     const t2 = gsap.timeline()
    //     t2.to(`.${image3}`,{
    //         top:'-25%',
    //         transform:`rotateX(0deg) scale(0.5)`
    //     },0).to(`.${image2}`,{
    //         top:'13%',
    //         transform:`rotateX(0deg) scale(0.5)`
    //     },0).to(`.${image1}`,{
    //         top:'50%',
    //         transform:`rotateX(0deg) scale(0.5)`
    //     },0)
    //     ScrollTrigger.create({
    //         animation:t2,
    //         trigger:'#crm2',
    //         toggleActions:'play reverse play reverse',
    //         start:'-200vh top',
    //         end:'400vh top',
    //         scrub:false,
    //         markers:false
    //     })
    // })
    // useGSAP(()=>{
    //     const image1 = styles['crm3-img1']
        
    //     const t3 = gsap.timeline()
    //     t3.to(`.${image1}`,{
    //         height: '70%'
    //     },0).to(`.${image1}`,{
    //         transform: 'scale(1)'
    //     },0)
    //     ScrollTrigger.create({
    //         animation:t3,
    //         trigger:'#crm3',
    //         toggleActions:'play reverse play complete',
    //         start:'-200vh top',
    //         end:'400vh top',
    //         scrub:false,
    //         markers:false
    //     })
    // })

    // useGSAP(()=>{
    //     const image1 = styles['crm4-img1']
    //     const image2 = styles['crm4-img2']

    //     const t4 = gsap.timeline()
    //     t4.to(`.${image1}`,{
    //         height: '70%'
    //     },0).to(`.${image1}`,{
    //         transform: 'scale(1)'
    //     },0).to(`.${image2}`,{
    //         height: '70%'
    //     },0.5).to(`.${image2}`,{
    //         transform: 'scale(1)'
    //     },0.5)
    //     ScrollTrigger.create({
    //         animation:t4,
    //         trigger:'#crm4',
    //         toggleActions:'play reverse play complete',
    //         start:'-200vh top',
    //         end:'400vh top',
    //         scrub:false,
    //         markers:false
    //     })
    // })
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
            pin:'#website',
            trigger:'#website',
            start:'top top',
            delay:1,
            end:`${scrollWidth+(scrollWidth/7)}px botttom`,
            scrub:true,
            markers:false
        })
    })
  return (
    <>
    {/* <section className={styles.section}>
        <h1 className={styles.heading}>SpacePe LLP</h1>
        <h2 className={styles.subheading}>Customer Relationship Management </h2>
        <div id='crm1' className={styles.crm}>
        <div className={styles['crm-images']}>
        <Image alt='' unoptimized={true} className={styles['crm1-img1']} src='/images/spacepe/crm-create-complaint.png' height={100} width={100}/>
        <Image alt='' unoptimized={true} className={styles['crm1-img2']} src='/images/spacepe/crm-create-task.png' height={100} width={100}/>
        <Image alt='' unoptimized={true} className={styles['crm1-img3']} src='/images/spacepe/crm-create-lead.png' height={100} width={100}/>
        </div>
        <div className={styles['case-study']}>
            <div>
            <h6>Create leads tasks and complaints</h6>
            <div className='flex mb-2'><span className='mx-2'>&#8594;</span><p> In Customer Relationship Management , executive needs to create a lead in order to solve customer problems.</p></div>
            <div className='flex mb-2'><span className='mx-2'>&#8594;</span><p> Leads will get assigned to that corresponding task to execute it.</p></div>
            <div className='flex mb-2'><span className='mx-2'>&#8594;</span><p>If any customer still gets the issue , the executive could also create a complaint against a task or lead in it.</p></div>
            </div>
        </div>
        </div>
        <div id='crm2' className={styles.crm}>
        <div className={styles['case-study']}>
            <div>
            <h6>Customer accounts and statements</h6>
            <div className='flex mb-2'><span className='mx-2'>&#8594;</span><p> Customers account lists with custom search facility</p></div>
            <div className='flex mb-2'><span className='mx-2'>&#8594;</span><p> Account statements of each customer to get the information of ones statements</p></div>
            <div className='flex mb-2'><span className='mx-2'>&#8594;</span><p>Customer explained detail to help executive to know customer better</p></div>
            </div>
        </div>
        <div className={styles['crm-images']}>
        <Image alt='' unoptimized={true} className={styles['crm2-img1']} src='/images/spacepe/crm-accounts-list.png' height={100} width={100}/>
        <Image alt='' unoptimized={true} className={styles['crm2-img2']} src='/images/spacepe/crm-account-statements.png' height={100} width={100}/>
        <Image alt='' unoptimized={true} className={styles['crm2-img3']} src='/images/spacepe/crm-account-details.png' height={100} width={100}/>
        </div>
        </div>
        <div id='crm3' className={styles.crm2}>
        <div className={styles['case-study']}>
        <div>
        <h6>Download Sheets</h6>
        <div className='flex mb-2'><span className='mx-2'>&#8594;</span><p>Facility to download excel sheet of leads, tasks and complaints to help executive to complete their jobs.</p></div>
        </div>
        </div>
        <div className={styles['crm-images']}>
        <Image alt='' unoptimized={true} className={styles['crm3-img1']} src='/images/spacepe/crm-download-tasks.png' height={100} width={100}/>
        </div>
        </div>
        <div id='crm4' className={styles.crm2}>
        <div className={styles['crm-images']}>
        <Image alt='' unoptimized={true} className={styles['crm4-img1']} src='/images/spacepe/crm-rba-working.png' height={100} width={100}/>
        <Image alt='' unoptimized={true} className={styles['crm4-img2']} src='/images/spacepe/crm-rba-customer-download.png' height={100} width={100}/>
        </div>
        <div className={styles['case-study']}>
        <div>
        <h6>Rule Based Access - RBA</h6>
        <div className='flex mb-2'><span className='mx-2'>&#8594;</span><p>I contribute in this feature with the project manager to make it happen in front end as well as the backend structure </p></div>
        <div className='flex mb-2'><span className='mx-2'>&#8594;</span><p>It filters up the customers on the based conditions for choosen offer</p></div>
        <div className='flex mb-2'><span className='mx-2'>&#8594;</span><p>Executive can download the filtered customers to call and explain the offer to them</p></div>
        </div>
        </div>
        </div>
    </section> */}
    <section className={styles.section}>
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
    <section>
    <div id='website' className={styles.website}>
    <article>
        <div className={styles.box1}>
        <h2>TechRajendra</h2>
        </div>
        <div className={styles.box2}>
        <h6>techrajendra.com is a site where clients can see and have faith in the company&#39;s team that we can deliver the projects. The products we are working on and have delivered are smooth and good to use. Using animations, I made the website more catchy, and the product pages show the exact information and capability of our products.</h6>
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
    </>
  )
}

export default Page