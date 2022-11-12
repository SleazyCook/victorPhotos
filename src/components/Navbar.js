import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="nav-return">
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  )
}

export default Navbar;