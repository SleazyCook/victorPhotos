import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>

      <header>
        <h1>
          Victor Alberto Photography
        </h1>
      </header>

      <Navbar />
      
      <Outlet context />
      <footer>
        Developed by&nbsp;
        <span id="author"> 
          Drewford
        </span>
      </footer>
    </div>
  )
}

export default App;