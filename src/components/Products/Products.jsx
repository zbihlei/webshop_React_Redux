import React from 'react'
import {useGetProductsQuery} from '../../features/api/apiSlice'


import styles from '../../styles/Products.module.css'

import { ProductsList } from './ProductsList'

const Products = ({title, style={}, amount, filtered=false}) => {

    const {data:products=[]} = useGetProductsQuery();
    const list = products.filter((_,i)=> i < amount);
    const filteredList = products.filter(product => product.price < 100);

  return (
    <section className={styles.products} style={filtered ? {gridArea: 'filtered'} :{gridArea: 'products'} }> 
         {title && <h2>{title}</h2>}
        {filtered ?   <ProductsList  list={filteredList.splice(0,5)}/> :   <ProductsList list={list}/>  }


    </section>
  )
}

export default Products