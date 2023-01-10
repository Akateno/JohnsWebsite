import React from 'react'
import { Link, Routes, Route } from "react-router-dom";
import Contact from './Contact'
import About from './About'
import Shop from './Shop'
import Recipes from './Recipes'
import Home from './Home'
function Header(){


   
   
    return(
        // <div>Hi</div>
        <>
        <nav>
        
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/shop">Shop</Link></p>
          <p><Link to="/contact">Contact/Hours</Link></p>
          <p><Link to="/recipes">Recipes</Link></p>
        
      </nav>

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/about"  element={<About />} />
          <Route path="/shop"  element={<Shop />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/recipes"  element={<Recipes />} />
          <Route path="/"  element={<Home />}>
        </Route>
      </Routes>
        </>
      
    
        // <Router>
        //     <div>
        //     <nav>
        //   <ul>
        //     {/* <li>
        //       <Link to="/">Home</Link>
        //     </li> */}
        //     <li>
        //       <Link to="/about">About</Link>
        //     </li>
        //     <li>
        //       <Link to="/shop">shop</Link>
        //     </li>
        //   </ul>
        // </nav>

        // <Switch>
        //   <Route path="/about">
        //     <About />
        //   </Route>
        //   <Route path="/shop">
        //     <Shop />
        //   </Route>
        //   {/* <Route path="/">
        //     <App />
        //   </Route> */}
        // </Switch>

        // </div>
        // </Router>
        
    )
}

export default Header; 