import {ADD_TO_CART, CLEAR_CART, REMOVE_TO_CART} from "../constants";

export const addToCart = (payload: any) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload: any) => {
    return {
        type: REMOVE_TO_CART,
        payload
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}
