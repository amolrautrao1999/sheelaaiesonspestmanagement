import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div>
        <BrowserRouter>
       <ul>
      <li>
        <a to="/">Home</a>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>

    </ul>
    </BrowserRouter>
    </div>
  )
}

export default Menu
