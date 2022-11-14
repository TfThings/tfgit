import FeaturedCard from "./FeaturedCard";
import React from 'react'
import './FeaturedSection.css'

const FeaturedSection = ({subCollection, subString}) => {
  return (
    <div className='container featured'>
        <div className='headerfeatured'>Featured {subString} in {subCollection[0].city_name}</div>
            <ul className='boxlist'>
                <FeaturedCard place={subCollection[subCollection[0].FeaturedIndex0]} index={subCollection[0].FeaturedIndex0} cityName={subCollection[0].city_name} subCollection={subCollection[0].collection_type} collectionPName={subCollection[0].collectionParentName}/>
                <FeaturedCard place={subCollection[subCollection[0].FeaturedIndex1]} index={subCollection[0].FeaturedIndex1} cityName={subCollection[0].city_name} subCollection={subCollection[0].collection_type} collectionPName={subCollection[0].collectionParentName}/>
                <FeaturedCard place={subCollection[subCollection[0].FeaturedIndex2]} index={subCollection[0].FeaturedIndex2} cityName={subCollection[0].city_name} subCollection={subCollection[0].collection_type} collectionPName={subCollection[0].collectionParentName}/>
                <FeaturedCard place={subCollection[subCollection[0].FeaturedIndex3]} index={subCollection[0].FeaturedIndex3} cityName={subCollection[0].city_name} subCollection={subCollection[0].collection_type} collectionPName={subCollection[0].collectionParentName}/>
            </ul>
            <div className="bbl"></div>
    </div>
  )
}

export default FeaturedSection