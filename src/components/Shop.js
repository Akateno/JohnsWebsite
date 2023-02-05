import inventory from '../inventory.json'

function Shop() {
    return (
        <div>{inventory.ingridients.map(int => {return (

            <div>{int.name} </div>

        )})}</div>
    )
  }

  export default Shop; 