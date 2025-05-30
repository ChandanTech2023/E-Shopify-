import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
//create initial state of our product what we want to store
const initialState =
{
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart(state, action) {
            const newItem = action.payload;
            // console.log(newItem);

            const itemIndex = state.products.find(item => item.id === newItem.id)
            if (itemIndex) {
                itemIndex.quantity += 1;
                itemIndex.totalPrice += newItem.price;
                // Show error toast if product is already in the cart
                toast.error('Product already in cart!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
            else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
                toast.success(`${newItem.name} added to cart!`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
            // Increase totalQuantity and totalPice
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const findIndex = state.products.find(item => item.id === id)
            if (findIndex) {
                state.totalPrice -= findIndex.totalPrice;
                state.totalQuantity -= findIndex.quantity;
                state.products = state.products.filter(item => item.id !== id)
                toast.error('Product removed from cart!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

            }
        },
        increaseQuantity(state, action) {
            const id = action.payload;
            const findIndex = state.products.find(item => item.id === id)
            if (findIndex) {
                findIndex.quantity += 1;
                findIndex.totalPrice += findIndex.price;
                state.totalPrice += findIndex.price;
                state.totalQuantity++;
                state.totalPrice += findIndex.price;
            }
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const findIndex = state.products.find(item => item.id === id)
            if(findIndex.quantity > 1){
                findIndex.quantity -= 1;
                findIndex.totalPrice -= findIndex.price;
                state.totalPrice -= findIndex.price;
                state.totalQuantity--;
                state.totalPrice -= findIndex.price;
            }
            
        }
    },
})
//Export addtoCart action and use it in ProductCard
export const { addtoCart, removeFromCart ,decreaseQuantity,increaseQuantity} = cartSlice.actions
export default cartSlice.reducer