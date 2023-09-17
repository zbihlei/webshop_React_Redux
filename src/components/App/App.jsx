import React from 'react'
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';


import AppRoutes from '../Routes/Routes'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'

import { getCategories } from '../../features/categories/categoriesSlice';


const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories());
  },[dispatch])

  return (
    <div className="app">
      <Header/>

      <div className="container">
        <AppRoutes/>
        <Sidebar/>
      </div> 

      <Footer/>
    </div>
  )
}

export default App