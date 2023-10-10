import React from 'react'

import {ProductsList} from '../Products/ProductsList'

const SingleCategories = ({title,  amount, products}) => {

    const list = products.filter((_,i)=> i < amount);

  return (
    <>
          {title && <h2>{title}</h2>}
            <ProductsList list={list}/>  
    </>
  )
}

export default SingleCategories