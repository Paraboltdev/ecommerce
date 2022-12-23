import React from 'react'
import { Link } from 'react-router-dom'
import {BsCartPlus} from 'react-icons/bs'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar-main' style={{background:'black', color:'white'}}>
      <div className='name-div'><h2>Th e' commerce</h2></div>
        <ul>
            <Link to='/' style={{textDecoration:'none'}}><li>Home</li></Link>
            <Link to='/cart'  style={{textDecoration:'none'}}><li><BsCartPlus size={25} /></li></Link>
        </ul>

    </nav>
  )
}

export default Navbar