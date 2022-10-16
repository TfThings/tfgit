import React from 'react'
import {FaStar} from 'react-icons/fa'
import assets from '../assets'
import {Link} from "react-router-dom";
import './Card.css'

const Card = ({place, setPlace, subCollection, index, setCity, cityName, twoColumn}) => {

    const handleClick = () => {
        console.log("INDEX " + index)
        const ob = {subCollection: subCollection, placeIndex:index}
        {setPlace(ob)}
        localStorage.setItem("placeToShowData", JSON.stringify(ob))
        {setCity(cityName)}
        localStorage.setItem("cityToShowString", cityName)
    }
    
    if(!place){return}
    if(place.location_id == "34230"){return}
    if(!place.photo) {return}
    if(place.description == "") {return}

    return(
        <div className='card'>
            <Link onClick={handleClick} to={"/things/"+cityName+"/"+place.name+place.address}>
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

//<Link onClick={handleClick} to={"/things/"+place.name+place.address}>MORE INFO</Link>
//<div className='body'>{place.description ? place.description : "Sadly No Description was given, but it's still probably a great place"}</div>