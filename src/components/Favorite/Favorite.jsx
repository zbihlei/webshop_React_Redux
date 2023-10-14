import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from '../../styles/Cart.module.css';
import Sidebar from '../Sidebar/Sidebar';

import { removeItemFromFavorite, addItemToCart} from '../../features/user/userSlice';
const Favorite = () => {
    
    const {favorite} = useSelector(({user}) => user);
    const dispatch = useDispatch();

    const removeItem =(id)=>{
        dispatch(removeItemFromFavorite(id))
    }
    const addToCart = (item)=>{
        dispatch(addItemToCart(item));
        dispatch(removeItemFromFavorite(item.id))
    }

  return (
    <>
        <Sidebar/>
    <section className={styles.cart}>
        <h2 className={styles.title}>Your favorite</h2>
        {!favorite.length ? (
        <div className={styles.empty}>Your favorite is empty</div>
        ):(
                <>
                <div className={styles.list}>
                    {favorite.map((item)=>{
                        const {title, category, images, price, id} = item;
                        return (
                        <div className={styles.item} key={id}>
                            <div 
                            className={styles.image}
                            style={{backgroundImage : `url(${images[0]})`}} />
                            <div className={styles.info}>
                                <h3 className={styles.name}>{title}</h3>
                                <div className={styles.category}>{category.name}</div>
                            </div>
                                <div className={styles.price}> {price}$</div>
        
                            <div className={styles.close} onClick={()=>removeItem(item.id)}>X</div>
                            <button className={styles.add} onClick={()=>addToCart(item)}>Add to Cart</button>
                        </div>
                        );
                    })}
                </div>
                </>
            )}
    </section>

    
    </>
  )
}

export default Favorite