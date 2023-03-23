
import Badge from 'react-bootstrap/Badge'
import Map from './Map' // import the map here


function Contact(){

    const location = {
        address: '1430 E Main Ave #1430, Puyallup, WA 98372',
        lat: 47.19260,
        lng: -122.27484,
      }
      


    return(
        <div className='contactContainer'>
             
            <div className='contactCard'>
               <h3>Address: 1430 E Main Ave, #1430C Puyallup WA 98372</h3>
                <h5>Current Hours:  Monday-Friday 10am-6pm • Saturday 9am-5pm • Sunday 9am-2pm</h5>

                <h5>Phone:  253-286-7607</h5>
                <h5>Email: <a href='jon@jonshomebrew.com'>jon@jonshomebrew.com</a> </h5>
                <h5>Orders: <a href='jon@jonshomebrew.com'>Order Now</a> </h5>
            </div>
            
            <div>
                <Map location={location} zoomLevel={11} /> 
            </div>
         

        </div>
    )
}

export default Contact; 