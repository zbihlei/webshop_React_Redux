import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import {ROUTES} from '../../utils/routes';
import SingleProduct from '../Products/SingleProduct';
import SingleCategory from '../Categories/SingleCategory';

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element ={<Home/>}/>
        <Route  path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
        <Route  path={ROUTES.CATEGORY} element={<SingleCategory/>}/>
    </Routes>
  )
}

export default AppRoutes