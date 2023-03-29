import inventory from '../inventory.json'
import ShopCards from './ShopCards'
import hopsingridient from '../Images/hopsingridient.webp'
import maltextract from '../Images/maltextract.webp'
import yeast from '../Images/yeast.webp'
import grain from '../Images/grain.jpeg'


function InventoryList() {


    
    return (
        <div>
          
          <h1 className="shopTitle">Ingridients</h1>
            <div className='subCatDiv1'>
                <div className='subCatDiv2'>
                    <img className ="subcategoriePic" src = {grain} alt="equipment"/>
                    <h3 className='grainCategory' ><u>Grain</u></h3>
                </div>
                <div className='subCatDiv2'>
                    <img className ="subcategoriePic" src = {maltextract} alt="equipment"/>
                    <h3 ><u>Malt Extract</u></h3>
                    
                </div>
                <div className='subCatDiv2'>
                <img className ="subcategoriePic" src = {yeast} alt="equipment"/>
                    <h3 ><u>Yeast</u></h3>
                    
                </div>
                <div className='subCatDiv2'>
                    
                    <img className ="subcategoriePic" src = {hopsingridient} alt="equipment"/>
                    <h3 ><u>Hops</u></h3>
                </div>
            </div>
          <div className='bigCard'>
             {inventory.ingridients.map((ing) => (
        <ShopCards
          id={ing.id}
          name={ing.name}
          price={ing.price}
          description={ing.description}
          categorie={ing.categorie}
          image={ing.image}
          volume={ing.volume}
          additionalinfo={ing.additionalinfo}

        />
      ))}
          </div>

           
            
            
            
        </div>
    )
  }

  export default InventoryList; 