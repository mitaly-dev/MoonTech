import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from '../Product/ProductCard';

const Home = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='grid grid-cols-4 gap-3 px-28 py-10'>
           {
            products.map(product=><ProductCard product={product}></ProductCard>)
           }
        </div>
    );
};

export default Home;