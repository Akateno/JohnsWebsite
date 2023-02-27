import Bottles from '../Bottles.jpg'
import Hops from '../hops.jpg'
import Beer from '../Beer.jpg'
import ImageSlider from './ImageSlider'
import equipmentPic from '../Images/equipment.jpg'
import ingridientsPic from '../Images/ingridients.jpg'
import recipePic from '../Images/recipes.jpg'
import winePic from '../Images/wine.jpg'
import miscellaneousPic from '../Images/miscellaneous.webp'
import { useNavigate } from 'react-router-dom'
import Shop from './Shop'

function SlideShow(){
    // const categorieStyle = {
    //     width:'100%',
    //     height: '100%',
    //     borderRadius:'10px',
    //     backgroundPosition:'center',
    //     backgroundSize:'cover',
    //     backgroundImage:`url(${Hops})`,
    // };
    // const categorieContainer ={
    //     display:'flex',
    //     width: "300px",
    //     height: "280px", 
    // }
    
const slides=[Bottles,Hops,Beer]
const containerStyles = {
    width: "900px",
    height: "380px",
    margin: "0 auto",
};

let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/inventorylist`; 
    navigate(path);
  }

    return(
        <div>
            <h1 className="shopTitle">Everything You Need in One Place</h1>
            <div style={containerStyles}>
                <ImageSlider slides={slides}/>
            </div>
            <div className='shoptitleDiv'>
                <h1 className="shopSubtitle" >Browse By Categorie</h1>
            </div>
            
            <div className='thing1'>

                <div className='thing2'>
                    <img  className ="categoriePic" src = {ingridientsPic} alt="ingridients"/>
                    <h3 onClick={routeChange} className="linkText"><u>Ingridients</u></h3>
                </div>
                <div className='thing2'>
                    <img className ="categoriePic" src = {equipmentPic} alt="equipment"/>
                    <h3 className="linkText"><u>Equipment</u></h3>
                </div>
                <div className='thing2'>
                    <img className ="categoriePic" src = {recipePic} alt="recipes"/>
                    <h3 className="linkText"><u>Recipes</u></h3>
                </div>
                
                
               
            </div>


            <div className='thing1'>

                <div className='thing2'>
                    <img  className ="categoriePic" src = {winePic} alt="wine"/>
                    <h3 className="linkText"><u>Wine Supplies</u></h3>
                </div>
                <div className='thing2'>
                    <img className ="categoriePic" src = {miscellaneousPic} alt="misc"/>
                    <h3 className="linkText"><u>Miscellaneous</u></h3>
                </div>
                <div className='thing2'>
                    <img className ="categoriePic" src = {Hops} alt="books"/>
                    <h3 className="linkText"><u>Books</u></h3>
                </div>
                
                
               
            </div>




            {/* <div className='categorieContainer'>
                <img className='slideCards' src = {winePic} alt="wine"/>
                <img className='slideCards' src = {Hops} alt="misc"/>
                <img className='slideCards' src = {Hops} alt="books"/>
            </div> */}
            {/* <div style={categorieContainer}>
                <div style={categorieStyle}>
                    Ingridients
                </div>
                <div style={categorieStyle} >
                    Equpment
                </div>
                <div style={categorieStyle}>
                    Recipes
                </div>
                <div style={categorieStyle}>
                    Wine Supplies
                </div>
                <div style={categorieStyle}>
                    Miscellaneous
                </div>
                <div style={categorieStyle}>
                    Books
                </div>
                <div style={categorieStyle}>
                    Merch
                </div>
            </div> */}
            
        </div>
    )
}

export default SlideShow; 