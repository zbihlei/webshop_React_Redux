import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constants";


//variant with Thunk
// export const getProducts = createAsyncThunk(
//     'products/getProducts', 
//     async(_, thunkAPI) =>{

//             const res = await axios(`${BASE_URL}/products`);
//             return res.data;

//     })


const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser:[],
        cart: [],
        isLoading: false
    },
    reducers: {
        addItemToCart: (state, {payload}) => {
            let newCart = [...state.cart];
            const found = state.cart.find(({id}) => id === payload.id)

            if(found) {
                newCart = newCart.map((item)=> {
                    return item.id === payload.id 

                    ? {...item, quantity: payload.quantity || item.quantity + 1}
                         : item;
                });
            } else newCart.push({...payload, quantity: 1});
           
            state.cart = newCart;
            console.log(state.cart);
        },
    },

    extraReducers: (builder)=>{
        // builder.addCase(getProducts.pending, (state)=>{
        //     state.isLoading = true;
        // });
        // builder.addCase(getProducts.fulfilled, (state, {payload})=>{
        //     state.list = payload;
        //     state.isLoading = false;
        // });
        // builder.addCase(getProducts.rejected, (state)=>{
        //     state.isLoading = false;
        //     console.log('error!');
        // });
    }

});
export const {addItemToCart} = userSlice.actions;

export default userSlice.reducer;