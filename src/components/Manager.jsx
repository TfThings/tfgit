import React from 'react'
import {Routes, Route } from "react-router-dom";
import {Navbar, Footer, Thingstodo, PlaceDetails, CityDetails} from "./index"
import FortMyersAll from '../StoredJsons/FortMyersAll.json'
import FortMyersBeachAll from '../StoredJsons/FortMyersBeachAll.json'
import CapeCoralAll from '../StoredJsons/CapeCoralAll.json'
import NaplesAll from '../StoredJsons/NaplesAll.json'
import EsteroAll from '../StoredJsons/EsteroAll.json'
import {useState, useEffect} from 'react';
import ReactGA from 'react-ga4'

ReactGA.initialize('G-ZMDTVMWFRY')
const Manager = () => {

    var [cityToShowString, setCity] = useState('')

    var [placeIndex, setPlaceI] = useState(0)
    
    var [placeToShowData, setPlace] = useState() 

    var cityToShow = NaplesAll

    var currentPlaceObject = cityToShow[placeToShowData]

    // console.log("INIT GA " + window.location.pathname)

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: JSON.stringify(window.location.pathname + window.location.search)});
    })

    var cS = ''
    var sS = ''
    var ii = ''

    const LookAtDataString = () => {
        const st = window.location.pathname

        var foundDat = false
        var newSt = ""

        var lastChar = ""
        st.split("").map(char => {

            if(foundDat)
            {
                newSt = newSt + char
            }

            if(char == "=")
            {
                foundDat = true
            }
            
            lastChar = char
        })

        if(!newSt)
        {
            // console.log("FOUND NO DATA")
            return
        }

        var lc = ''
        var t = false
        var sI = 0

        newSt.split("").map(char => {
            
            if(lc == ":")
            {
                t = true
            }

            if(char == "-" && t)
            {
                t = false
                sI ++
            }

            if(t)
            {
                if(sI == 0)
                {
                    cS = cS + char
                }

                if(sI == 1)
                {
                    sS = sS + char
                }

                if(sI == 2)
                {
                    ii = ii + char
                }
            }

            lc = char
        })

        cityToShowString = decodeURI(cS)

        placeIndex = parseInt(ii, 10)

        console.log("CHECKING " + cityToShowString + " " + placeIndex + " " + sS)
    }

    const SetCityCollection = () => {

        if(!cityToShowString)
        {
            setCity("Naples")
        }

        console.log("SETTING CITY " + cityToShowString)
        
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

        const st = sS == "Attractions" ? cityToShow.Attractions[placeIndex] : cityToShow.Restaurants[placeIndex]

        currentPlaceObject = st

        console.log("SET PLACE " + currentPlaceObject + " " + sS + " "  + placeIndex)
     }

    return (
        <>
        {LookAtDataString()}
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