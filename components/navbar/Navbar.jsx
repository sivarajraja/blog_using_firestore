import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <header>
        <div className='nav-container'>
          <Link to="/"><h1>Blog</h1></Link>
          <nav>
            <Link to="/"><h4>Posts</h4></Link>
            <Link to="/create"><h4>Create Posts</h4></Link>
          </nav>
        </div>
      </header>
  )
}

export default Navbar;