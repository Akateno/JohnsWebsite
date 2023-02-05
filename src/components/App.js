
import jlogo from '../jlogo.webp'; 
// import '../App.css';
import Header from './Header';
function App() {


  return (
    <div className="App">


      <div>
        <img class="logo" src={jlogo} alt ="website logo"></img> 
       {/* <h1 class="text-center">Jon's Homewbrew and Wine Supply</h1>  */}
       <h3 class="text-center">1430 E Main Ave #1430C Puyallup WA 98372</h3>
       <h3 class="text-center">Call us!: 253-286-7607</h3>
      </div>
         
      
      <Header/>
    </div>
  );
}

export default App;
