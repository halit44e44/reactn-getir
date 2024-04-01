import { configureStore } from '@reduxjs/toolkit'
import cartItems from "./reducers/cartItem";

export const store = configureStore({
    reducer: {
        cartItems: cartItems,
    }
})
