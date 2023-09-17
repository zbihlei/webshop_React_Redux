import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";


export const store = configureStore({

    reducer:{
        categories: categoriesSlice,
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),

    devTools: true,

});