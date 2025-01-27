'use client'
import React from 'react'
import styles from './work.module.css'
import Image from 'next/image'

const Work = () => {
  return (
    <section className={styles.work}>
        <h1>Work</h1>
        <div className={styles.videos}>
        <div className="relative h-full w-full">
        </div>
      </div>
      <h2 className='w-full'>SpacePe LLP</h2>
      <h3>techrajendra.com</h3>
      <main>
        <aside>
          <div className='relative'>
          <Image width={100} height={100} alt='play video' src='/icons/play.png'/>
          <video className={styles.video}>
          <source src='/videos/techrajendra.mp4' />
          </video>
          </div>
        </aside>
        <article>
        <h5>About techrajendra.com</h5>
      <p>techrajendra.com is a site where clients can see and have faith in the company&#39;s team that we can deliver the projects. The products we are working and delivered, are smooth and good to use. Using animations, I made the website more catchy, and the product pages show the exact information and capability of our products.</p>
      <h5>Tech Stack</h5>
      <p className='flex flex-wrap justify-between gap-y-10'><span>Next JS</span><span>Scss</span><span>Tailwind CSS</span><span>Wordpress API</span><span>GSAP</span></p>
      </article>
      </main>
      <main>
      <article>
      <h5>About CRM Dashboard</h5>
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
      </article>
      <aside>
        <div className="relative">
        <video className={styles.video} src='/videos/spacepe/crm-dashboard.mov'/>
        <Image width={100} height={100} alt='play video' src='/icons/play.png'/>

        </div>
      </aside>
      </main>
      <h2 className='w-full'>Legal Buddy Pvt Ltd</h2>
      <main>
        <aside>
          <div className="relative">
          <Image width={100} height={100} alt='play video' src='/icons/play.png'/>
          <video className={styles.video} src="/videos/legalbuddy.mp4"/>
          </div>
        </aside>
      <article>
      <p>legalbuddy.in is a platform designed to simplify access to legal services and resources. It offers user-friendly solutions for legal queries, documentation, and expert consultations. The website ensures a seamless experience for individuals and businesses seeking professional legal support. With LegalBuddy.in, navigating legal complexities becomes effortless.</p>
      </article>
      </main>
      <h2 className='w-full'>Aartas Care Pvt Ltd</h2>
      <main>
        <aside>
          <div className="relative">
          <video className={styles.video} src="/videos/connectapp.mp4"/>
          <Image width={100} height={100} alt='play video' src='/icons/play.png'/>
          </div>
        </aside>
        <article>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A reiciendis optio inventore cum velit minima magnam, tenetur odio, molestias maxime architecto rerum aut in ut labore modi, recusandae rem? Facilis.</article>
      </main>
      <main>
      <article>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aperiam minima dignissimos iure similique voluptatem asperiores? Blanditiis fugit debitis voluptas aperiam facilis ullam minima amet eaque, enim maiores ratione corrupti.
      </article>
      <aside>
        <div className="relative">
        <video className={styles.video} src="/videos/aartas.mp4"/>
        <Image width={100} height={100} alt='play video' src='/icons/play.png'/>
        </div>
      </aside>
      </main>
      <h2 className='w-full'>Addon Shareware Pvt Ltd</h2>
      <main>
        <aside>
          <div className="relative">
          <Image width={100} height={100} alt='play video' src='/icons/play.png'/>
          <video className={styles.video} src="/videos/ayurhomes.mp4"/> 
          </div>
        </aside>
        <article>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod illum id est enim soluta mollitia dolores necessitatibus nihil consequatur laborum sint atque veritatis eius architecto optio, unde vitae temporibus veniam?
        </article>
      </main>
      <main>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum autem et ad minus doloribus. Consequatur praesentium aperiam sed, natus tempora tempore ducimus sit qui exercitationem non magni quo quis quidem.
        </article>
        <aside>
          <div className="relative">
          <Image width={100} height={100} alt='play video' src='/icons/play.png'/>
          <video className={styles.video} src="/videos/weddingweb.mp4"/> 
        </div>
        </aside>
      </main>
    </section>
  )
}

export default Work