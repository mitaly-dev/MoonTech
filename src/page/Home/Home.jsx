import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Product/ProductCard';

const Home = () => {
    const {cart,wishlist} = useSelector(state=>state)
    console.log(cart)

    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='grid grid-cols-4 gap-3 px-28 py-10'>
           {
            products.sort((a,b)=>a._id-b._id).map((product,index)=><ProductCard key={index} product={product}></ProductCard>)
           }

        </div>
    );
};

export default Home;