import React, {useEffect} from 'react'
import './CityDetails.css'
import FeaturedSection from './FeaturedSection'
import CardArray from './CardArray'
import ServicesButton from './ServicesButton'
import {Helmet, HelmetData} from 'react-helmet-async'

const helmetData = new HelmetData({})

const CityDetails = ({cityCollection}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const cityName = cityCollection.Attractions[0].city_name

      const soeTitle = "Find All the Best Things to do in " + cityName + ", Restaurants, Activities and More"
      const soeDesc = "Find The Best Things To Do in all of " + cityName + " all hand picked for you. Get Directions, Reviews, Phone Number and more about your favorite local places."
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
            <meta name='og:description' content={soeDesc}/>
        </Helmet>
        <div className='pageHeader'><h1>{cityName}</h1><img src={`${cityCollection.Attractions[0].banner_Image}`} alt="kfrjk"/></div>
        <div className='contents'>
            <ServicesButton/>
            <FeaturedSection collection={cityCollection} subString="Things" subCollection={cityCollection.Attractions}/>
            <CardArray cityCollection={cityCollection} twoColumn={true} rests={false} headerString="Top Things in"/>
            <FeaturedSection collection={cityCollection} subString="Restaurants" subCollection={cityCollection.Restaurants}/>
            <CardArray cityCollection={cityCollection} twoColumn={true} rests={true} headerString="Top Restaurants in"/>
        </div>
    </div>
  )

  const {helmet} = helmetData.context
}

export default CityDetails