import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

import logo from './AGlogoo.jpg';

const Header = () => {
 
  return (
    <header>
    <nav>
      <div>
        
        <Link to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        
      </div>
      <ul>
        
        <li><Link to="/about" >ABOUT</Link></li>
        <li><Link to="/work"  >WORK</Link></li>
        <li><Link to="/contact"  >CONTACT</Link></li>



      </ul>
    </nav>
  </header>  )
}

export default Header