import React from 'react'
import styles from './styles.module.css'

const Experience = ({company_name,company_type,company_desc,role,tenure,job_type}) => {
  return (
    <div className={styles['experience-card']}>
      <div className={styles.role}>
        <p>{job_type}</p>
        <h6>{tenure}</h6>
        <h3>{role}</h3>
      </div>
      <div className={styles.company}>
      <h4>{company_name}</h4>
      <h6>{company_type}</h6>
      <small>{company_desc}</small>
      </div>
    </div>
  )
}

export default Experience