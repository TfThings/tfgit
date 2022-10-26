import React from 'react'
import {useState, useEffect} from 'react';
import {Routes, Route, useLocation } from "react-router-dom";
import FortMyersAll from '../StoredJsons/FortMyersAll.json'
import FortMyersBeachAll from '../StoredJsons/FortMyersBeachAll.json'
import CapeCoralAll from '../StoredJsons/CapeCoralAll.json'
import NaplesAll from '../StoredJsons/NaplesAll.json'
import EsteroAll from '../StoredJsons/EsteroAll.json'
import FortMyersBus from '../StoredJsons/FortMyersBus.json'
import {Thingstodo, PlaceDetails, CityDetails, Services, ServiceDetails} from "./index"

const Router = () => {

    const location = useLocation()
    var [cityToShowString, setCity] = useState('')
    var [placeIndex, setPlaceI] = useState(0)
    var [placeToShowData, setPlace] = useState() 
    var cityToShow = NaplesAll
    var currentPlaceObject = cityToShow[placeToShowData]

    var cS = ''
    var sS = ''
    var ii = ''

    const LookAtDataString = () => {
        const st = window.location.pathname
        var foundDat = false
        var newSt = ""
        var lastChar = ""

        // if(newSt == "")
        // {
        //     var lc1 = ""
        //     var lc2 = ""
        //     var found = false
        //     st.split("").map((char) => {
                
        //         if(found)
        //         {
        //             cS = cS + char
        //         }

        //         if(lc2 + lc1 == "in")
        //         {
        //             found = true
        //         }

        //         if(lc1)
        //         {
        //             lc2 = lc1
        //         }
        //         lc1 = char
        //     })
        //     // console.log("FOUND NO DATA")

        //     cityToShowString = decodeURI(cS)
            
        //     return
            
        // }

        st.split("").map((char) => {

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
            return
        }

        var lc = ''
        var t = false
        var sI = 0

        if(newSt != "")
        {
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
    }

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

        if(cityToShowString == 'Services')
        {
            cityToShow = FortMyersBus
            return
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
        var st = sS == "Roofing" ? cityToShow.Roofing[placeIndex] : (sS ==  "Attractions" ? cityToShow.Attractions[placeIndex] : cityToShow.Restaurants[placeIndex])
        currentPlaceObject = st
     }
  return (
    <>
    {LookAtDataString()}
    {SetCityCollection()}
    {SetPlaceObject()}
    <Routes>
        <Route path="/" element={<Thingstodo setCity = {setCity} setPlace={setPlace}/>}/>
        <Route path='/thingsin/:id' element={<CityDetails cityCollection={cityToShow} setPlace={setPlace} setCity={setCity}/>}/>
        <Route path='/services' element={<Services setCity={setCity} setPlace={setPlace}/>}/>
        <Route path='/services/:id' element={<ServiceDetails place={currentPlaceObject}/>}/>
        <Route path="/things">
            <Route index element={<Thingstodo setCity = {setCity} setPlace={setPlace}/>}/>
            <Route path=":id/:id" element={<PlaceDetails place={currentPlaceObject} cityCollection={cityToShow} setPlace={setPlace} setCity={setCity}/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default Router