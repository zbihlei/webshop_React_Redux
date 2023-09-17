import React from 'react'
import {NavLink} from 'react-router-dom'


import styles from '../../styles/Sidebar.module.css'
import { useSelector } from 'react-redux'



const Sidebar = () => {

  const {list} = useSelector(({categories}) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>Categories</div>
      <nav>
        <ul className={styles.menu}>
          {list.map(({id, name})=>(
            <li key={id}>
              <NavLink
                className={({isActive })=> 
                `${styles.link} ${isActive ? styles.active : ""}`}
                  to={`/categories/${id}`}>
                {name}
              </NavLink>
            </li>
          )).slice(0,5)}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" className={styles.link}>FAQ</a>
        <a href="/terms" className={styles.link} style={{textDecoration: 'underline'}}>Terms</a>
      </div>
    </section>
  )
}

export default Sidebar