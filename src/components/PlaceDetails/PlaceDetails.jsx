import React, {useEffect} from 'react'
import './PlaceDetails.css'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {HiPhoneOutgoing} from 'react-icons/hi'
import FeaturedSection from '../FeaturedSection'
import CardArray from '../CardArray'
import InfoArray from '../InfoArray'
import EmailSect from '../EmailSect'
import {Helmet, HelmetData} from 'react-helmet-async'
import ServicesButton from '../ServicesButton'
import BackButton from '../BackButton'
import ActivitiesButton from '../ActivitiesButton'
import ReviewsContainer from '../ReviewsContainer'
const PlaceDetails = ({place, cityCollection, index}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const selfUpdate = () => {
        window.scrollTo(0,0)
    }

    const helmetData = new HelmetData({})

    const isRest = place.subtype ? false : true

    const cityName = cityCollection.Attractions[0].city_name

    const soeTitle = place.name + " in " + cityName + ", Directions - Reviews and More"
    const soeDesc = "Get Directions, Hours, Reviews and More about " + place.name + ". Find More Things Around " + cityName + " All Hand Picked For You!"
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
            <meta name='og:desc' content={soeDesc}/>
            <meta name='og:description' content={soeDesc}/>
    </Helmet>
        {selfUpdate()}
        <div className='thing'>
            <section className='thingContainer'>
                    <div className='container'>
                        <div className='image'>
                            <img src={place.photo.images.large.url} alt="lkrgelrm"/>
                        </div>
                        <div className='aboutContainer'>
                            <div className='ribbon4'><h1>{place.name}</h1></div>
                            <div className='icons'>
                                <div className='icon rating yellow'><span>{place.rating ? place.rating : "N/A"}</span><h2>Rating</h2></div>
                                <div className='icon review orange'><span>{place.num_reviews ? place.num_reviews : "N/A"}</span><h2>Review Amount</h2></div>
                                <div className='icon blue'><span>#{place.ranking_position ? place.ranking_position : "N/A"}</span><h2>Ranking</h2></div>
                                <div className='icon green'><span>YES</span><h2>is open</h2></div>
                            </div>
                            <div className='details'>
                                <InfoArray place={place}/>
                            </div>
                            <div className='desc'>
                                <h2>About</h2>
                                <p className='pdd'>{place.description}</p>
                            </div>
                        </div>
                    </div>    
            </section>
        </div>
        <ReviewsContainer/>
        <EmailSect isImprovement={true} place={place}/>
        <ServicesButton/>
        <ActivitiesButton/>
        <FeaturedSection collection={cityCollection} subString={isRest ? "Restaurants" : "Things"} subCollection={isRest ? cityCollection.Restaurants : cityCollection.Attractions}/>
        <CardArray cityCollection={cityCollection} twoColumn={false} headerString={isRest ? "Other Restaurants in" : "Other Things in"} rests={isRest}/>
        <FeaturedSection collection={cityCollection} subString={!isRest ? "Restaurants" : "Things"} subCollection={!isRest ? cityCollection.Restaurants : cityCollection.Attractions}/>
        <CardArray cityCollection={cityCollection} twoColumn={false} headerString={!isRest ? "Other Restaurants in" : "Other Things in"} rests={!isRest}/>
        <BackButton/>
    </div>
    </>
  )

  const {helmet} = helmetData.context
}

export default PlaceDetails