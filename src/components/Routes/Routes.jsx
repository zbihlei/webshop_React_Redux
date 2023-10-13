import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import {ROUTES} from '../../utils/routes';
import SingleProduct from '../Products/SingleProduct';
import SingleCategory from '../Categories/SingleCategory';
import Cart from '../Cart/Cart';

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element ={<Home/>}/>
        <Route  path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
        <Route  path={ROUTES.CATEGORY} element={<SingleCategory/>}/>
        <Route  path={ROUTES.CART} element={<Cart/>}/>
    </Routes>
  )
}

export default AppRoutes