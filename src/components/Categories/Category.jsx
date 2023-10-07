import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {useGetProductsByCategoryIdQuery, useGetCategoriesQuery} from '../../features/api/apiSlice'

import SingleCategories from '../Categories/SingleCategories.jsx'

import styles from '../../styles/Category.module.css'

const Category = () => {

    const {id} = useParams();
  
    const {data: list} = useGetCategoriesQuery();
    // const defaultValues ={
    //     title: "",
    //     price_min: 0,
    //     price_max: 0,
    // }
    // const defaultParams ={
    //     categoryId: id,
    //     ...defaultValues
    // }

    const [cat, setCat] = useState('');
    // const [values, setValues] = useState(defaultValues);
    // const [params, setParams] = useState(defaultParams);
    const {data, isLoading, isSuccess} = useGetProductsByCategoryIdQuery(id);

    // const handleChange = ({target: {value, name}}) =>{
    //     setValues({...values, [name]: value});
    // }
    // const handleSubmit =(e)=>{
    //     e.preventDefault();
    //     setParams({...params, ...values});
    // }

    // useEffect(()=>{
    //     if(!id) return;
    //     setParams({...defaultParams, categoryId: id});
    //     // eslint-disable-next-line 
    // },[id]);

    useEffect(()=>{
        if(!id || !list.length) return;

        const {name} = list.find((item)=> item.id === id*1);
        setCat(name);
    },[list, id])

  return (
    <section className={styles.wrapper}>
        <h2 className={styles.title}>{cat}</h2>
        {/* <form className={styles.filters} onSubmit={handleSubmit}>
            <div className={styles.filter}>
                <input type="text" 
                        name="title"
                        placeholder='product name'
                        onChange={handleChange} 
                        value={values.title}/>
            </div>
            <div className={styles.filter}>
                <input type="number" 
                        name="price_min"
                        placeholder='price min'
                        onChange={handleChange} 
                        value={values.price_min}/>
            </div>
            <div className={styles.filter}>
                <input type="number" 
                        name="price_max"
                        placeholder='price_max'
                        onChange={handleChange} 
                        value={values.price_max}/>
            </div>
            <button type='submit' hidden/>
            </form> */}
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