import React from 'react'
import './Thingstodo.css'
import SearchHeader from './SearchHeader'
import FortMyersAll from '../StoredJsons/FortMyersAll.json'
import CapeCoralAll from '../StoredJsons/CapeCoralAll.json'
import NaplesAll from '../StoredJsons/NaplesAll.json'
import EsteroAll from '../StoredJsons/EsteroAll.json'
import CardArray from './CardArray'
import {Helmet, HelmetData} from 'react-helmet-async'
import ServicesButton from './ServicesButton'
import ActivitiesButton from './ActivitiesButton'
import ShowcaseCard from './ShowcaseCard'
import CityButton from './CityButton'


const helmetData = new HelmetData({})

const Thingstodo = () => {
    return (
    <div className='thingsmain'>
        <Helmet helmetData={helmetData} prioritizeSeoTags>
            <title>Find All The Best Things To Do Near You in Florida</title>
            <meta name="description" content="Find The Best Things To Do in all of Florida with the best hand picked collection for you. Find The Best Things in Fort Myers, Naples, Cape Coral, Estero and More."/>
            <link rel="canonical" hreflang="en" href="https://www.thingsflorida.com" />
            <link rel="alternate" hreflang="en" href="https://www.thingsflorida.com"/>
            <meta name="keywords" content="Florida, Top Things, To Do, Fort Myers, Naples, Cape Coral, Estero, Fort Myers Beach"/>
            <meta name='og:title' content="Find the Best Top 15 Things to do in Florida Near You"/>
            <meta name='og:type' content="website"/>
            <meta name='og:url' content="https://www.thingsflorida.com"/>
            <meta name='og:image' content="https://www.thingsflorida.com/bannerimages/fortMyersBeachBanner.jpg"/>
            <meta name='og:desc' content="Find The Best Things To Do in all of Florida with the best hand picked collection for you. Find The Best Things in Fort Myers, Naples, Cape Coral, Estero and More."/>
            <meta name='og:description' content="Find The Best Things To Do in all of Florida with the best hand picked collection for you. Find The Best Things in Fort Myers, Naples, Cape Coral, Estero and More."/>
        </Helmet>
        <SearchHeader/>
        <div className='contents'>
            {/* <ShowcaseCard/> */}
            <ServicesButton/>
            <ActivitiesButton/>
            <CityButton cityCollection={FortMyersAll}/>
            <CityButton cityCollection={CapeCoralAll}/>
            <CityButton cityCollection={NaplesAll}/>
            <CityButton cityCollection={EsteroAll}/>
            {/* <CardArray cityCollection={FortMyersAll} twoColumn={false} headerString="Top Things in" link={true}/>
            <CardArray cityCollection={FortMyersAll} rests={true} twoColumn={false} headerString="Top Restaurants in" link={true}/>
            <CardArray cityCollection={CapeCoralAll} twoColumn={false} headerString="Top Things in" link={true}/>
            <CardArray cityCollection={CapeCoralAll} rests={true} twoColumn={false} headerString="Top Restaurants in" link={true}/>
            <CardArray cityCollection={NaplesAll} twoColumn={false} headerString="Top Things in" link={true}/>
            <CardArray cityCollection={NaplesAll} rests={true} twoColumn={false} headerString="Top Restaurants in" link={true}/>
            <CardArray cityCollection={EsteroAll} twoColumn={false} headerString="Top Things in" link={true}/>  
            <CardArray cityCollection={EsteroAll} rests={true} twoColumn={false} headerString="Top Restaurants in" link={true}/>  */}

            {/* <CardArray cityCollection={FortMyersBeachAll} twoColumn={false} headerString="Top Things in" link={true}/> */}      
        </div>
    </div>
  )
  const {helmet} = helmetData.context
}

export default Thingstodo