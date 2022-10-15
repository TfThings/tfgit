import FeaturedCard from "./FeaturedCard";
import React from 'react'
import './FeaturedSection.css'

const FeaturedSection = ({setPlace, setCity, subCollection, subString}) => {
  return (
    <div className='container featured'>
        <div className='headerfeatured'>Featured {subString} in {subCollection[0].city_name}</div>
            <ul className='boxlist'>
                <FeaturedCard place={subCollection[subCollection[0].FeaturedIndex0]} setPlace={setPlace} setCity={setCity} index={subCollection[0].FeaturedIndex0} cityName={subCollection[0].city_name} subCollection={subCollection[0].collection_type}/>
                <FeaturedCard place={subCollection[subCollection[0].FeaturedIndex1]} setPlace={setPlace} setCity={setCity} index={subCollection[0].FeaturedIndex1} cityName={subCollection[0].city_name} subCollection={subCollection[0].collection_type}/>
                <FeaturedCard place={subCollection[subCollection[0].FeaturedIndex2]} setPlace={setPlace} setCity={setCity} index={subCollection[0].FeaturedIndex2} cityName={subCollection[0].city_name} subCollection={subCollection[0].collection_type}/>
                <FeaturedCard place={subCollection[subCollection[0].FeaturedIndex3]} setPlace={setPlace} setCity={setCity} index={subCollection[0].FeaturedIndex3} cityName={subCollection[0].city_name} subCollection={subCollection[0].collection_type}/>
            </ul>
    </div>
  )
}

export default FeaturedSection