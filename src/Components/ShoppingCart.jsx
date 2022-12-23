import React, {  useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { totalAmount } from '../features/Slices/cartSlice'
import CartCard from './CartCard'
import './shoppingCart.css'

const ShoppingCart = () => {
  const cart = useSelector((state)=> state.cart.cart)
  const total = useSelector((state)=> state.totalAmount)
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
  
  

  return (
    <>
    <h2 className='shopping-title'>ShoppingCart</h2> 
  {myCart && (
    <p className='myCart-div' >Todavia no hay nada en la cesta</p>
  )}
    <section className='shopping-container'>

<div>
 {cart?.map((product)=>(
  <CartCard key={product.id} product={product} cart={cart}/>
 ))}
</div>
      
       
        </section>
        <div>
       Total: {total}
        </div>
        </>
  )
}

export default ShoppingCart