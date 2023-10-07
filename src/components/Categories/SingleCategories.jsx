import React from 'react'

import styles from '../../styles/Products.module.css'
import {ProductsList} from '../Products/ProductsList'

const SingleCategories = ({title,  amount, products}) => {

    const list = products.filter((_,i)=> i < amount);

  return (
    <section className={styles.products}> 
         {title && <h2>{title}</h2>}
            <ProductsList list={list}/>  
    </section>
  )
}

export default SingleCategories