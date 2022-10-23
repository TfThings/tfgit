import React, {useEffect} from 'react'
import './CityDetails.css'
import FeaturedSection from './FeaturedSection'
import CardArray from './CardArray'
import {Helmet, HelmetData} from 'react-helmet-async'

const helmetData = new HelmetData({})

const CityDetails = ({cityCollection, setPlace, setCity}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const cityName = cityCollection.Attractions[0].city_name

      const soeTitle = "Find the Best Things to do in " + cityName
      const soeDesc = "Find The Best Things To Do in all of " + cityName + " with the best hand picked collection for you. Get Directions, Reviews, Phone Numbers and more about your favorite local places."
      const soeLoc = "https://www.thingsflorida.com" + window.location.pathname
      const soeKeys = cityName + ", " + "Things in, To do, Restaurants, Places, Food"
      const soeImage = "https://www.thingsflorida.com" + cityCollection.Attractions[0].banner_Image
  return (
    <div className='citymain'>
      <Helmet helmetData={helmetData} prioritizeSeoTags>
            <title>{soeTitle}</title>
            <meta name="description" content={soeDesc}/>
            <link rel="canonical" hreflang="en" href={soeLoc}/>
            <link rel="alternate" hreflang="en" href={soeLoc}/>
            <meta name="keywords" content={soeKeys}/>
            <meta name='og:title' content={soeTitle}/>
            <meta name='og:type' content="website"/>
            <meta name='og:url' content={soeLoc}/>
            <meta name='og:image' content={soeImage}/>
            <meta name='og:desc' content={soeDesc}/>
        </Helmet>
        <div className='pageHeader'><h1>{cityName}</h1><img src={`${cityCollection.Attractions[0].banner_Image}`} alt="kfrjk"/></div>
        <div className='contents'>
            <FeaturedSection collection={cityCollection} subString="Things" subCollection={cityCollection.Attractions} setPlace={setPlace} setCity={setCity}/>
            <CardArray cityCollection={cityCollection} twoColumn={true} setPlace={setPlace} setCity={setCity} rests={false} headerString="Top Things in"/>
            <FeaturedSection collection={cityCollection} subString="Restaurants" subCollection={cityCollection.Restaurants} setPlace={setPlace} setCity={setCity}/>
            <CardArray cityCollection={cityCollection} twoColumn={true} setPlace={setPlace} setCity={setCity} rests={true} headerString="Top Restaurants in"/>
        </div>
    </div>
  )

  const {helmet} = helmetData.context
}

export default CityDetails