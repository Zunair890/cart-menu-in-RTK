import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

export const cartSlice=createSlice({
    name: "cart",
    initialState,
    reducers:{
        add:(state,action)=>{
         state.push(action.payload)
        },
        remove: (state, action) => {
          return state.filter((product) => product.id !== action.payload); // Filter out the product by ID
        },
    }
})

export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;