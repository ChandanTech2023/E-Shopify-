import { createSlice } from "@reduxjs/toolkit";

//create initial state of our product what we want to store
const initialState = 
    {
        products: [],
    }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        
    }
})
export default cartSlice.reducer