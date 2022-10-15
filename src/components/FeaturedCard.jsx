import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets'
import './FeatureCard.css'

const FeaturedCard = ({place, setPlace, setCity, cityName, index, subCollection}) => {
    
    const handleClick = () => {
        const ob = {subCollection: subCollection, placeIndex:index}
        {setPlace(ob)}
        {setCity(cityName)}
        localStorage.setItem("placeToShowData", JSON.stringify(ob))
        localStorage.setItem("cityToShowString", cityName)
    }
  
    return (
    <div className='featurecard'>
            <Link onClick={handleClick} to={"/things/"+place.address_obj.city+"/"+place.name+place.address}>
            <img src={place.photo ? place.photo.images.large.url : assets.capeCoral1} alt="kfwfw"/>
            <h1 className='title'>{place.name}</h1>
            <div className='footer'> </div>
            </Link>
        </div>
  )
}

export default FeaturedCard