import React, { useState} from 'react'
import './Services.css'
import FortMyersBus from '../StoredJsons/FortMyersBus.json'
import StarReview from './StarReview'
import {Link} from "react-router-dom";
import {Helmet, HelmetData} from 'react-helmet-async'
import ServiceCard from './ServiceCard';

const Services = () => {

    const soeTitle = "Lee County Top 10 For Each Service | View Reviews, Services, Number and More"
    const soeDesc = "Get Services, Hours, Reviews and More About the Best Service Companies in Lee County. From Roofing, Pool, Exterior, Fence, Lanai, and More All Hand Picked For You."
    const soeLoc = "https://www.thingsflorida.com" + window.location.pathname
    const soeKeys = "LeeCounty, Services, Roofing, Company, Top Services, Best Services, Fencing, Pool, Lanai"

    const helmetData = new HelmetData({})

    const [menuOpen, setOpen] = useState(0)

    const ServiceHolder = ({subCollection, index}) => {
        return(
            <div className='shd'>
                <div className='shit' onClick={() => setOpen(menuOpen == index ? 0 : index)}>
                    <img src={subCollection[0].banner_Image} alt="Image Here"/>
                    <h1 className='sht'>{subCollection[0].collection_type}</h1>
                </div>
                <div className={`sdm ${index == menuOpen ? 'active' : 'inactive'}`}>
                    <ul className='sdmu'>
                    {(subCollection).slice(1 ,10).map((place, i) => {
                        if(place.contact_website && menuOpen == index)
                        {
                        return(
                            <ServiceCard place={place} index={i + 1} subString={subCollection[0].collection_type} key={i}/>
                        )
                        }
                    })}
                    <button className='sdbb' onClick={() => setOpen(menuOpen == index ? 0 : index)}>
                        {menuOpen == index ? "Show Less" : "View Companies"}</button>
                    </ul>
                </div>
            </div>
        )
    }

  return (
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
                <ServiceHolder subCollection={FortMyersBus.Roofing} index={1}/>
                <ServiceHolder subCollection={FortMyersBus.Fencing} index={2}/>
                <ServiceHolder subCollection={FortMyersBus.Poolcage} index={3}/>
                <ServiceHolder subCollection={FortMyersBus.PoolCleaning} index={4}/>
            </ul>
        </div>
    </div>
  )
  const {helmet} = helmetData.context
  
}

export default Services