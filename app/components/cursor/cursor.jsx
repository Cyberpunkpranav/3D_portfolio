'use client'
import React from 'react'
import styles from './styles.module.css'

const Cursor = ({x,y}) => {
  return (
    <div className={styles.cursor} style={{left:x,top:y}}></div>
  )
}

export default Cursor