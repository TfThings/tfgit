import React from 'react'
import call from 'react-native-phone-call'
import {Link} from "react-router-dom";
import StarReview from './StarReview';
import './ServiceCard.css'

const ServiceCard = ({place, index, subString}) => {
    const datString ="-"+"Services"+"-"+subString+"-"+index+"-"

    const handleClick = () => {
        // console.log("INDEX " + index)
        // {setPlace(index)}
        // {setCity("Services")}
    }

    const makeCall = (phoneNumber) => {
        const args = {
            number: phoneNumber, // String value with the number to call
            prompt: true, // Optional boolean property. Determines if the user should be prompted prior to the call 
            skipCanOpen: true // Skip the canOpenURL check
        }
        call(args).catch(console.error)
        console.log("CALLING " + phoneNumber)
    }

    return(
    <div className='sCard'>
        <div className='ribbon4'>{place.name}</div>
        <Link onClick={handleClick} to={"/services/"+place.name+"?"+datString}>
            <img className='im' src={place.photo.images.large.url} alt="PhotoWasHere"/>
        </Link>
        <h2 className='ag'>{place.age}</h2>
        <div className='sag'><StarReview rating={place.rating} count={place.num_reviews}/></div>
        <ul className='ics'>
            {place.services.map((ser, i) => {
                return(
                    <li className='ser' key={i}>
                        <h2>{ser.name}</h2>
                    </li>
                )
            })}
            {/* <ul className='ic rating yellow'><span>{place.rating}</span><h1>Rating</h1></ul>
            <ul className='ic review orange'><span>{place.num_reviews}</span><h1>Review Amount</h1></ul>
            <ul className='ic blue'><span>#{place.ranking_position}</span><h1>Ranking</h1></ul>
            <ul className='ic green'><span>YES</span><h1>is open</h1></ul> */}
        </ul>
        <div className='bLow'>
            <button onClick={() => makeCall(place.phone)} className='lCon'>Call Business</button>
            <Link className='lMore' onClick={handleClick} to={"/services/"+place.name+"?"+datString}><button className='lMore'>Learn More</button></Link>
        </div>
    </div>
    )
}

export default ServiceCard