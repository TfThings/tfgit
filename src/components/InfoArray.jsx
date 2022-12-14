import React from 'react'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {HiPhoneOutgoing} from 'react-icons/hi'
import call from 'react-native-phone-call'
import ReactGA from "react-ga4";
import './InfoArray.css'

const InfoArray = ({place, onMap}) => {

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

        
        window.open("https://maps.google.com?q="+spot.name+'/'+lat+","+long)

        // if (/iPhone|iPad/i.test(navigator.userAgent)){
        //     const scheme = 'maps:0,0?q='
        //     const latLng = `${lat},${long}`;
        //     const label = 'Custom Label';
        //     const url = `${scheme}${label}@${latLng}`
        //     window.openURL(url);
        //     return
        // }

        // if(isMobile)
        // {
        //     const scheme = 'geo:0,0?q='
        //     const latLng = `${lat},${long}`;
        //     const label = 'Custom Label';
        //     const url =`${scheme}${latLng}(${label})`
        //     window.openURL(url);
        // }
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
    <div className='rw'>
        <button onClick={() => makeCall(place.phone)} className={onMap ? 'bxm phone blue' : 'bx phone blue'}><span><HiPhoneOutgoing/></span><h2>{place.phone}</h2></button>
        <a href={place.website} target="_blank" rel="noreferrer noopener" className={onMap ? 'bxm website red' : 'bx website red'}><span><BsBoxArrowUpRight/></span><h2>Visit Website</h2></a>
        <address onClick={() => openMobileMap(place)} className={onMap ? 'bxm address orange' : 'bx address orange'}><span><FaMapMarkerAlt/></span><h2>{place.address}</h2></address>
    </div>
  )
}

export default InfoArray