import { createSlice } from "@reduxjs/toolkit";

//create initial state of our product what we want to store
const initialState = 
    {
        products: [],
        totalQuantity:0,
        totalPrice:0
    }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addtoCart(state,action){
            const newItem = action.payload;
            // console.log(newItem);
            
            const itemIndex = state.products.find(item=>item.id === newItem.id)
            if(itemIndex){
                itemIndex.quantity +=1;
                itemIndex.totalPrice += newItem.price;
            }
            else{
                state.products.push({
                    id : newItem.id,
                    name : newItem.name,
                    image : newItem.image,
                    price : newItem.price,
                    quantity  : 1,
                    totalPrice : newItem.price
                })
            }
            // Increase totalQuantity and totalPice
            state.totalPrice += newItem.price;
            state.totalQuantity ++;
        }  
    }
})
//Export addtoCart action and use it in ProductCard
export const {addtoCart} = cartSlice.actions
export default cartSlice.reducer