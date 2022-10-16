import React from 'react'
import {Routes, Route } from "react-router-dom";
import {Navbar, Footer, Thingstodo, PlaceDetails, CityDetails} from "./index"
import FortMyersAll from '../StoredJsons/FortMyersAll.json'
import FortMyersBeachAll from '../StoredJsons/FortMyersBeachAll.json'
import CapeCoralAll from '../StoredJsons/CapeCoralAll.json'
import NaplesAll from '../StoredJsons/NaplesAll.json'
import EsteroAll from '../StoredJsons/EsteroAll.json'
import {useState} from 'react';

const Manager = () => {

    var [cityToShowString, setCity] = useState('')
    
    var [placeToShowData, setPlace] = useState() 

    var cityToShow = NaplesAll

    var currentPlaceObject = cityToShow[placeToShowData]

    const SetCityCollection = () => {

        if(!cityToShowString)
        {
            cityToShowString = localStorage.getItem("cityToShowString")
        }

        if(!cityToShowString)
        {
            setCity("Naples")
        }
        
        if(cityToShowString == 'Fort Myers')
        {
            cityToShow = FortMyersAll
            return
        }

        if(cityToShowString == 'Fort Myers Beach')
        {
            cityToShow = FortMyersBeachAll
            return
        }

        if(cityToShowString == 'Cape Coral')
        {
            cityToShow = CapeCoralAll
            return
        }

        if(cityToShowString == 'Naples')
        {
            cityToShow = NaplesAll
            return
        }

        if(cityToShowString == 'Estero')
        {
            cityToShow = EsteroAll
            return
        }

    }

    const SetPlaceObject = () => {

        if(!placeToShowData)
        {
            placeToShowData = JSON.parse(localStorage.getItem("placeToShowData"))
        }

        if(!placeToShowData)
        {
            placeToShowData ={subCollection: 'Attractions', placeIndex:1}
            // setPlace({subCollection: 'Attraction', placeIndex:1})
        }

        const st = placeToShowData.subCollection == "Attractions" ? cityToShow.Attractions[placeToShowData.placeIndex] : cityToShow.Restaurants[placeToShowData.placeIndex]

        currentPlaceObject = st

        //need subCollection
        // console.log(placeToShowData)

     }

    return (
        <>
        {SetCityCollection()}
        {SetPlaceObject()}
        
           <Navbar/>
           
           <Routes>
            <Route path="/" element={<Thingstodo setCity = {setCity} setPlace={setPlace}/>}/>
            <Route path='/thingsin/:id' element={<CityDetails cityCollection={cityToShow} setPlace={setPlace} setCity={setCity}/>}/>
            <Route path="/things">
              <Route index element={<Thingstodo setCity = {setCity} setPlace={setPlace}/>}/>
              <Route path=":id/:id" element={<PlaceDetails place={currentPlaceObject} cityCollection={cityToShow} setPlace={setPlace} setCity={setCity}/>}/>
              {/* <Route path="/:id/:id" element={<CityDetails cityPlaces={cityToShow}/>}/> */}
            </Route>
           </Routes>
        
           <Footer/>
           
          
        </>
    )
}

export default Manager