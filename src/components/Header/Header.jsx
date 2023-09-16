import React from 'react'
import { Link } from 'react-router-dom'



import styles from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'
import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.jpg'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
        <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user}>

          <div className={styles.avatar} style={{backgroundImage: `url(${avatar})`}}/>
          <div className={styles.username}>Guest</div>
        </div>

        <form lassName={styles.form}>
          <div className={styles.icon}>
            {/* icon here! */}
          </div>
          <div className={styles.input}>
            <input 
            type="search" 
            autoComplete='off'
            name="search"
             placeholder='type your text'
             value=""
             onChange={()=>{}}
              />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Header