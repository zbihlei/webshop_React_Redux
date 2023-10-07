import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from "../../utils/constants";
import { buildUrl } from '../../common/common';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    tagTypes: ['Categories', 'Products', 'Product'],
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => '/categories',
            providesTags: ['Categories']
        }),
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Products']
        }),
        getProduct: builder.query({
            query: ({id}) => `/products/${id}`,
            providesTags: ['Product']
        }),
        getSearch: builder.query({
            query: (params) => buildUrl('/products', params),
            providesTags: ['Products']
        }),
        getProductsByCategoryId: builder.query({
            query: (id) => (`/products?categoryId=${id}`),
            providesTags: ['Products']
        }),
    })
});

export const {useGetCategoriesQuery, useGetProductsQuery, useGetProductQuery, useGetSearchQuery, useGetProductsByCategoryIdQuery} = apiSlice;