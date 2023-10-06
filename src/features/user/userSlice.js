import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constants";



export const createUser = createAsyncThunk(
    'users/createUser', 
    async(payload, thunkAPI) =>{

            const res = await axios.post(`${BASE_URL}/users`, payload);
            return res.data;

    })


const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser:null,
        cart: [],
        favorite: [],
        isLoading: false,
        formType: 'signup',
        showForm: false
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
          
        },
        addItemToFavorite: (state, {payload}) => {
            let newFav = [...state.favorite];
            const found = state.favorite.find(({id}) => id === payload.id)

            if(found) {
                newFav = newFav.map((item)=> {
                    return item.id === payload.id 

                    ? {...item, quantity: payload.quantity || item.quantity + 1}
                         : item;
                });
            } else newFav.push({...payload, quantity: 1});
           
            state.favorite = newFav;
            console.log(state.favorite);
        },
        toggleForm: (state, {payload}) => {
            state.showForm = payload;
        }
    },

    extraReducers: (builder)=>{
        // builder.addCase(getProducts.pending, (state)=>{
        //     state.isLoading = true;
        // });
        builder.addCase(createUser.fulfilled, (state, {payload})=>{
            state.currentUser = payload;
        });
        // builder.addCase(getProducts.rejected, (state)=>{
        //     state.isLoading = false;
        //     console.log('error!');
        // });
    }

});
export const {addItemToCart, addItemToFavorite, toggleForm} = userSlice.actions;

export default userSlice.reducer;