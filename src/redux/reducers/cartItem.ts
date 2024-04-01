import {ADD_TO_CART, REMOVE_TO_CART, CLEAR_CART} from "../constants";

const cartItems = (state = [], action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_TO_CART:
            return state.filter(cartItem => cartItem !== action.payload)
        case CLEAR_CART:
            return state=[]
    }
    return state
}

export default cartItems
