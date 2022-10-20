import React, {useEffect} from 'react'
import './PlaceDetails.css'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {HiPhoneOutgoing} from 'react-icons/hi'
import FeaturedSection from '../FeaturedSection'
import CardArray from '../CardArray'
import call from 'react-native-phone-call'
import openMap, {createOpenLink} from 'react-native-open-maps'
import EmailSect from '../EmailSect'
const PlaceDetails = ({place, cityCollection, index, setPlace, setCity}) => {

    const selfUpdate = () => {
        window.scrollTo(0,0)
    }

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

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    const isRest = place.subtype ? false : true

  return (
    <>
    <div>
        {selfUpdate()}
        <div className='thing'>
                {/* <div className='thingHeader'>
                    <h1>{place.name}</h1>
                </div> */}
            <section className='thingContainer'>
                    <div className='container'>
                        <div className='image'>
                            <img src={place.photo.images.large.url} alt="lkrgelrm"/>
                        </div>
                        <div className='aboutContainer'>
                            <div className='header'><h1>{place.name}</h1></div>
                            <div className='icons'>
                                <div className='icon rating yellow'><span>{place.rating ? place.rating : "N/A"}</span><h1>Rating</h1></div>
                                <div className='icon review orange'><span>{place.num_reviews ? place.num_reviews : "N/A"}</span><h1>Review Amount</h1></div>
                                <div className='icon blue'><span>#{place.ranking_position ? place.ranking_position : "N/A"}</span><h1>Ranking</h1></div>
                                <div className='icon green'><span>YES</span><h1>is open</h1></div>
                            </div>
                            <div className='details'>
                                <div className='row'>
                                    <button onClick={() => makeCall(place.phone)} className='box phone blue'><span><HiPhoneOutgoing/><h1>{place.phone}</h1></span></button>
                                    <a href={place.website} target="_blank" rel="noreferrer noopener" className='box website red'><span><BsBoxArrowUpRight/><h1>Visit Website</h1></span></a>
                                    <button onClick={() => openMobileMap(place)} className='box address orange'><span><FaMapMarkerAlt/></span><h1>{place.address}</h1></button>
                                </div>
                                {/* <div className='catrow'>
                                    <div><h1>{place.subcategory[0].name}</h1></div>
                                    <div><h1>{isRest ? "" : place.subtype[0].name}</h1></div>
                                </div> */}
                            </div>
                            <div className='desc'>
                                <h1>About</h1>
                                <h2>{place.description}</h2>
                            </div>
                            {/* <div className='hours'>
                                <h1>Hours</h1>
                            </div> */}
                            {/* <div className='improve'>
                                <h1>IMPROVE LISTING</h1>
                            </div> */}
                        </div>
                    </div>    
            </section>
        </div>
        <EmailSect isImprovement={true} place={place}/>
        <FeaturedSection collection={cityCollection} subString={isRest ? "Restaurants" : "Things"} subCollection={isRest ? cityCollection.Restaurants : cityCollection.Attractions} setPlace={setPlace} setCity={setCity}/>
        <CardArray cityCollection={cityCollection} twoColumn={false} headerString={isRest ? "Other Restaurants in" : "Other Things in"} rests={isRest} setPlace={setPlace} setCity={setCity}/>
        <FeaturedSection collection={cityCollection} subString={!isRest ? "Restaurants" : "Things"} subCollection={isRest ? cityCollection.Restaurants : cityCollection.Attractions} setPlace={setPlace} setCity={setCity}/>
        <CardArray cityCollection={cityCollection} twoColumn={false} headerString={!isRest ? "Other Restaurants in" : "Other Things in"} rests={isRest} setPlace={setPlace} setCity={setCity}/>
    </div>
    </>
  )
}

export default PlaceDetails