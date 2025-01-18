import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    data: [],
    status: "idle",
};

export const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // fetchProducts: (state, action) => {
        //     state.data = action.payload;
        // },
    },
    extraReducers:(builder)=>{
    builder
    .addCase(getProducts.pending,(state)=>{
        state.status="Loading"
    })
    .addCase(getProducts.fulfilled, (state,action)=>{
        state.data = action.payload;
        state.status="idle";
    })
    .addCase(getProducts.rejected, (state)=>{
        state.status="error";
    })
    }
});

export const { fetchProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
export const getProducts= createAsyncThunk("products/get",async()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    return result;
})




