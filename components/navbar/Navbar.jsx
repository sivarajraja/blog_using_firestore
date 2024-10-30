import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Appsubmitbutton from "../appsubmitbutton/Appsubmitbutton";
import useAuthentication from '../../hooks/useAuthentication';
import { useAuthContext } from '../../hooks/useAuthContext';

const Navbar = () => {

  const {user} = useAuthContext()

  const {signout} = useAuthentication()

  const handleLogout = ()=> {
    signout()
  }

  return (
      <header>
        <div className='nav-container'>
          <Link to="/"><h1>Blog</h1></Link>
          <nav>
            {user!==null && <Link to="/"><h4>Posts</h4></Link>}
            {user!==null && <Link to="/create"><h4>Create Posts</h4></Link>}
            {user===null && <Link to="/login"><h4>Login</h4></Link>}
            {user===null && <Link to="/signup"><h4>Signup</h4></Link>}
            {user!==null && <Appsubmitbutton title="logout" onClick={handleLogout}/>}
          </nav>
        </div>
      </header>
  )
}

export default Navbar;