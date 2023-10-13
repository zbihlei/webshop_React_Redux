import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux';

import { toggleForm } from '../../features/user/userSlice';
import { useGetSearchQuery } from '../../features/api/apiSlice';

import styles from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'
import logo from '../../images/logo.png'
import avatar from '../../images/avatar.jpg'
import search from '../../images/search.svg'
import heart from '../../images/heart.svg'
import CART from '../../images/cart.svg'
import { useEffect } from 'react';

const Header = () => {

  const dispatch = useDispatch();
  const { currentUser, cart }= useSelector(({user})=>user);
  const [values, setValues]= useState({name: 'Guest', avatar: avatar});
  const [searchValue, setSearchValue] = useState('');
  
  
  useEffect(()=>{
    if(!currentUser) return;
    setValues(currentUser);

  },[currentUser])

  const {data:searchingData, isLoading} = useGetSearchQuery({title: searchValue});


  const handleSearch =({target : {value}})=>{
    setSearchValue(value);
  }
  const handleClick =()=>{
    if(!currentUser) dispatch(toggleForm(true));
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
        <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>

          <div className={styles.avatar} style={{backgroundImage: `url(${values.avatar})`}}/>
          <div className={styles.username}>{values.name}</div>
        </div>

        <form className={styles.form}>
          <div className={styles.icon}>
            <img src={search} alt="search" />
          </div>
          <div className={styles.input}>
            <input 
             type="search" 
             autoComplete='off'
             name="search"
             placeholder='type your text'
             value={searchValue}
             onChange={handleSearch}
              />
          </div>

         {searchValue && 
         <div className={styles.box}>
            {isLoading ? 'Loading' : !searchingData.length ? 'No Results' : (
              searchingData.map(({title, images, id})=> {
                return (
                  <Link   key={id}
                          to={`/products/${id}`} 
                          className={styles.item}
                          onClick={()=>setSearchValue('')}>
                    <div className={styles.image} style={{backgroundImage: `url(${images[0]})`}}/>
                    <div className={styles.title}>{title}</div>
                  </Link>
                )
              })
            )}
          </div>}
        </form>

        <div className={styles.account}>
          <Link className={styles.favourites}to={ROUTES.HOME}>
            <img src={heart} alt="heart" />
          </Link>
          <Link className={styles.cart}to={ROUTES.CART}>
            <img src={CART} alt="cart" />
            {!!cart.length && (<span className={styles.count}>{cart.length}</span>)}
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Header