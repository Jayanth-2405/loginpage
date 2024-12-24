import React from 'react';
import {Link} from "react-router-dom"
const Header = () => {
  return (
  <nav className='navbar'>
<div>
  <h1>LOGIN and Landing Page.</h1>
</div>
<article>
  <Link to={"/"} style={{margin:'5px'}}>Home</Link>
  <Link to={"/profile"}style={{margin:'5px'}}>Profile</Link>
  <Link to={"/login"}style={{margin:'5px'}}>Login</Link>
  <Link to={"/register"}style={{margin:'5px'}}>Register</Link>
  
</article>
  </nav>
  )
}

export default Header;