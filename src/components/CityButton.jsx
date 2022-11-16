import React from 'react'
import { Link } from 'react-router-dom'
import './CityButton.css'

const CityButton = ({cityCollection}) => {
  return (
    <Link to={"/things/-"+cityCollection.Attractions[0].collectionParentName}>
    <div className='cbc'>
        <img className='cbi' src={`${cityCollection.Attractions[0].banner_Image}`} alt="CityButtonPhoto"/>
        <div className='cbtc'>
            <h2 className='cbt'>{cityCollection.Attractions[0].city_name}</h2>
            <h2 className='cbbt'>Things</h2>
        </div>
        <button className='cbbb'>View All Things in {cityCollection.Attractions[0].city_name}</button>
    </div>
    </Link>
  )
}

export default CityButton