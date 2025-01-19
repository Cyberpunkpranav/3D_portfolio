'use client'
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href='/'><Image width={25} height={25} src='/icons/logo.svg'/></Link>
      </div>
      {/* <p className={styles.name}><Link href='/'>Pranav Sharma</Link></p> */}
      <div className={styles.options}>
        <div><a href='/Resume.pdf' download={true}><div className={styles.hovereffect}></div><small className='px-5'>Resume</small></a></div>
        <div><Link href='/about_me'><div className={styles.hovereffect}></div><small className='px-5'>About me</small></Link></div>
      </div>
    </div>
  )
}
