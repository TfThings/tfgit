import React from 'react'
import {FaStar} from 'react-icons/fa'
import assets from '../assets'
import {Link} from "react-router-dom";
import './Card.css'

const Card = ({place, subCollection, index, cityName, collectionPName, spin}) => {
    
    // if(!place){return}
    // if(place.location_id == "34230"){return}
    // if(!place.photo) {return}
    // if(place.description == "") {return}

    const datString ="-"+collectionPName+"-"+subCollection+"-"+index+"-"

    return(
        <div className={spin ? "card spin" : "card"}>
            <Link to={"/things/"+collectionPName+"/"+place.name+"?"+datString}>
            {/* <Helmet prioritizeSeoTags>
                <title>{place.name} Best Things in Florida</title>
                <meta name="description" content={place.description}/>
            </Helmet> */}
            <div className='header'>
                <img src={place.photo.images.medium ? place.photo.images.medium.url : place.photo.images.large.url} alt="kfwfw"/>
                <div className='ribbon4 rRating'>#{place.ranking_position}/{place.ranking_denominator}</div>
                <div className='ratingCircle'><span><FaStar/></span><h2>{place.rating}</h2></div>
            </div>
            <h2 className='ribbon4 rTitle'>{place.name}</h2>
            <div className='footer'> </div>
            </Link>
        </div>
    )
}

export default Card