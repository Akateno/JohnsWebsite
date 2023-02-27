

function ShopCards ({id,name,price,description,categorie,image,volume,additionalinfo}){





    return(

        <div className='bodyCard'>
                            
                            <div>
                                <img className="cardPicture" src={image} alt="Card image cap"/>
                                
                                 <div class="card-body">
                                    <h4 class="card-title">{name}</h4>
                                    <p class="price">${price} </p>
                                    
                                </div>
                                <button  class="btn btn-primary">Add Cart</button>
                            </div>
                    
                      


                 {/* <div >
                
                 </div>
                    <div class="cardContainer">
                    <div class="col-sm-6">

                        <div class="card">
                            
                            <div className="cardbody ">
                                <img class="card-img-top" src={image} alt="Card image cap"/>
                                <div class="card-body">
                                    <h4 class="card-title">{name}</h4>
                                    <p class="price">${price}</p>
                                </div>
                                <button  class="btn btn-primary">Add Cart</button>
                            </div>
                    
                        </div>
                    </div>
                
                 </div> */}
        </div>




    )
}

export default ShopCards; 