import { addToCart, addToWishlist, cartDecrement, cartIncrement, removeFromCart } from "../actionType/actionType"

const initialProduct = {
    cart : [],
    wishlist : []
}

export const productReducer=( state = initialProduct,action)=>{
  const selectedProduct = state.cart.find(product=>product._id===action.payload._id)
  console.log(state.cart)
   switch(action.type){
    case addToCart:
        if(selectedProduct){
            selectedProduct.quantity = selectedProduct.quantity+1
            const newCart = state.cart.filter(product=>product._id!==action.payload._id)
            return {
                ...state,cart : [...newCart,selectedProduct]
            }
        }
        return{
            ...state,cart : [...state.cart,{...action.payload,quantity:1}]
        }
        case addToWishlist : {
        return {
            ...state,wishlist:[...state.wishlist,action.payload]
        }
    }
    case cartIncrement:
        selectedProduct.quantity = selectedProduct.quantity+1
        const newCart = state.cart.filter(product=>product._id!==action.payload._id)
        return {
            ...state,cart : [...newCart,selectedProduct]
        }
    case cartDecrement:
       if(selectedProduct.quantity>1){
        selectedProduct.quantity = selectedProduct.quantity-1
        const newCart2 = state.cart.filter(product=>product._id!==action.payload._id)
        return {
            ...state,cart : [...newCart2,selectedProduct]
        }
       }
       return{
        ...state,cart : state.cart.filter(product=>product._id!==action.payload._id)
       }
    case removeFromCart : 
        return {
            ...state,cart : state.cart.filter(product=>product._id!==action.payload._id)
        }
    default:
        return state
   }
}