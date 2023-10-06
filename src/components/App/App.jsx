import React from 'react'
// import {useDispatch} from 'react-redux';
// import { useEffect } from 'react';

import AppRoutes from '../Routes/Routes'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import UserForm from '../User/UserForm'



// import { getCategories } from '../../features/categories/categoriesSlice';
// import {getProducts} from '../../features/products/productsSlice'

const App = () => {


  // if we use asyncThunk then use dispatch in useEffect
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getCategories());
  //   dispatch(getProducts());
  // },[dispatch])

  return (
    <div className="app">
      <Header/>

      <UserForm/>

      <div className="container">
        <AppRoutes/>
        <Sidebar/>
      </div> 

      <Footer/>
    </div>
  )
}

export default App