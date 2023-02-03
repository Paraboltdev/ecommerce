import React, { useEffect, useReducer, useState } from 'react'
import Products from '../Products.json'
import './shopPage.css'
import productos from '../productos'

import ItemCard from './ItemCard';
import Slider from './Slider';

const ShopPage = () => {

    const key = "bc8c931920a745b5964a7a79f56a33d7 ";

    const date = new Date()
    let year = date.getFullYear()
    let month = (date.getMonth())

    let day = date.getDate()
    const dayOk = day < 10 ? '0'+ day : day
    const monthOk = month < 10 ? '0'+ month : (date.getMonth())
  
    let currentDate=  date.getFullYear()+'-'+monthOk+"-"+ dayOk;
    console.log(currentDate)
    let lastMonth = date.getFullYear() +'-'+(date.getMonth()-1) +'-'+ dayOk
    console.log(lastMonth)
  
  
const [products, setProducts]= useState([])
   

useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${key}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.results);
        
       
        
      });
  }, []);

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