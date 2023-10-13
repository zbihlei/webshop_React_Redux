import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sumBy } from '../../common/common';
import styles from '../../styles/Cart.module.css';
import Sidebar from '../Sidebar/Sidebar';

import { addItemToCart , removeItemFromCart} from '../../features/user/userSlice';
const Cart = () => {
    
    const {cart} = useSelector(({user}) => user);
    const dispatch = useDispatch();

    const changeQuantity =(item, quantity)=>{
        dispatch(addItemToCart({...item , quantity}))
    }

    const removeItem =(id)=>{
        dispatch(removeItemFromCart(id))
    }

  return (
    <>
        <Sidebar/>
    <section className={styles.cart}>
        <h2 className={styles.title}>Your cart</h2>
        {!cart.length ? (
        <div className={styles.empty}>Your cart is empty</div>
        ):(
                <>
                <div className={styles.list}>
                    {cart.map((item)=>{
                        const {title, category, images, price, id, quantity} = item;
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
                                <div className={styles.quantity}>
                                    <div className={styles.minus} onClick={()=>changeQuantity(item , Math.max(1, quantity - 1))}>-</div>  
                                        <span>{quantity}</span>
                                    <div className={styles.plus} onClick={()=>changeQuantity(item , Math.max(1, quantity + 1))}>+</div>
                            </div>
                            <div className={styles.total}>{price * quantity}</div>
                            <div className={styles.close} onClick={()=>removeItem(item.id)}>X</div>
                        </div>
                        );
                    })}
                </div>
                <div className={styles.actions}>
                    <div className={styles.total}>
                        TOTAL PRICE: {" "}
                        <span>
                            {sumBy(cart.map(({quantity, price}) => quantity * price))} $
                        </span>
                    </div>
                    <button className={styles.processed}>Processed to checkout</button>
                </div>
                </>
            )}
    </section>

    
    </>
  )
}

export default Cart