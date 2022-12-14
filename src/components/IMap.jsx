import React, {useState, useEffect, useRef, useCallback} from 'react'
// @ts-ignore
import Map, {Marker, Popup, useMap} from 'react-map-gl'
import mapboxgl from "mapbox-gl"
import './IMap.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import StarReview from './StarReview'
import InfoArray from './InfoArray'
import {MdFastfood} from 'react-icons/md'
import {GrAttraction} from 'react-icons/gr'
import FortMyersAll from '../StoredJsons/FortMyersAll.json'
import CapeCoralAll from '../StoredJsons/CapeCoralAll.json'
import NaplesAll from '../StoredJsons/NaplesAll.json'
import EsteroAll from '../StoredJsons/EsteroAll.json'
import ReviewsContainer from './ReviewsContainer'
const IMap = ({placePassed, viewPort}) => {

    // eslint-disable-next-line import/no-webpack-loader-syntax
    mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default


    const mapRef = useRef(useMap())

    const [currentCollection, setCurrentCollection] = useState(FortMyersAll)

    const [currentSubCollection, setCurrentSubColleciton] = useState(currentCollection.Restaurants)
    const [selectedPlace, setSelectedPlace] = useState(null)

    var tapCounter = 0

    const  [currentSelectedIndex, setSelectedIndex] = useState(0)

    // var viewPort = viewPort ? viewPort : {longitude: FortMyersAll.Restaurants[0].longitude, latitude:  FortMyersAll.Restaurants[0].latitude, zoom: 15}

    useEffect(() => {

        // console.log("PLACE Changes ")
    },[selectedPlace])

    const SetMainCollection = (newCollection) => {
        console.log("SET NEW COLLECTION " + newCollection.Attractions[0].collectionParentName )
        setCurrentCollection(newCollection)
        setCurrentSubColleciton(newCollection.Restaurants)
        setSelectedIndex(0)
        mapRef.current?.flyTo({center: [newCollection.Restaurants[0].longitude, newCollection.Restaurants[0].latitude], duration: 2000})
        // main.flyTo({center: [-122, 37.8], essential: true})
    }

    const SetSubCollectionSearch= (newCollection) => {
        setSelectedIndex(newCollection[0].collection_type == 'Restaurants' ? 0 : 1)

        setCurrentSubColleciton(newCollection)

        console.log("SWAPPED COLLECTION " + currentSelectedIndex)
    }

    // console.log(coords + " " + selectedPlace.name)

    const CountTaps = () => {

       selectedPlace && tapCounter++

       console.log("COUNTING TAPS " + tapCounter)
        if(tapCounter >= 2)
        {
            selectedPlace && setSelectedPlace(null)

            tapCounter = 0
        }
    }

    const SelectPlace = (place) => {
        tapCounter = 0
        
        selectedPlace != place && setSelectedPlace(place)
    }

    const CityPanel = ({cityCollection}) => (
        <div className={currentCollection == cityCollection ? 'imcpc cel' : 'imcpc'} onClick={() => SetMainCollection(cityCollection)}>
            <img className='' src={`${cityCollection.Attractions[0].banner_Image}`} alt="CityButtonPhoto"/>
            <div className='imcptd'>
                <h2 className='imcpct'>{cityCollection.Attractions[0].city_name}</h2>
                <h2 className='imcpbt'>Things</h2>
            </div>
        </div>
    )

    const PlacePopUp = () => (
        <div className='impc'>
            Place
        </div>
    )

  return (
    <div className={placePassed ? 'imcop' : 'imc'}>
        <Map
          ref={mapRef}
          mapStyle='mapbox://styles/thingsflorida/clb2zq9es001315peg4qyfgzv'
          mapboxAccessToken='pk.eyJ1IjoidGhpbmdzZmxvcmlkYSIsImEiOiJjbGIyem43Y3IwOWY0M29xaDcxYnBkaWFzIn0.LVr_HzYu2F-3s7LDqJPcHg'
          onClick={() => selectedPlace && CountTaps()}
          {...viewPort}
          >
            {placePassed && (<Marker longitude={placePassed.longitude} latitude={placePassed.latitude}  >
                       <div className='imph'>
                        {placePassed.photo && <img src={placePassed.photo.images.medium ? placePassed.photo.images.medium.url : placePassed.photo.images.large.url} alt={placePassed.name}/>}
                       </div>
                    </Marker>)}
            {currentSubCollection.map((place) => {
                if(place && place.location_id != "34230" && place.photo && place.description != "")
                return (
                    <div key={place.index}>
                    <Marker key={place.name} onClick={() => SelectPlace(place)} longitude={place.longitude} latitude={place.latitude}  >
                       <div className='imph'>
                        {place.photo && <img src={place.photo.images.medium ? place.photo.images.medium.url : place.photo.images.large.url} alt={place.name}/>}
                       </div>
                    </Marker>
                </div>
                )
                
            })}
            {/* {selectedPlace && (<Popup anchor='top' latitude={selectedPlace.latitude} longitude={selectedPlace.longitude} >
                <div>
                {selectedPlace.name}
                {selectedPlace.num_reviews}
                More Stuff
                {console.log(selectedPlace.name)}
                </div>
                </Popup>)} */}
        </Map>
        
        {!placePassed && 
        <>
        <div className='imbmc'>
            <div className={selectedPlace ? 'impos celim' : 'impos'}>
                <h3 className='impot'>Categories</h3>
                <span className='impots'><h3>Restaurants</h3><h3>Attractions</h3></span>
                <div className='impcs'>
                    <MdFastfood className={currentSelectedIndex === 0 ? 'imci sel' : 'imci'} onClick={() => SetSubCollectionSearch(currentCollection.Restaurants)}/>
                    <GrAttraction className={currentSelectedIndex === 1 ? 'imci sel' : 'imci'}  onClick={() => SetSubCollectionSearch(currentCollection.Attractions)}/>
                </div>
            </div>
            {selectedPlace &&
            <div className='impic'>
                <div className='impict'><h2>{selectedPlace.name}</h2></div>
                <div className='impicsr'><StarReview rating={selectedPlace.rating} count={selectedPlace.num_reviews}/></div>
                <div className='imrcfp'>
                    <div className='impicia'><InfoArray place={selectedPlace} onMap={true}/></div>
                    <div className='imrc'><ReviewsContainer placeName={selectedPlace.name} onMap={true}/></div>
                </div>
                {/* <div className='impicd'><p>{selectedPlace.description}</p></div> */}
            </div>}
            <div className='imcsc'>
                    <div className='imscl'>
                        <CityPanel cityCollection={FortMyersAll}/>
                        <CityPanel cityCollection={CapeCoralAll}/>
                        <CityPanel cityCollection={NaplesAll}/>
                        <CityPanel cityCollection={EsteroAll}/>
                    </div>
            </div>
        </div>
        </>}
    </div>
  )
}

export default IMap