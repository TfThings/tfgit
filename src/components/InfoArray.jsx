import React from 'react'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {HiPhoneOutgoing} from 'react-icons/hi'
import openMap, {createOpenLink} from 'react-native-open-maps'
import call from 'react-native-phone-call'
import ReactGA from "react-ga4";
import './InfoArray.css'
const InfoArray = ({place}) => {

    const makeCall = (phoneNumber) => {
        const args = {
            number: phoneNumber, // String value with the number to call
            prompt: true, // Optional boolean property. Determines if the user should be prompted prior to the call 
            skipCanOpen: true // Skip the canOpenURL check
        }
        call(args).catch(console.error)
        console.log("CALLING " + phoneNumber)
    }

    const openMobileMap =(spot) => {
        const dest = spot.latitude + "," + spot.longitude
        var lat = JSON.parse(spot.latitude)
        var long = JSON.parse(spot.longitude)
        console.log("OPENED MAP " + spot.latitude + " " + spot.longitude + " " + dest + " " + dest.longitude + " " + lat)
        var loc = {latitude: lat, longitude: long}
        openMap(loc)
        // createOpenLink(loc)
    }

    const CallGaEvent = () =>{
        ReactGA.event({
            category: "site_visit",
            action: "site_visit",
            label: "siteVisit", // optional
            value: 99, // optional, must be a number
            nonInteraction: true, // optional, true/false
            transport: "xhr", // optional, beacon/xhr/image
          });
    }

  return (
    <div className='row'>
        <button onClick={() => makeCall(place.phone)} className='box phone blue'><span><HiPhoneOutgoing/></span><h2>{place.phone}</h2></button>
        <a href={place.website} target="_blank" rel="noreferrer noopener" className='box website red'><span><BsBoxArrowUpRight/></span><h2>Visit Website</h2></a>
        <button onClick={() => openMobileMap(place)} className='box address orange'><span><FaMapMarkerAlt/></span><h2>{place.address}</h2></button>
    </div>
  )
}

export default InfoArray