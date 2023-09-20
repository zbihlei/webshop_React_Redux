import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({

    reducer:{
        categories: categoriesSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),

    devTools: true,

});