import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'
import logo from '../../images/logo.png'
import avatar from '../../images/avatar.jpg'
import search from '../../images/search.svg'
import heart from '../../images/heart.svg'
import cart from '../../images/cart.svg'

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

        <form className={styles.form}>
          <div className={styles.icon}>
            <img src={search} alt="search" />
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

          <div className={styles.box}></div>
        </form>

        <div className={styles.account}>
          <Link className={styles.favourites}to={ROUTES.HOME}>
            <img src={heart} alt="heart" />
          </Link>
          <Link className={styles.cart}to={ROUTES.CART}>
            <img src={cart} alt="cart" />
            <span className={styles.count}>2</span>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Header