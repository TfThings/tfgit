import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets'
import { Helmet } from 'react-helmet-async'
import './FeatureCard.css'

const FeaturedCard = ({place, setPlace, setCity, cityName, index, subCollection}) => {
    
    const handleClick = () => {
        
        {setPlace(index)}
        {setCity(cityName)}
    }

    // const HMet = () => {
    //     return(
    //         <Helmet prioritizeSeoTags>
    //             <title>{place.name}</title>
    //             <meta name="description" content={place.description}/>
    //         </Helmet>
    //     )
    // }
  
    const datString ="-c:"+cityName+"-s:"+subCollection+"-i:"+index
  
    return (
    <div className='featurecard'>
       <a className='soe' href={"/things/"+cityName+"/"+place.name+place.address}>{place.name} is one of the best things in {cityName} Learn more Here {place.description}</a>
            <Link onClick={handleClick} to={"/things/"+cityName+"/"+place.name+place.address+"="+datString}>
            <img src={place.photo ? place.photo.images.large.url : assets.capeCoral1} alt="kfwfw"/>
            <h1 className='title'>{place.name}</h1>
            <div className='footer'> </div>
            </Link>
        </div>
  )
}

export default FeaturedCard