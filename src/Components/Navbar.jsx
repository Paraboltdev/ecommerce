import React from 'react'
import { Link } from 'react-router-dom'
import {BsCartPlus} from 'react-icons/bs'
import './navbar.css'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const cart = useSelector((state)=>state.cart)
console.log(cart)

  return (
    <nav className='navbar-main' style={{background:'black', color:'white'}}>
      <div className='name-div'><h2>Th e'commerce</h2></div>
        <ul>
            <Link to='/' style={{textDecoration:'none'}}><li>Home</li></Link>
            <Link to='/cart'  style={{textDecoration:'none'}}>
              <li className='cart-icon'>
                <BsCartPlus size={25} />
                
                <div className='counter'>{cart.totalQuantity}</div>
                </li>
              </Link>
        </ul>

    </nav>
  )
}

export default Navbar