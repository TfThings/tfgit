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
            const imageUrl = place.photo.images.medium ? place.photo.images.medium.url : place.photo.images.large.url

            return(
                {
                longitude: place.longitude,
                latitude: place.latitude,
                name: place.name,
                index: i,
                image: imageUrl
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
          onClick={console.log("CLICKED ON THE MaP")}
          >
            {/* {coords.map((place) => (
                <div key={place.index} onClick={() => setSelectedPlace(place)}>
                    <Marker key={place.index} longitude={place.longitude} latitude={place.latitude}  >
                       <div className='imph'>
                        {place.image && <img src={place.image} alt={place.name}/>}
                       </div>
                    </Marker>
                </div>
            ))} */}
            {subCollection.map((place) => {
                if(place && place.location_id != "34230" && place.photo && place.description != "")
                return (
                    <div key={place.index} onClick={() => setSelectedPlace(place)}>
                        {console.log("DID MARK " + place.name)}
                    <Marker key={place.index} longitude={place.longitude} latitude={place.latitude}  >
                       <div className='imph'>
                        {place.photo && <img src={place.photo.images.medium ? place.photo.images.medium.url : place.photo.images.large.url} alt={place.name}/>}
                       </div>
                    </Marker>
                </div>
                )
                
            })}
            {selectedPlace && (<Popup closeOnClick='true' onClose={() => {setSelectedPlace(null)}} anchor='top' latitude={selectedPlace.latitude} longitude={selectedPlace.longitude}>
                <div>
                {selectedPlace.name}
                {selectedPlace.num_reviews}
                More Stuff
                {console.log(selectedPlace.name)}
                </div>
                </Popup>)}
        </Map>
        {selectedPlace &&
         <div className='impic'>
                {selectedPlace.name}
                {selectedPlace.name}
                {selectedPlace.num_reviews}
                {selectedPlace.description}
        </div>}
    </div>
  )
}

export default IMap