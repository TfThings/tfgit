import React from 'react'
import {FaStar} from 'react-icons/fa'
import assets from '../assets'
import {Link} from "react-router-dom";
import { Helmet } from 'react-helmet-async'; 
import './Card.css'

const Card = ({place, setPlace, subCollection, index, setCity, cityName, twoColumn}) => {

    const handleClick = () => {
        // console.log("INDEX " + index)
        
        {setPlace(index)}
        
        {setCity(cityName)}
        
    }
    
    // if(!place){return}
    // if(place.location_id == "34230"){return}
    // if(!place.photo) {return}
    // if(place.description == "") {return}

    const datString ="-c:"+cityName+"-s:"+subCollection+"-i:"+index

    return(
        <div className='card'>
            <a className='soe' href={"/things/"+cityName+"/"+place.name+place.address}>{place.name} is one of the best things in {cityName} Learn more Here {place.description}</a>
            <Link onClick={handleClick} to={"/things/"+cityName+"/"+place.name+place.address+"="+datString}>
            {/* <Helmet prioritizeSeoTags>
                <title>{place.name} Best Things in Florida</title>
                <meta name="description" content={place.description}/>
            </Helmet> */}
            <div className='header'>
                <img src={place.photo ? place.photo.images.large.url : assets.capeCoral1} alt="kfwfw"/>
                <div className={twoColumn ? 'ribbon4Two' : 'ribbon4'}>#{place.ranking_position}/{place.ranking_denominator}</div>
                <div className={twoColumn ? 'ratingCircletwoColumn' : 'ratingCircle'}><span><FaStar/></span><h1>{place.rating}</h1></div>
            </div>
            <h1 className='title'>{place.name}</h1>
            <div className='footer'> </div>
            </Link>
        </div>
    )
}

export default Card