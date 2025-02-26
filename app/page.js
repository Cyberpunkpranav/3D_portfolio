'use client'
import { useState, useEffect, useRef, use } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import About from "./about_me/about";
import Work from "./work/work";
import Experience from "./components/cards/experience/experience";

export default function Home() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    const MouseMov = (e) => {
      setX(e.clientX)
      setY(e.clientY)
    }
    document.addEventListener('mousemove', MouseMov)
    return () => {
      document.removeEventListener('mousemove', MouseMov)
    }
  }, [x, y])
  gsap.registerPlugin(ScrollTrigger)


  useGSAP(() => {
    const Creative = styles.creative;
    const CreativeArray = gsap.utils.toArray(`.${Creative}`)
    gsap.fromTo(CreativeArray, {
      transform: 'translateY(10%)',
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      scale: 1,
      marginLeft: '0px',
      marginRight: '0px',
    }, {
      transform: 'translateY(0)',
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scale: 1.3,
      marginLeft: '0.3vw',
      marginRight: '0.3vw',
      ease: "power2.out", // Add easing for smooth effect
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".cover",
        start: "top bottom",
        end: "top center",
        scrub: false,
        markers: false,
      }
    })
    const Thumbnail = styles.thumbnail;
    const ThumbnailArray = gsap.utils.toArray(`.${Thumbnail}`)

    gsap.to(ThumbnailArray, {
      color: 'var(--black)',
      y: 0,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#thumbnail-container",
        start: "-200vh center",
        end: "center top",
        scrub: true,
        markers: false,
      }
    })

    const Utilities = styles['dev-utilities-wraps']
    const UtilitiesArray = gsap.utils.toArray(`.${Utilities}`)

    gsap.fromTo(UtilitiesArray, {
      transform: 'translateY(15vh)',
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    }, {
      transform: 'translateY(0)',
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.out", // Add easing for smooth effect
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#rectangle1",
        start: "top center",
        end: "bottom center",
        scrub: false,
        markers: false,
      }
    })

    const TechSquares = styles['tech-square']
    const TechSquaresArray = gsap.utils.toArray(`.${TechSquares}`)

    gsap.fromTo(TechSquaresArray, {
      scale: 0
    }, {
      scale: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#rectangle1",
        start: "-200vh top",
        end: "bottom center",
        scrub: true,
        markers: false,
        markers: false,
      }
    })
    // const Experience = styles['experience']
    // const ExperiencesArray = gsap.utils.toArray(`.${Experience}`)

    // gsap.fromTo(ExperiencesArray, {
    //   yPercent:100,
    //   opacity:0
    //   },{
    //     yPercent:0,
    //     opacity:1,
    //     ease: "power2.out", // Add easing for smooth effect
    //     duration:1,
    //     stagger: 0.2,
    //     scrollTrigger: {
    //     trigger: "#experiences",
    //     start: "-200vh top",
    //     end: "bottom bottom", 
    //     scrub: true,      
    //     markers:false,
    //   }
    // })


  }, [])

  return (
    <div id="portfolio">
      <div id="cover" className={styles.cover}>
        <div className={`${styles.content} h-full w-full`} >
          <div className="absolute bottom-0 text-right right-0 p-4 lg:mb-[5vh]">
            <small>18.12.2000</small>
            <br />
            <small> Started in 2021</small>
          </div>
          <div>
            <p className="text-left p-2">I &#39; m a</p>
            <h1 className="flex flex-wrap justify-center z-[500] ">
              <span className={styles.punchline}>
                <div style={{ color: 'var(--red)' }} className={styles.creative}>C</div>
                <div style={{ color: 'var(--red)' }} className={styles.creative}>r</div>
                <div style={{ color: 'var(--red)' }} className={styles.creative}>e</div>
                <div style={{ color: 'var(--red)' }} className={styles.creative}>a</div>
                <div style={{ color: 'var(--red)' }} className={styles.creative}>t</div>
                <div style={{ color: 'var(--red)' }} className={styles.creative}>i</div>
                <div style={{ color: 'var(--red)' }} className={styles.creative}>v</div>
                <div style={{ color: 'var(--red)' }} className={styles.creative}>e</div>
              </span>
              <span className={styles.punchline}>
                <div className={styles.creative}>W</div>
                <div className={styles.creative}>e</div>
                <div className={styles.creative}>b</div>
              </span>
              <span className={styles.punchline}>
                <div className={styles.creative}>D</div>
                <div className={styles.creative}>e</div>
                <div className={styles.creative}>v</div>
                <div className={styles.creative}>e</div>
                <div className={styles.creative}>l</div>
                <div className={styles.creative}>o</div>
                <div className={styles.creative}>p</div>
                <div className={styles.creative}>e</div>
                <div className={styles.creative}>r</div>
              </span>
            </h1>
            <p className="text-right p-2">Based in Delhi, India</p>
          </div>
        </div>
      </div>
      <div id="thumbnail-container" className={styles['thumbnail-container']}>
        <p className="flex flex-wrap z-[500] ">
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>D</div>
            <div className={styles.thumbnail}>e</div>
            <div className={styles.thumbnail}>s</div>
            <div className={styles.thumbnail}>i</div>
            <div className={styles.thumbnail}>g</div>
            <div className={styles.thumbnail}>n</div>
          </span>
          <span className={styles.thumbnails}>
            <div className={styles.thumbnail}>&</div>
          </span>
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>D</div>
            <div className={styles.thumbnail}>e</div>
            <div className={styles.thumbnail}>v</div>
            <div className={styles.thumbnail}>e</div>
            <div className={styles.thumbnail}>l</div>
            <div className={styles.thumbnail}>o</div>
            <div className={styles.thumbnail}>p</div>
          </span>
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>U</div>
            <div className={styles.thumbnail}>s</div>
            <div className={styles.thumbnail}>e</div>
            <div className={styles.thumbnail}>r</div>
          </span>
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>F</div>
            <div className={styles.thumbnail}>r</div>
            <div className={styles.thumbnail}>i</div>
            <div className={styles.thumbnail}>e</div>
            <div className={styles.thumbnail}>n</div>
            <div className={styles.thumbnail}>d</div>
            <div className={styles.thumbnail}>l</div>
            <div className={styles.thumbnail}>y</div>
          </span>
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>S</div>
            <div className={styles.thumbnail}>o</div>
            <div className={styles.thumbnail}>f</div>
            <div className={styles.thumbnail}>t</div>
            <div className={styles.thumbnail}>w</div>
            <div className={styles.thumbnail}>a</div>
            <div className={styles.thumbnail}>r</div>
            <div className={styles.thumbnail}>e</div>
            <div className={styles.thumbnail}>s</div>
          </span>
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>W</div>
            <div className={styles.thumbnail}>i</div>
            <div className={styles.thumbnail}>t</div>
            <div className={styles.thumbnail}>h</div>
          </span>
          <span className={styles.thumbnails} >
            <div className={styles.thumbnail}>M</div>
            <div className={styles.thumbnail}>e</div>
          </span>
        </p>
      </div>
      <div id="rectangle1" className={styles.rectangle1}>
        <article className={styles['dev-utilities-wraps']}>2+ years of Work</article>
        <article className={styles['dev-utilities-wraps']}>3+ Projects handled</article>
        <article className={styles['dev-utilities-wraps']}>Variety of software domains </article>
        <div id="developments" className={styles.developments}>
          <div className="text-center">
            <h2>Knowledge</h2>
            <h6>Technologies i know</h6>
          </div>
          <div className={styles['tech-square']}><h4>HTML</h4> </div>
          <div className={styles['tech-square']}><h4>CSS</h4> </div>
          <div className={styles['tech-square']}><h4>JAVASCRIPT</h4> </div>
          <div className={styles['tech-square']}><h4>BOOTSTRAP</h4> </div>
          <div className={styles['tech-square']}><h4>TAILWIND</h4> </div>
          <div className={styles['tech-square']}><h4>MATERIAL UI</h4> </div>
          <div className={styles['tech-square']}><h4>JQUERY</h4> </div>
          <div className={styles['tech-square']}><h4>REACT JS</h4> </div>
          <div className={styles['tech-square']}><h4>NEXT JS</h4> </div>
          <div className={styles['tech-square']}><h4>NODE JS</h4> </div>
          <div className={styles['tech-square']}><h4>EXPRESS JS</h4> </div>
          <div className={styles['tech-square']}><h4>GOLANG</h4> </div>
          <div className={styles['tech-square']}><h4>MY SQL</h4> </div>
          <div className={styles['tech-square']}><h4>AWS</h4> </div>
          <div className={styles['tech-square']}><h4>GIT HUB</h4> </div>
          <div className={styles['tech-square']}><h4>POSTMAN</h4> </div>
        </div>
      </div>
      <div id="experiences" className={styles.experiences}>
        <div className="mb-10 text-center flex flex-wrap items-center justify-between">
          <h2 className="mr-10">Experience</h2>
          <h6>Making softwares from <span className="text-red font-semibold">2+ years</span> and going on..</h6>
        </div>
        <main id="experience1" className={styles.experience}>
          <aside>
          <Experience
            company_name={'SpacePe India Services LLP'}
            company_type={'IT products and services'}
            company_desc={'Subsidary company of Rajendra management group pvt ltd'}
            role={'Software Engineer'}
            tenure={'May 2024 - Present'}
            job_type={'Full-Time'}
          />
          </aside>
          <article>
            <h4>Website techrajendra.com</h4>
            <ul>
              <li>Developed a fully responsive and scalable website using a headless architecture by integrating the WordPress REST API
                for dynamic content management.</li>
              <li>Implemented GSAP animations to enhance user engagement and create a smooth, interactive browsing experience.</li>
              <li>Collaborated with an SEO specialist to optimize website structure, metadata, and content for improved search engine
                visibility.</li>
              <li>Ensured seamless navigation and responsiveness across devices for an enhanced user experience.</li>
              <h4>Customer Relationship Management System</h4>
              <li>Designed and developed the complete frontend of a Customer Relationship Management (CRM) system with a
                user-friendly UI.</li>
              <li>Implemented dynamic forms for lead creation, task management, and complaint tracking, streamlining customer
                interactions.</li>
              <li>Developed the accounts section to display customer details along with their bank statements for financial tracking.</li>
              <li> Built a rule-based access control (RBA) feature, allowing executives to filter customers, leads, tasks, and complaints
                using customizable rule combinations.</li>
              <li> Integrated an Excel export functionality, enabling filtered data to be downloaded for reporting and analysis.</li>
              <li> Collaborated with multiple frontend developers, merged and optimized React code for a seamless pre-deployment process.</li>
            </ul>

           <h4>Banking as a Service (BaaS) Software</h4> 
           <ul>
            <li>Developed and integrated the user authentication module, implementing secure JWT-based login and session
            management to ensure safe and seamless access.</li>
            <li>Designed a user profile management system, enabling users to update personal details, manage security settings, and
            configure account preferences while ensuring data protection and compliance with security standards.</li>
           </ul>
          </article>
        </main>
        <main id="experience2" className={styles.experience}>
          <aside>
          <Experience
            company_name={'Legal Buddy India Pvt Ltd'}
            company_type={'Legal tech'}
            company_desc={'A startup to help lawyers to do compliance for the companies'}
            role={'Full Stack Engineer'}
            tenure={'Jan 2024 - May 2024'}
            job_type={'Freelance'}
          />
          </aside>
          <article>
            <h4>Website and CMS dashboard of legalbuddy.in</h4>
            <ul>
              <li>Designed and developed the entire platform, handling both frontend and backend development using NextJs.</li>
              <li> Built a custom CMS dashboard, allowing lawyers to create, edit, and manage legal clauses, resolutions, acts, and rules.</li>
              <li> Implemented an admin panel for managing user subscriptions, monitoring payments, and controlling access levels.</li>
              <li> Integrated Razorpay payment gateway for a pay-per-clause and resolution-based subscription model, enabling users to access content based on their subscription.</li>
              <li>Developed a dynamic access control system, ensuring users can view only the number of clauses and resolutions allowed in their plan.</li> 
              <li> Deployed the website and dashboard on AWS, configuring Nginx as a reverse proxy for optimized performance and security.</li>
              <li>Optimized backend services, including user authentication, data management, and API integrations.</li>
            </ul>
          </article>
        </main>
        <main id="experience3" className={styles.experience}>
        <aside>
          <Experience
            company_name={'Aartas Care Pvt Ltd'}
            company_type={'Medical Care'}
            company_desc={'A startup helps doctor provide medical space and care'}
            role={'Software Developer Associate'}
            tenure={'Oct 2022 - Dec 2023'}
            job_type={'Full Time'}
          />
          </aside>
          <article>
            <h4>Aartas Connect App</h4>
            <ul>
              <li>Developed a medical dashboard for care coordinators to monitor doctor in/out timings and manage patient vitals
              efficiently.</li>
              <li> Implemented a monthly timing management system to track doctor&#39;s working hours, enabling accurate billing for their
              services.</li>
              <li>Built a pharmacy management system, allowing executives to bill patients, manage inventory, and track purchases,
              returns, sales, and dumps.</li>
              <li>Integrated daily sales reports for the pharmacy, providing real-time insights into transactions and revenue.</li>
              <li>Designed an appointment management system with full CRUD operations, allowing care coordinators to schedule,
              update, and cancel patient appointments.</li>
              <li>Enabled care coordinators to bill patients for their appointments and manage patient check-outs efficiently.</li>
              <li>Implemented location-based access control, ensuring that users can only access system features relevant to their assigned
              branch or facility.</li>
              <li>Designed and developed an open group chat system and APIs in Golang to handle chat functionality and data
              processing.</li>
              <li>Enabled pharmacy executives to make bulk purchase entries using vendor-provided Excel sheets, streamlining inventory
              management.</li>
            </ul>
          </article>
        </main>
        <main id='experience4' className={styles.experience}>
        <aside>
          <Experience
            company_name={'Addon ShareWare Pvt Ltd'}
            company_type={'IT services and consulting'}
            company_desc={'Delivers bespoken custom softwares and projects to clients'}
            role={'Front End Developer'}
            tenure={'Apr 2022 - Oct 2022'}
            job_type={'Internship'}
          />
          </aside>
          <article>
            <h4>Ayur Homes and other projects contribution</h4>
            <ul>
              <li>Developed responsive websites, ensuring cross-device compatibility and a seamless user experience.</li>
              <li>Implemented interactive contact forms with validation and user-friendly UI to enhance customer engagement.</li>
              <li>Integrated websites into the .NET framework, ensuring smooth backend communication and data handling.</li>
              <li>Gained hands-on experience in frontend and backend development, improving coding efficiency and problem-solving
              skills.</li>
            </ul>
          </article>
        </main>
      </div>
      <About />
    </div>
  )
}
