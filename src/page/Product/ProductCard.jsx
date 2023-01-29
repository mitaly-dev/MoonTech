import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../service/actionType/actionType";
import { AiOutlineHeart } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { addToCartAction, addToWishlistAction, removeFromCartAction } from "../../service/actions/action";
import { useLocation } from "react-router-dom";


const ProductCard = ({ product }) => {
    const location = useLocation()
    const dispatch = useDispatch()

  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={product._id}
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {
            location.pathname==='/cart' ? 
            <button
            onClick={()=>dispatch(removeFromCartAction(product))}
            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold flex items-center justify-center gap-2'

            >
            <span>Remove cart</span>
            <FaTrash></FaTrash>
            </button>
            
            : 
            <>
            <button
            onClick={()=>dispatch(addToCartAction(product))}
            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'

            >
            Add to cart
            </button>
            <button
            onClick={()=>dispatch(addToWishlistAction(product))}
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
            >
            <AiOutlineHeart></AiOutlineHeart>
            </button>
            </>
        }
        
      </div>
    </div>
  );
};

export default ProductCard;