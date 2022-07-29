import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({center,zoom}) => {
  return (
    <div className='w-full h-full'>
        <GoogleMapReact 
                 bootstrapURLKeys={{ key: 'AIzaSyAI6v6hYo0nqgmkZleXwNqXYTv4swP-hZI' }}
                defaultCenter={center}
                defaultZoom={zoom}>
                    <p 
                    lat={17.318574}
                    lng={96.470853}
                    >.i a placre</p>
        </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
    zoom: 10,
    center: {
        lat: 17.318574,
        lng: 96.470853
    }
}
// bge lat & long
// 17.318574, 96.470853

export default Map