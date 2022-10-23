import React from 'react'
import './Thingstodo.css'
import SearchHeader from './SearchHeader'
import FortMyersAll from '../StoredJsons/FortMyersAll.json'
import CapeCoralAll from '../StoredJsons/CapeCoralAll.json'
import NaplesAll from '../StoredJsons/NaplesAll.json'
import EsteroAll from '../StoredJsons/EsteroAll.json'
import CardArray from './CardArray'
import {Helmet, HelmetData} from 'react-helmet-async'


const helmetData = new HelmetData({})

const Thingstodo = ({setPlace, setCity}) => {
    return (
    <div className='thingsmain'>
        <Helmet helmetData={helmetData} prioritizeSeoTags>
            <title>Find the Best Things to do in Florida</title>
            <meta name="description" content="Find The Best Things To Do in all of Florida with the best hand picked collection for you. Find The Best Things in Fort Myers, Naples, Cape Coral, Estero and More."/>
            <link rel="canonical" hreflang="en" href="https://www.thingsflorida.com" />
            <link rel="alternate" hreflang="en" href="https://www.thingsflorida.com"/>
            <meta name="keywords" content="Florida, Top Things, To Do, Fort Myers, Naples, Cape Coral, Estero, Fort Myers Beach"/>
            <meta name='og:title' content="Find the Best Things to do in Florida"/>
            <meta name='og:type' content="website"/>
            <meta name='og:url' content="https://www.thingsflorida.com"/>
            <meta name='og:image' content="https://www.thingsflorida.com/bannerimages/fortMyersBeachBanner.jpg"/>
            <meta name='og:desc' content="Find The Best Things To Do in all of Florida with the best hand picked collection for you. Find The Best Things in Fort Myers, Naples, Cape Coral, Estero and More."/>
        </Helmet>
        <SearchHeader/>
        <div className='contents'>
            <CardArray cityCollection={FortMyersAll} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Things in" link={true}/>
            <CardArray cityCollection={FortMyersAll} rests={true} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Restaurants in" link={true}/>
            {/* <CardArray cityCollection={FortMyersBeachAll} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Things in" link={true}/> */}
            <CardArray cityCollection={CapeCoralAll} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Things in" link={true}/>
            <CardArray cityCollection={CapeCoralAll} rests={true} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Restaurants in" link={true}/>
            <CardArray cityCollection={NaplesAll} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Things in" link={true}/>
            <CardArray cityCollection={NaplesAll} rests={true} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Restaurants in" link={true}/>
            <CardArray cityCollection={EsteroAll} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Things in" link={true}/>  
            <CardArray cityCollection={EsteroAll} rests={true} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Restaurants in" link={true}/>       
        </div>
    </div>
  )
  const {helmet} = helmetData.context
}

export default Thingstodo