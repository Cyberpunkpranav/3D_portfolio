import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className="flex h-[90vh]">
    <div className={styles.profile}>
    {/* <img className={styles.image1} src="/images/profile.jpeg"/> */}
    {/* <img className={styles.image1} src="/images/profile2.png"/> */}
    <img className={styles.image1} src="/images/profilepicture_gray.jpeg"/> 
  </div>
  <div className={styles['footer-content']}>
    <h3>PRANAV SHARMA</h3>
    <h2 className={styles.contact}>CONTACT ME</h2>
    <h4>+91 7339023531</h4>
    <h4><a target='__blank' href='mailto:pranavsharma733902@gmail.com'>EMAIL</a></h4>
    <h4>LINKED IN</h4>
    <h4>INSTAGRAM</h4>
    <h4>GITHUB</h4>
  </div>
    </div>
    <p className="text-center py-4">Design & Develop with ❤️ by pranav sharma</p>
  </footer>
  )
}

export default Footer