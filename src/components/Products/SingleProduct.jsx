import React from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

import {useGetProductQuery} from '../../features/api/apiSlice';

import {ROUTES} from '../../utils/routes';
import Product from './Product';

const SingleProduct = () => {
    const {id} = useParams();
    const  {data: product, isLoading, isFetching, isSuccess}=useGetProductQuery({id});
    const navigate = useNavigate();


    useEffect(()=>{
        if (!isFetching && !isLoading && !isSuccess){
            navigate(ROUTES.HOME);
        }
    },[isLoading, isFetching,isSuccess, navigate]);


  return (
    <>
    {!product ? 
    <section>Loading...</section>
        : 
        <Product {...product} />
        }
    </>
  )
}

export default SingleProduct