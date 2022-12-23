import React, { useEffect, useReducer, useState } from 'react'
import Products from '../Products.json'
import './shopPage.css'
import productos from '../productos'

import ItemCard from './ItemCard';
import Slider from './Slider';
const ShopPage = () => {

   

    
  
  

    const [products, setProducts]=useState([])

    useEffect(()=>{
        setProducts(productos)
    },[])
console.log(products)
  return (
    <>
   
        <h2 className='products-title'>Productos</h2>
    <div className='main-div'>
        {products.map((product)=>(
            <ItemCard key={product.id} product={product}/>
        )

        
        )}
    </div>
    </>
  )
}

export default ShopPage