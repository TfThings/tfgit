import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets'
import './FeatureCard.css'

const FeaturedCard = ({place, setPlace, setCity, cityName, index, subCollection}) => {
    
    const handleClick = () => {
        
        {setPlace(index)}
        {setCity(cityName)}
    }
  
    const datString ="-c:"+cityName+"-s:"+subCollection+"-i:"+index
    // console.log("SET FEATURE " + index + " " + cityName + " " + subCollection + " " + place.address + " " + datString)
    return (
    <div className='featurecard'>
            <Link onClick={handleClick} to={"/things/"+cityName+"/"+place.name+place.address+"="+datString}>
            <img src={place.photo ? place.photo.images.large.url : assets.capeCoral1} alt="kfwfw"/>
            <h1 className='title'>{place.name}</h1>
            <div className='footer'> </div>
            </Link>
        </div>
  )
}

export default FeaturedCard