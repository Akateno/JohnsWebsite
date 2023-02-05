import GoogleMapReact from "google-map-react"; 
import React from 'react';
import LocationPin from "./LocationPin";
function Map(){
    const location = {
        address:'sdf',
        lat: 47.19260,
        lng: -122.27484,
      }

      const mapStyles = {
        
        Width: "450px",
        height: "450px",
        
      };

      const containerStyle = {
        Width: "400px",
        height: "450px"
      }

    return (
     <div className="map" >
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map" class='mapContainer' >
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={14}
        style={mapStyles}
        resetBoundsOnResize={true}
        
      >
        {/* <Marker position={{lat: 47.19260, lng: -122.27484}} /> */}

         <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        /> 
      </GoogleMapReact>
    </div>
  </div>
)
}

export default Map;
// AIzaSyB0cfQkH32CZhPR42YRB5UnZnLMONcSSZs