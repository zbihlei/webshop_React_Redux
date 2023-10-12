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

    const defParams ={
        offset: 5,
        limit: 5
    }
    const [params, setParams] = useState(defParams);

    const addMore =()=>{
        setParams({...params , offset: params.offset + params.limit})
    }

    useEffect(()=>{
        if(!id || !list.length) return;

        const {name} = list.find((item)=> item.id === id*1);
        setCat(name);
    },[list, id, isLoading, data])


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
                          amount ={params.offset}/>
   
            )}

            <div className={styles.moreBtn}>
                <button className={styles.more} onClick={()=>addMore()}>See More</button>
            </div>
            <button style ={{backgroundColor: "#797082a5"}} onClick={()=>window.scrollTo(0, 100)}>To top</button>
    </section>
    
  )
}

export default Category