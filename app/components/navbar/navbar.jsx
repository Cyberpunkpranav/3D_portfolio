'use client'
import React from 'react'
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img src='/icons/logo.svg'/>
      </div>
      <div className='flex'>
        <a href='/Resume.pdf' download={true}><h6 className='px-5'>Resume</h6></a>
        <h6 className='px-5'>About me</h6>
      </div>
    </div>
  )
}
