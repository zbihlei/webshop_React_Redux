import React from 'react'

import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from '../../styles/Footer.module.css'
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="logo" />
        </Link>
      </div>  
      
      <div className={styles.rights}> 
    
        Developed by
     <span> Zbihlei</span>
      </div>
    </section>
  )
}

export default Footer