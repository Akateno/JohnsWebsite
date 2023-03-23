
import jlogo from '../jlogo.webp'; 
// import '../App.css';
import Header from './Header';
import { Link, Routes, Route } from "react-router-dom";
import About from './About'
import Shop from './Shop'
import Contact from './Contact'
import Recipes from './Recipes'
import Posts from './Posts'
import InventoryList from './InventoryList'
import Home from './Home'
import SlideShow from './SlideShow'
import PostCard from './PostCard'
function App() {


  return (
    <div className="App">


      {/* <div>
        <img class="logo" src={jlogo} alt ="website logo"></img> 
        <h1 class="text-center">Jon's Homdewbrew and Wine Supply</h1> 
       <h3 class="text-center">1430 E Main Ave #1430C Puyallup WA 98372</h3>
       <h3 class="text-center">Call us!: 253-286-7607</h3>
      </div> */}
         
      
      <Header/>
      <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/about"  element={<About />} />
          <Route path="/shop"  element={<Shop />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/recipes"  element={<Recipes />} />
          <Route path="/posts"  element={<Posts />} />
          <Route path="/postcard"  element={<PostCard />} />
          <Route path="/inventorylist"  element={<InventoryList />} />
          <Route path="/"  element={<Home />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
