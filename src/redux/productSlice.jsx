import { createSlice } from "@reduxjs/toolkit";

//create initial state of our product what we want to store
const initialState = {

        products: [],
    
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        setProducts(state ,action){
            state.products = action.payload
        }
    }
})
export const {setProducts} = productSlice.actions;
export default productSlice.reducer