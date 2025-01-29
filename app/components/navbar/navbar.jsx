'use client'
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href='/'>
        <p className={styles.name}>Pranav Sharma</p>
        {/* <Image width={25} height={25} src='/icons/logo.svg'/> */}
        </Link>
      </div>
      {/* <p className={styles.name}><Link href='/'>Pranav Sharma</Link></p> */}
      <div className={styles.options}>
        <a href='/Resume.pdf' download={true}><div className={styles.hovereffect}></div><p className='px-5'>Resume</p></a>
        <a href='/about_me'><div className={styles.hovereffect}></div><p className='px-5'>About me</p></a>
      </div>
    </div>
  )
}
