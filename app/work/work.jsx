'use client'
import React from 'react'
import styles from './work.module.css'
import Image from 'next/image'

const Work = () => {
  return (
    <section className={styles.work}>
      <div className="flex flex-wrap justify-between items-end border-b-2 border-black">
        <h1 className='mr-5 text-red'>Work</h1>
        <p className='text-brown'>Versatile experience | Different domains</p>
      </div>
        <div className={styles.videos}>
        <div className="relative h-full w-full">
        </div>
      </div>
      <div id='spacepe' className="flex flex-wrap justify-between items-center">
      <h2 className='inline-block mr-5'>SpacePe LLP</h2>
      <p className='inline-block text-brown'>may 2024 - current</p>
        </div> 
      <h3><span className='mr-5'>1.</span>techrajendra.com</h3>
      <main>
        <aside>
          <div className='relative'>
          <video autoPlay muted loop className={styles.video}>
          <source src='/videos/techrajendra.mp4' />
          </video>
          </div>
        </aside>
        <article>
      <p><a className='text-red' target='__blank' href='https://www.techrajendra.com'>techrajendra.com</a> is a site where clients can see and have faith in the company&#39;s team that we can deliver the projects. The products we are working and delivered, are smooth and good to use. Using animations, I made the website more catchy, and the product pages show the exact information and capability of our products.</p>
      <div className="flex flex-wrap gap-10 items-start mt-10">
      <div>
      <h6 className='text-red'>Main Stack</h6>
      <p>Next JS</p>
      <p>Tailwind & SCSS</p>
      <p>GSAP</p>
      </div>
      <div>
      <h6 className='text-red'>Contribution</h6>
      <p>Solo project</p>
      <p>SEO integration</p>
      <p>WordPress API integration</p>
      </div>
      <div>
      <h6 className='text-red'>Date</h6>
      <p>2024-2025</p>
      </div>
      </div>
      </article>
      </main>
      <h3><span className='mr-5'>2.</span>Customer Relationship Management</h3>
      <main>
      <article>
      <p><a className='text-red' target='__blank' href='http://crm.southeast.ind.deploy.techrajendra.com/'>CRM</a> is a bank cusotmer relationship management tool to help executives makes work easy and solve problems of the customers smoothly. The main feature of the crm is RBA which help executives to get customers filtered by certain merits and parameters so that they could offer bank deals to them according to the customer eligibility.</p>
      <div className="flex flex-wrap gap-10 items-start mt-10">
      <div>
      <h6 className='text-red'>Main Stack</h6>
      <p>React JS</p>
      <p>Tailwind CSS</p>
      <p>odoo APIs</p>
      </div>
      <div>
      <h6 className='text-red'>Contribution</h6>
      <p>leads, tasks complaint & accounts system</p>
      <p>Feature design of Rule based Access</p>
      <p>Stable Predevelopment management</p>
      </div>
      <div>
      <h6 className='text-red'>Date</h6>
      <p>2024-2025</p>
      </div>
      </div>     
      </article>
      <aside>
        <div className="relative">
        <video autoPlay muted loop className={styles.video} src='/videos/spacepe/crm-dashboard.mov'/>
        </div>
      </aside>
      </main>
      <div id='legalbuddy' className="flex flex-wrap justify-between items-center">
      <h2 className='inline-block mr-5'>Legal Buddy Pvt Ltd</h2>
      <p className='inline-block text-brown'>Jan 2024 - May 2024</p>
      </div> 
      <h3><span className='mr-5'>1.</span>legalbuddy.in</h3>
      <main>
        <aside>
          <div className="relative">
          <video autoPlay muted loop className={styles.video} src="/videos/legalbuddy.mp4"/>
          </div>
        </aside>
      <article>
      <p><a target='__blank' href='https://www.legalbuddy.in' className='text-red'>legalbuddy.in</a> is a platform designed to simplify access to legal services and resources. It offers user-friendly solutions for legal queries, documentation, and expert consultations. The website ensures a seamless experience for individuals and businesses seeking professional legal support. With LegalBuddy.in, navigating legal complexities becomes effortless.</p>
      <div className="flex flex-wrap gap-10 items-start mt-10">
      <div>
      <h6 className='text-red'>Main Stack</h6>
      <p>Next JS</p>
      <p>Bootstrap</p>
      <p>Node & ExpressJs</p>
      <p>My SQL</p>
      </div>
      <div>
      <h6 className='text-red'>Contribution</h6>
      <p>FullStack Development</p>
      <p>RazorPay Integration</p>
      <p>Subscription model</p>
      <p>Feature designing</p>
      </div>
      <div>
      <h6 className='text-red'>Date</h6>
      <p>2024</p>
      </div>
      </div>   
      </article>
      </main>
      <h3><span className='mr-5'>2.</span>legalbuddy.in Dashboard</h3>
      <main>
      <article>
      <p>Dashboard allows lawyers and their executives to write and manage legal practices content. Lawyers can write clauses resolutions acts & rules and blogs which is designed to understand and consume the easiest way possible all gets powered and controlled by this dashboard in the website. All the user subscribtion could also managed inside the dashboard too and much more. </p>
      <div className="flex flex-wrap gap-10 items-start mt-10">
      <div>
      <h6 className='text-red'>Main Stack</h6>
      <p>React JS</p>
      <p>Bootstrap</p>
      <p>Node & ExpressJs</p>
      <p>My SQL</p>
      </div>
      <div>
      <h6 className='text-red'>Contribution</h6>
      <p>FullStack Development</p>
      <p>RazorPay Integration</p>
      <p>AWS deployment</p>
      <p>Mailing system</p>
      </div>
      <div>
      <h6 className='text-red'>Date</h6>
      <p>2024</p>
      </div>
      </div>   
      </article>
      <aside>
          <div className="relative">
            <Image unoptimized={true} width={100} height={100} src='/images/comingsoon.jpg'/>
          </div>
        </aside>
      </main>
      <div id='aartas' className="flex flex-wrap justify-between items-center">
      <h2 className='inline-block mr-5'>Aartas Care Pvt Ltd</h2>
      <p className='inline-block text-brown'>Oct 2022 - Dec 2023</p>
      </div> 
      <h3><span className='mr-5'>1.</span>ConnectApp Dashboard</h3>
      <main>
      <aside>
          <div className="relative">
          <video autoPlay muted loop className={styles.video} src="/videos/connectapp.mp4"/>
          </div>
        </aside>
      <article>
      <p>ConnectApp Dashboard connects the unique concept of pay as per you go model of renting medical space of aartas to individual doctors. From handling patients for doctors to the inventory managment all the internal work is done on this dashboard by respective aartas customer executives. I helped to make its nwer version as seen in it and added more advanced feature in it like excel insertion of medicines for phramacy and reports system to help executives for smoother process. </p>
      <div className="flex flex-wrap gap-10 items-start mt-10">
      <div>
      <h6 className='text-red'>Main Stack</h6>
      <p>React JS</p>
      <p>Bootstrap</p>
      <p>Golang for APIs</p>
      <p>Websockets</p>
      </div>
      <div>
      <h6 className='text-red'>Contribution</h6>
      <p>Excel support for scanning medicines </p>
      <p>Group Chat using websockets </p>
      <p>Azure deployment with CI/CD Pipeline</p>
      <p>Automated GST calculation while billing </p>
      </div>
      <div>
      <h6 className='text-red'>Date</h6>
      <p>2022-2023</p>
      </div>
      </div>   
      </article>
      </main>
      <h3><span className='mr-5'>2.</span>Prototype Website</h3>
      <main>
      <article>
        <p>It was a frequent one month project to make a animted website for the company&#39;s profile total of 3-4 pages showcasing aartas capibilites and their doctors. </p>
        <div className="flex flex-wrap gap-10 items-start mt-10">
      <div>
      <h6 className='text-red'>Main Stack</h6>
      <p>HTML</p>
      <p>CSS</p>
      <p>Bootstrap</p>
      <p>JQuery</p>
      </div>
      <div>
      <h6 className='text-red'>Contribution</h6>
      <p>GSAP for animations</p>
      <p>Web design </p>
      <p>Continuous development</p>
      <p>In one month along with UI designer </p>
      </div>
      <div>
      <h6 className='text-red'>Date</h6>
      <p>2023</p>
      </div>
      </div> 
      </article>
      <aside>
        <div className="relative">
        <video autoPlay muted loop className={styles.video} src="/videos/aartas.mp4"/>
        </div>
      </aside>
      </main>
      <div id='addon' className="flex flex-wrap justify-between items-center">
      <h2 className='inline-block mr-5'>Addon Shareware Pvt Ltd</h2>
      <p className='inline-block text-brown'>Apr 2022 - Oct 2022</p>
      </div> 
      <h3><span className='mr-5'>1.</span>Ayur Homes</h3>
      <main>
        <aside>
          <div className="relative">
          <video autoPlay muted loop className={styles.video} src="/videos/ayurhomes.mp4"/> 
          </div>
        </aside>
        <article>
          <p>Ayur homes was the client for addon and i succesfully delivered their website with the team within the projected timeline and as per demand user interface and design.</p>
          <div className="flex flex-wrap gap-10 items-start mt-10">
      <div>
      <h6 className='text-red'>Main Stack</h6>
      <p>HTML</p>
      <p>CSS</p>
      <p>Bootstrap</p>
      <p>JQuery</p>
      </div>
      <div>
      <h6 className='text-red'>Contribution</h6>
      <p>Project completion</p>
      <p>Js integration in .Net framework</p>
      <p>On demand development</p>
      </div>
      <div>
      <h6 className='text-red'>Date</h6>
      <p>2022</p>
      </div>
      </div> 
        </article>
        <h3><span className='mr-5'>2.</span>Andy & Sara</h3>
      </main>
      <main>
        <article>
          <p>Practice Project to show off skills and capability of our team to get client belief and faith for the achievements we could make.</p>
          <div className="flex flex-wrap gap-10 items-start mt-10">
      <div>
      <h6 className='text-red'>Main Stack</h6>
      <p>HTML</p>
      <p>CSS</p>
      <p>Bootstrap</p>
      <p>JQuery</p>
      </div>
      <div>
      <h6 className='text-red'>Contribution</h6>
      <p>Project completion</p>
      <p>Solo Project</p>
      </div>
      <div>
      <h6 className='text-red'>Date</h6>
      <p>2022</p>
      </div>
      </div> 
        </article>
        <aside>
          <div className="relative">
          <video autoPlay muted loop className={styles.video} src="/videos/weddingweb.mp4"/> 
        </div>
        </aside>
      </main>
    </section>
  )
}

export default Work