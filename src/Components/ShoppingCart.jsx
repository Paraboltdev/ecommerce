import React, {  useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { totalAmount } from '../features/Slices/cartSlice'
import CartCard from './CartCard'
import './shoppingCart.css'

const ShoppingCart = () => {
  const cart = useSelector((state)=> state.cart.cart)
  const total=useSelector((state)=> state.cart)

  const navigate = useNavigate()
  
  console.log(cart.totalAmount)

  console.log(cart)
  const [myCart, setMyCart]= useState(false)

  const dispatch = useDispatch()
 
 useEffect(()=>{
 if(cart.length === 0){
  setMyCart(true)
 }
 dispatch(totalAmount())
 },[cart,dispatch])
  
  const handlePay = ()=>{
    navigate('/payment')
  }

  return (
    <div className='wrap'>
   
    <h2 className='shopping-title'>ShoppingCart</h2> 
  {myCart && (
    <p className='myCart-div' >Todavia no hay nada en la cesta</p>
  )}
        <div className='top-cart-info'>
        <p className='basket-title'>Cesta</p>
        

        </div>
  <div className='mainshop'>
    <section className='shopping-container'>
      <div>
        {cart?.map((product)=>(
      
          <CartCard key={product.id} product={product} cart={cart}/>

                        ))}
      </div>
      
       
    </section>
        <div className='total-amonut'>
             <p>
            Total: {total.totalAmount} €
             </p>
             <p >
               Productos: {total.totalQuantity} 
             </p>
            <button className='payment-btn' onClick={handlePay}>Comprar</button>
           </div>
    </div>
        </div>
  )
}

export default ShoppingCart