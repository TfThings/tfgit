import React, {useEffect} from 'react'
import './PlaceDetails.css'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {HiPhoneOutgoing} from 'react-icons/hi'
import FeaturedSection from '../FeaturedSection'
import CardArray from '../CardArray'
import InfoArray from '../InfoArray'
import call from 'react-native-phone-call'
import openMap, {createOpenLink} from 'react-native-open-maps'
import EmailSect from '../EmailSect'
import {Helmet, HelmetData} from 'react-helmet-async'
import ServicesButton from '../ServicesButton'
const PlaceDetails = ({place, cityCollection, index, setPlace, setCity}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const selfUpdate = () => {
        window.scrollTo(0,0)
    }

    const helmetData = new HelmetData({})

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
    const isRest = place.subtype ? false : true

    const cityName = cityCollection.Attractions[0].city_name

    const soeTitle = place.name + " in " + cityName + ", Directions - Reviews and More"
    const soeDesc = "Get Directions, Hours, Reviews and More about " + place.name + ". Find More Things Around " + place.name + " and In " + cityName + " All Hand Picked For You. Get Directions and More To " + place.address + "."
    const soeLoc = "https://www.thingsflorida.com" + window.location.pathname
    const soeKeys = place.name + ", " + cityName + ", " + (isRest ? "Restaurant" : place.subtype[0].name) + ", " + "Top Things to do in"+ ", " + "reviews, " + "hours"

  return (
    <>
    <div>
    <Helmet helmetData={helmetData} prioritizeSeoTags>
            <title>{soeTitle}</title>
            <meta name="description" content={soeDesc}/>
            <link rel="canonical" hreflang="en" href={soeLoc}/>
            <link rel="alternate" hreflang="en" href={soeLoc}/>
            <meta name="keywords" content={soeKeys}/>
            <meta name='og:title' content={soeTitle}/>
            <meta name='og:type' content="website"/>
            <meta name='og:url' content={soeLoc}/>
            <meta name='og:image' content={place.photo.images.large.url}/>
            <meta name='og:desc' content={place.description}/>
    </Helmet>
        {selfUpdate()}
        <div className='thing'>
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
                                <InfoArray place={place}/>
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
        <ServicesButton/>
        <FeaturedSection collection={cityCollection} subString={isRest ? "Restaurants" : "Things"} subCollection={isRest ? cityCollection.Restaurants : cityCollection.Attractions} setPlace={setPlace} setCity={setCity}/>
        <CardArray cityCollection={cityCollection} twoColumn={false} headerString={isRest ? "Other Restaurants in" : "Other Things in"} rests={isRest} setPlace={setPlace} setCity={setCity}/>
        <FeaturedSection collection={cityCollection} subString={!isRest ? "Restaurants" : "Things"} subCollection={!isRest ? cityCollection.Restaurants : cityCollection.Attractions} setPlace={setPlace} setCity={setCity}/>
        <CardArray cityCollection={cityCollection} twoColumn={false} headerString={!isRest ? "Other Restaurants in" : "Other Things in"} rests={!isRest} setPlace={setPlace} setCity={setCity}/>
    </div>
    </>
  )

  const {helmet} = helmetData.context
}

export default PlaceDetails