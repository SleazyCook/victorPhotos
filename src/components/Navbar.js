import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="nav-return">
      <nav>
        <Link to="/">Home</Link>
        <Link to="gallery">Gallery</Link>
        <Link to="services">Services</Link>
        <Link to="shop">Shop</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar;