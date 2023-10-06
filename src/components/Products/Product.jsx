import React, { useState } from 'react'

import styles from '../../styles/Product.module.css';
import {ROUTES} from '../../utils/routes';

import { addItemToCart } from '../../features/user/userSlice';
import { addItemToFavorite } from '../../features/user/userSlice';

import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

const Product = (item) => {
    const {title, price, description, images} = item;
    const sizes = [1,2,3];

    const [currentImage, setCurrentImage] = useState();
    const [currentSize, setCurrentSize] = useState();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!images.length) return;
        setCurrentImage(images[0]);
    },[images])

    const addToCart = ()=>{
        dispatch(addItemToCart(item))
    }

    const addToFav = ()=>{
        dispatch(addItemToFavorite(item))
    }

  return (
    <section className={styles.product}>
        <div className={styles.images}>
            <div className={styles.current}
            style={{backgroundImage: `url(${currentImage})`}}
            />
        <div className={styles['images-list']}>
            {images.map((image, i) =>(
                <div
                    key={i}
                    className={styles.image}
                    style={{backgroundImage: `url(${currentImage})`}}
                    onClick={()=>{
                        setCurrentImage(image);
                    }}
                />
            ))}
            </div>
        </div>
        <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.price}>{price}</div>
            <div className={styles.color}>
                <span>Color: </span> Green
            </div>
            <div className={styles.sizes}>
                <span>Size: </span> 
                <div className={styles.list}>
                    {sizes.map((size)=>(
                        <div className={`${styles.size} ${currentSize === size ? styles.active : ''}`}
                                onClick={()=>{
                                    setCurrentSize(size)
                                }} 
                                key={size}>
                            {size}
                        </div>
                    ))}
                </div>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.actions}>
                <button className={styles.add} disabled={!currentSize} onClick={addToCart}>Add to cart</button>
                <button className={styles.favourite} onClick={addToFav}>Add to favourite</button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.purchase}>Some static information</div>
                <Link to={ROUTES.HOME}>Return to store</Link>
            </div>
        </div>
    </section>
  )
}

export default Product