import React from 'react'

import styles from '../../styles/Home.module.css'
import bg from '../../images/shoes.png'


const Poster = () => {
  return (
   <section className={styles.home}>
        <div className={styles.title}>big Sale!-40%</div>
        <div className={styles.product}>
            <div className={styles.text}>
                <div className={styles.subtitle}>The best models of 2023</div>
                <h1 className={styles.head}>Converse Chuck Taylor All Star</h1>
                <button className={styles.button}>Shop Now</button>
            </div>
            <div className={styles.image}>
                <img src={bg} alt="banner" />
            </div>
        </div>
   </section>
  )
}

export default Poster