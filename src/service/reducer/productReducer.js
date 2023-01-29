import { addToCart, addToWishlist, removeFromCart } from "../actionType/actionType"

const initialProduct = {
    cart : [],
    wishlist : []
}

export const productReducer=( state = initialProduct,action)=>{
  
   switch(action.type){
    case addToCart:
        return{
            ...state,cart : [...state.cart,action.payload]
        }
    case addToWishlist : {
        return {
            ...state,wishlist:[...state.wishlist,action.payload]
        }
    }
    case removeFromCart : 
        return {
            ...state,cart : state.cart.filter(product=>product._id!==action.payload._id)
        }
    default:
        return state
   }
}