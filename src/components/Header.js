import React from 'react'
import { Link, Routes, Route } from "react-router-dom";
import Contact from './Contact'
import About from './About'
import Shop from './Shop'
import Recipes from './Recipes'
import Home from './Home'
import Posts from './Posts'
import SlideShow from './SlideShow';
import ShopCards from './ShopCards';
import InventoryList from './InventoryList';
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
          <li role="presentation"><Link to="/Posts">Blog</Link></li>
          <li role="presentation"><Link to="/SlideShow">SlideShow</Link></li>
        </ul>
          {/* <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/shop">Shop</Link></p>
          <p><Link to="/contact">Contact/Hours</Link></p>
          <p><Link to="/recipes">Recipes</Link></p>
       */}

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/about"  element={<About />} />
          <Route path="/shop"  element={<Shop />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/recipes"  element={<Recipes />} />
          <Route path="/posts"  element={<Posts />} />
          <Route path="/slideshow"  element={<SlideShow />} />
          <Route path="/inventorylist"  element={<InventoryList />} />
          <Route path="/"  element={<Home />}>
        </Route>
      </Routes>
        </> 
      </div>

       </div>
        
      
    )
}

export default Header; 