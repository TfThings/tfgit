import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets'
import './FeatureCard.css'

const FeaturedCard = ({place, cityName, index, subCollection}) => {
    
    const datString ="-c:"+cityName+"-s:"+subCollection+"-i:"+index
  
    return (
    <div className='featurecard'>
       {/* <a className='soe' href={"/things/"+cityName+"/"+place.name+place.address}>{place.name} is one of the best things in {cityName} Learn more Here {place.description}</a> */}
            <Link to={"/things/"+cityName+"/"+place.name+"?"+datString}>
            <img src={place.photo ? place.photo.images.large.url : assets.capeCoral1} alt="kfwfw"/>
            <h1 className='title'>{place.name}</h1>
            <div className='footer'> </div>
            </Link>
        </div>
  )
}

export default FeaturedCard