import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Product/ProductCard';

const Cart = () => {
    const {cart} = useSelector(state=>state)
    return (
        <div className='grid grid-cols-4 gap-3 px-28 py-10'>
            {
                cart.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Cart;