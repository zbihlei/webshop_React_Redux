import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {useGetProductsByCategoryIdQuery, useGetCategoriesQuery} from '../../features/api/apiSlice'

import SingleCategories from '../Categories/SingleCategories.jsx'

import styles from '../../styles/Category.module.css'

const Category = () => {

    const {id} = useParams();
  
    const {data: list} = useGetCategoriesQuery();
    const [cat, setCat] = useState('');
    const {data, isLoading, isSuccess} = useGetProductsByCategoryIdQuery(id);

    useEffect(()=>{
        if(!id || !list.length) return;

        const {name} = list.find((item)=> item.id === id*1);
        setCat(name);
    },[list, id])

  return (
    <section className={styles.wrapper}>
        <h2 className={styles.title}>{cat}</h2>

            {isLoading ? (
                <div className={styles.preloader}>Loading...</div>
            ) : !isSuccess || !data.length ? (
                <div className={styles.back}>
                    <span>No results!</span>
                    <button>Reset</button>
                </div>
            ) : (
                <SingleCategories title=''
                          products={data} 
                          style={{padding : 0}} 
                          amount ={data.length}/>
   
            )}
    </section>
  )
}

export default Category