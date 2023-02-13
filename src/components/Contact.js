
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
            <p>Adress: 1430 E Main Ave, #1430C Puyallup WA 98372</p>
        <p>Current Hours:  Monday-Friday 10am-6pm • Saturday 9am-5pm • Sunday 9am-2pm</p>

        <p>Phone:  253-286-7607</p>
        <p>Email: <a href='jon@jonshomebrew.com'>jon@jonshomebrew.com</a> </p>
        <p>Orders: <a href='jon@jonshomebrew.com'>Order Now</a> </p>

         <Map location={location} zoomLevel={11} /> 

        </div>
    )
}

export default Contact; 