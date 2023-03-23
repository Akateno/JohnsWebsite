import React from 'react'
import { Link, Routes, Route } from "react-router-dom";

function Header(){


   
   
    return(
       <div className='Navbar'>


<div class='header'>
        <>
        <ul class = 'nav nav-tabs'   >
          <li role="presentation" ><Link to="/">Home</Link></li>
          <li role="presentation"><Link to="/about">About</Link></li>
          <li role="presentation"><Link to="/shop">Shop</Link></li>
          <li role="presentation"><Link to="/contact">Contact/Hours</Link></li>
          <li role="presentation"><Link to="/recipes">Recipes</Link></li>
          <li role="presentation"><Link to="/postcard">Blog</Link></li>
          <li role="presentation"><Link to="/postcard">PostCard</Link></li>
        </ul>
          {/* <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/shop">Shop</Link></p>
          <p><Link to="/contact">Contact/Hours</Link></p>
          <p><Link to="/recipes">Recipes</Link></p>
       */}

        
        </> 
      </div>

       </div>
        
      
    )
}

export default Header; 