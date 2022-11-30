import React, {useState} from 'react'
// @ts-ignore
import Map, {Marker, Popup} from 'react-map-gl'
import mapboxgl from "mapbox-gl"
import './IMap.css'
import 'mapbox-gl/dist/mapbox-gl.css'
const IMap = ({subCollection}) => {

    // eslint-disable-next-line import/no-webpack-loader-syntax
    mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

    const [selectedPlace, setSelectedPlace] = useState(null)

    const coords = (subCollection).slice(0 ,100).map((place, i) => {
        console.log("RE DID THIS")
        if(place && place.location_id != "34230" && place.photo && place.description != "")
        {
            return(
                {
                longitude: place.longitude,
                latitude: place.latitude,
                name: place.name,
                index: i       
                }
            )
        }else{
            return(
                {
                    longitude: 0,
                    latitude:  0,
                }
            )
        }
    })

    // console.log(coords + " " + selectedPlace.name)

    const Pin = () => (
        <div className='impc'>
            Place
        </div>
    )

  return (
    <div className='imc'>
        <Map 
        initialViewState={{
            longitude: -81.87332440207219,
            latitude:  26.634608378325783,
            zoom: 10
          }}
          mapStyle='mapbox://styles/thingsflorida/clb2zq9es001315peg4qyfgzv'
          mapboxAccessToken='pk.eyJ1IjoidGhpbmdzZmxvcmlkYSIsImEiOiJjbGIyem43Y3IwOWY0M29xaDcxYnBkaWFzIn0.LVr_HzYu2F-3s7LDqJPcHg'
          
          >
            {coords.map((place) => (
                <div key={place.index}>
                    {/* <Marker longitude={p.longitude} latitude={p.latitude} color='red'/> */}
                    <Marker key={place.index} longitude={place.longitude} latitude={place.latitude}  onClick={() => setSelectedPlace(place)}>
                        
                    </Marker>

                    {/* Pop up */}
                    {/* <Popup anchor='top' latitude={place.latitude} longitude={place.longitude}>Hello{console.log("YESS " + place.name)}</Popup> */}
                    {/* {selectedPlace.index === place.index ? (<Popup anchor='top'  latitude={place.latitude} longitude={place.longitude}>{place.name}{console.log("YESS " + place.index + " " + selectedPlace.index)}</Popup> ) : (false)} */}
                </div>
            ))}
            {selectedPlace && (<Popup onClose={() => setSelectedPlace(null)} anchor='top' latitude={selectedPlace.latitude} longitude={selectedPlace.longitude}>
                <div>
                {selectedPlace.name}
                Place Ratings
                Description
                More Stuff
                {console.log(selectedPlace.name)}
                </div>
                </Popup>)}
        </Map>
    </div>
  )
}

export default IMap