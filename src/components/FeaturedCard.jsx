import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets'
import './FeatureCard.css'

const FeaturedCard = ({place, cityName, index, subCollection, collectionPName}) => {
    
    const datString ="-"+collectionPName+"-"+subCollection+"-"+index+"-"
  
    return (
    <div className='featurecard'>
       {/* <a className='soe' href={"/things/"+cityName+"/"+place.name+place.address}>{place.name} is one of the best things in {cityName} Learn more Here {place.description}</a> */}
            <Link to={"/things/"+collectionPName+"/"+place.name+"?"+datString}>
            <img src={place.photo ? place.photo.images.large.url : assets.capeCoral1} alt="Photo Goes Here"/>
            <h2 className='title'>{place.name}</h2>
            <div className='footer'> </div>
            </Link>
        </div>
  )
}

export default FeaturedCard