import React from 'react'
import './Services.css'
import FortMyersBus from '../StoredJsons/FortMyersBus.json'
import StarReview from './StarReview'
import {Link} from "react-router-dom";
import call from 'react-native-phone-call'
import {Helmet, HelmetData} from 'react-helmet-async'

const Services = () => {

    const soeTitle = "Lee County Top 10 Services | View Reviews, Services, Number and More"
    const soeDesc = "Get Services, Hours, Reviews and More About the Best Service Companies in Lee County. From Roofing, Pool, Exterior, Fence, Lanai, and More All Hand Picked For You."
    const soeLoc = "https://www.thingsflorida.com" + window.location.pathname
    const soeKeys = "LeeCounty, Services, Roofing, Company, Top Services, Best Services, reviews, hours"

    const helmetData = new HelmetData({})

    const makeCall = (phoneNumber) => {
        const args = {
            number: phoneNumber, // String value with the number to call
            prompt: true, // Optional boolean property. Determines if the user should be prompted prior to the call 
            skipCanOpen: true // Skip the canOpenURL check
        }
        call(args).catch(console.error)
        console.log("CALLING " + phoneNumber)
    }

    const ServiceCard = ({place, index, setPlace, setCity}) => {

        const datString ="-c:"+"Services"+"-s:"+"Roofing"+"-i:"+index

        const handleClick = () => {
            // console.log("INDEX " + index)
            {setPlace(index)}
            {setCity("Services")}
        }

        return(
        <div className='sCard'>
            <h1 className='t'>{place.name}</h1>
            <img className='im' src={place.photo.images.large.url} alt="PhotoWasHere"/>
            <h2 className='ag'>{place.age}</h2>
            <StarReview rating={place.rating} count={place.num_reviews}/>
            <div className='ics'>
                {place.services.map((ser, i) => {
                    return(
                        <div className='ser' key={i}>
                            <h2>{ser.name}</h2>
                        </div>
                    )
                })}
                {/* <ul className='ic rating yellow'><span>{place.rating}</span><h1>Rating</h1></ul>
                <ul className='ic review orange'><span>{place.num_reviews}</span><h1>Review Amount</h1></ul>
                <ul className='ic blue'><span>#{place.ranking_position}</span><h1>Ranking</h1></ul>
                <ul className='ic green'><span>YES</span><h1>is open</h1></ul> */}
            </div>
            <div className='bLow'>
                <button onClick={() => makeCall(place.phone)} className='lCon'>Call Business</button>
                <Link className='lMore' onClick={handleClick} to={"/services/"+place.name+place.address+"="+datString}><button className='lMore'>Learn More</button></Link>
            </div>
        </div>
        )
    }

  return (
    <>
    <div className='sCon'>
        <Helmet helmetData={helmetData} prioritizeSeoTags>
            <title>{soeTitle}</title>
            <meta name="description" content={soeDesc}/>
            <link rel="canonical" hreflang="en" href={soeLoc}/>
            <link rel="alternate" hreflang="en" href={soeLoc}/>
            <meta name="keywords" content={soeKeys}/>
            <meta name='og:title' content={soeTitle}/>
            <meta name='og:type' content="website"/>
            <meta name='og:url' content={soeLoc}/>
            <meta name='og:image' content={process.env.PUBLIC_URL + "/bannerImages/fortmyers-banner.jpg"}/>
            <meta name='og:desc' content={soeDesc}/>
        </Helmet>
        <div className='pHeader'><h1>Services</h1><img src={process.env.PUBLIC_URL + "/bannerImages/fortmyers-banner.jpg"} alt="kfrjk"/></div>
        <h2 className='st'>Lee County Services</h2>
        <div className='rowHolder'>
            <ul className='row'>
            {(FortMyersBus.Roofing).slice(1 ,10).map((place, i) => {
                return(
                <ServiceCard place={place} index={i + 1} key={i}/>
                )
            })}
            </ul>
        </div>
    </div>
    </>
  )
}

export default Services