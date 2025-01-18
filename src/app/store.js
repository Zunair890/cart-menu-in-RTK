import {configureStore} from "@reduxjs/toolkit"
import ProductReducer from "../features/ProductSlice"
import cartReducer from "../features/cartSlice"
const store= configureStore({
    reducer:{
       cart: cartReducer,
       products: ProductReducer,
    }
})

export  default store;