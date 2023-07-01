import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h4>Shopping Cart</h4>
        <div>
           <NavLink to="/">Home page</NavLink>
           <NavLink to ="/MyCard">card page</NavLink>
        </div>
    </div>
  )
}

export default Navbar