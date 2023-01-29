import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Product/ProductCard';

const Wishlist = () => {
    const {wishlist} = useSelector(state=>state)
    return (
        <div className='grid grid-cols-4 gap-3 px-28 py-10'>
            {
                wishlist.map(product=><ProductCard product={product}></ProductCard>)
            }
        </div>
    );
};

export default Wishlist;
