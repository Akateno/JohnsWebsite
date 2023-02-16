import inventory from '../inventory.json'
import ShopCards from './ShopCards'
import SlideShow from './SlideShow'

function Shop() {


    
    return (
        <div>
            <SlideShow/>
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
    )
  }

  export default Shop; 