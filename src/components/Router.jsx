import React from 'react'
import {useState, useEffect} from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import FortMyersAll from '../StoredJsons/FortMyersAll.json'
import FortMyersBeachAll from '../StoredJsons/FortMyersBeachAll.json'
import CapeCoralAll from '../StoredJsons/CapeCoralAll.json'
import NaplesAll from '../StoredJsons/NaplesAll.json'
import EsteroAll from '../StoredJsons/EsteroAll.json'
import FortMyersBus from '../StoredJsons/FortMyersBus.json'
import {Thingstodo, PlaceDetails, CityDetails, Services, ServiceDetails, ContactUs, Activities} from "./index"
import SiteMapGen from './SiteMapGen';
const Router = () => {

    var [cityToShowString, setCity] = useState('')
    var [placeIndex, setPlaceI] = useState(0)
    var [placeToShowData, setPlace] = useState() 
    var cityToShow = NaplesAll
    var currentPlaceObject = cityToShow[placeToShowData]

    const location = useLocation()

    useEffect(() => {
        
    },[location])

    var cS = ''
    var sS = ''
    var ii = ''

    const LookAtDataString = () => {
        const st = window.location.pathname
        var foundDat = false
        var newSt = ""
        var lastChar = ""

        newSt = decodeURI(location.search)

        if(!newSt)
        {
            st.split("").map((char) => {

                if(char == "-")
                {
                    foundDat = true
                }

                if(foundDat)
                {
                    newSt = newSt + char
                }
                
                lastChar = char
            })
        }

        if(!newSt){
            return
        }

        var lc = ''
        var t = false
        var sI = 0

        if(newSt != "")
        {
            newSt.split("").map(char => {
            
            if(lc == "-")
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

        placeIndex = ii

        // console.log("READ IT " + cityToShowString + " " + placeIndex)
    }

    const SetCityCollection = () => {

        if(!cityToShowString)
        {
            setCity("Naples")

        }

        // console.log("SETTING CITY " + cityToShowString)

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
        var st = {}
        // st = sS ==  "Attractions" ? cityToShow.Attractions[placeIndex] : cityToShow.Restaurants[placeIndex]
        
        st = GetPlaceObject()
        
        currentPlaceObject = st
     }

     var GetPlaceObject = () =>{
        // console.log("DOING THE STUFF " + sS)
        if(!sS)
        {
            // LookAtDataString()
        }

        sS = decodeURI(sS)

        if(sS == "Attractions")
        {
            return cityToShow.Attractions[placeIndex]
        }

        if(sS == "Restaurants")
        {
            return cityToShow.Restaurants[placeIndex]
        }

        if(sS == "Roofing")
        {
            return cityToShow.Roofing[placeIndex]
            
        }

        if(sS == "Fencing")
        {
            return cityToShow.Fencing[placeIndex]
            
        }

        if(sS == "Pool Cages")
        {
            return cityToShow.Poolcage[placeIndex]
        }

        if(sS == "Pool Cleaning")
        {
            return cityToShow.PoolCleaning[placeIndex]
        }

        if(sS == "Pavers")
        {
            return cityToShow.Pavers[placeIndex]
        }
     }
  return (
    <>
    {LookAtDataString()}
    {SetCityCollection()}
    {SetPlaceObject()}
    <Routes>
        <Route path="/" element={<Thingstodo/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/activities" element={<Activities/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/services/:id' element={<ServiceDetails place={currentPlaceObject}/>}/>
        <Route path='/thingsin/:id' element={<CityDetails cityCollection={cityToShow}/>}/>
        <Route path="/things">
            <Route index element={<Thingstodo/>}/>
            <Route path=":id/:id" element={<PlaceDetails place={currentPlaceObject} cityCollection={cityToShow}/>}/>
        </Route>
        {/* <Route path="/sitemapGen" element={<SiteMapGen/>}/> */}
    </Routes>
    </>
  )
}

export default Router