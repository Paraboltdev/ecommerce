import React from 'react'
import { BsQuestionDiamond } from 'react-icons/bs';
import { useDispatch } from 'react-redux'
import { deleteOne,addToCart } from "../features/Slices/cartSlice";
import './cartCard.css'


const CartCard = ({product}) => {
  const dispatch = useDispatch()
 
  

  return (
    <div className="cart-card">
        <div className='container-card'>
      
      <h3>{product.name}</h3>
      <p><strong>{product.description} </strong></p>
      
      </div>
      <div className='cart-btns'>
      <button className='btn-cartcard' onClick={()=>dispatch(deleteOne(product.id))}>-</button>
      <p>{product.quantity}</p>
      <button className='btn-cartcard' onClick={()=>dispatch(addToCart(product.id))}>+</button>
    </div>
 
    Precio: {parseFloat(product.price * product.quantity).toFixed(2)} €
    </div>
  )
}

export default CartCard