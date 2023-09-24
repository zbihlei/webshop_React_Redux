import React from 'react'

import styles from '../../styles/Categories.module.css'
import { Link } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../features/api/apiSlice'

const Categories = ({title, amount}) => {

    const {data:categories=[]}= useGetCategoriesQuery();
    const list = categories.filter((_,i)=> i < amount);
  

  return (
    <section className={styles.section}>
       <h2>{title}</h2>
       <div className={styles.list}>
        {list.map(({id, name, image,}) =>(

            <Link to={`/categories/${id}`} key={id} className={styles.item}>
                       <div className={styles.image} 
                        style={{backgroundImage: `url(${image})`}}/>
                        <h3 className={styles.title}>{name}</h3>
            </Link>
        ))}
       </div>
    </section>
  )
}

export default Categories