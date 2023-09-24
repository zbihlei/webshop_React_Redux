import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from "../../utils/constants";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    tagTypes: ['Categories', 'Products'],
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => '/categories',
            providesTags: ['Categories']
        }),
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Products']
        })
    })
});

export const {useGetCategoriesQuery, useGetProductsQuery} = apiSlice;