'use client'
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* <div>
        <Link href='/'><img src='/icons/logo.svg'/></Link>
      </div> */}
      <p className={styles.name}><Link href='/'>Pranav Sharma</Link></p>
      <div className={styles.options}>
        <a href='/Resume.pdf' download={true}><p className='px-5'>Resume</p></a>
        <Link href='/about_me'><p className='px-5'>About me</p></Link>
      </div>
    </div>
  )
}
