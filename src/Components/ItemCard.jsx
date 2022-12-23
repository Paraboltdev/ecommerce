import React from "react";
import { useDispatch } from "react-redux";
import {BsCartPlus} from 'react-icons/bs'
import { addToCart } from "../features/Slices/cartSlice";

import './itemCard.css'


const ItemCard = ({product}) => {
 
  const dispatch=useDispatch(addToCart)

  
  return (
    <div className="main-div">

    <div className="wrapper">
      
      <h3>{product.name}</h3>
      <img src={product.img} alt={product.name}/>
      <p><strong>{product.description} </strong></p>
      <p className="product-price"><strong>{product.price} €  </strong></p>
      <button className="btn-card" onClick={()=>dispatch(addToCart(product.id))}><BsCartPlus /></button>
     
    </div>
    </div>
  );
};

export default ItemCard;
