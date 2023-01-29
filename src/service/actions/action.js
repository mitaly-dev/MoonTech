import { addToCart, addToWishlist, removeFromCart } from "../actionType/actionType"

export const addToCartAction=(product)=>{
    return {
        type : addToCart,
        payload : product
    }
}

export const addToWishlistAction=(product)=>{
    return {
        type : addToWishlist,
        payload : product
    }
}

export const removeFromCartAction=(product)=>{
    return {
        type : removeFromCart,
        payload : product
    }
}