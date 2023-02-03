import React from "react";
import { useDispatch } from "react-redux";
import {BsCartPlus} from 'react-icons/bs'
import { addToCart } from "../features/Slices/cartSlice";

import './itemCard.css'


const ItemCard = ({product}) => {
 console.log(product)
  const dispatch=useDispatch(addToCart)

  
  return (
    <div className="main-div">

    <div className="wrapper">
      
      <h3>{product.name}</h3>
      <img src={product.background_image} alt={product.name}/>
      <div><strong>{product.parent_platforms.map((plat)=>(
        <p>{plat.platform.name}</p>
      )).slice(0,3)} </strong></div>
      <p className="product-price"><strong>99.999 €  </strong></p>
      <button className="btn-card" onClick={()=>dispatch(addToCart(product.id))}><BsCartPlus /></button>
     
    </div>
    </div>
  );
};

export default ItemCard;
