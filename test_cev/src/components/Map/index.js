import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapStyles = {
    width: '600px',
    height: '180px',
};

function Map({lat,lng}) {
  
  return (
        <LoadScript
            googleMapsApiKey={'AIzaSyBVn0f1PQGKbFeguWrcYMXLX_onr-nVufg'}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={{ lat: lat, lng: lng }}
            >
                <Marker position={{ lat: lat, lng: lng }} />
            </GoogleMap>
        </LoadScript>
    )
}
export default Map;