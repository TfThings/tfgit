import React, {useEffect} from 'react'
import './CityDetails.css'
import FeaturedSection from './FeaturedSection'
import CardArray from './CardArray'

const CityDetails = ({cityCollection, setPlace, setCity}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const cityName = cityCollection.Attractions[0].city_name

  return (
    <div className='citymain'>
        <div className='pageHeader'><h1>{cityName}</h1><img src={`${cityCollection.Attractions[0].banner_Image}`} alt="kfrjk"/></div>
        <div className='contents'>
            <FeaturedSection collection={cityCollection} subString="Things" subCollection={cityCollection.Attractions} setPlace={setPlace} setCity={setCity}/>
            <CardArray cityCollection={cityCollection} twoColumn={true} setPlace={setPlace} setCity={setCity} rests={false} headerString="Top Things in"/>
            <FeaturedSection collection={cityCollection} subString="Restaurants" subCollection={cityCollection.Restaurants} setPlace={setPlace} setCity={setCity}/>
            <CardArray cityCollection={cityCollection} twoColumn={true} setPlace={setPlace} setCity={setCity} rests={true} headerString="Top Restaurants in"/>
        </div>
    </div>
  )
}

export default CityDetails