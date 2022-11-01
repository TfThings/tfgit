import React from 'react'
import './ServiceDetails.css'
import InfoArray from './InfoArray'
import StarReview from './StarReview'
import EmailSect from './EmailSect'
import {Helmet, HelmetData} from 'react-helmet-async'
import BackButton from './BackButton'

const ServiceDetails = ({place}) => {

  const soeTitle = place.name + " Lee County | View Services, Reviews, Number and More"
  const soeDesc = "Get Services, Hours, Reviews and More about " + place.name + ". Hand Picked For You " + place.name + " is part of the list of best services in Lee County, View more Best Lee County Services Here."
  const soeLoc = "https://www.thingsflorida.com" + window.location.pathname
  const soeKeys = place.name + ", " + "LeeCounty, " + "Services, Roofing, Top Services, Best Services, reviews, hours"

  const helmetData = new HelmetData({})

  const SelfUpdate = () => {
    window.scrollTo(0,0)
  }

  return (
    <>
      {SelfUpdate()}
      <div className='cr'>
        <Helmet helmetData={helmetData} prioritizeSeoTags>
            <title>{soeTitle}</title>
            <meta name="description" content={soeDesc}/>
            <link rel="canonical" hreflang="en" href={soeLoc}/>
            <link rel="alternate" hreflang="en" href={soeLoc}/>
            <meta name="keywords" content={soeKeys}/>
            <meta name='og:title' content={soeTitle}/>
            <meta name='og:type' content="website"/>
            <meta name='og:url' content={soeLoc}/>
            <meta name='og:image' content={place.photo.images.large.url}/>
            <meta name='og:desc' content={place.description}/>
        </Helmet>
        <div className='ime'>
          <img src={place.photo.images.large.url} alt="lkrgelrm"/>
        </div>
        <div className='abC'>
          <div className='he'><h1>{place.name}</h1></div>
          <div className='srS'>
            <StarReview rating={place.rating} count={place.num_reviews}/>
            <h2>{place.age}</h2>
          </div>
          <h1 className='serT'>Services</h1>
          <div className='sI'>
          {place.services.map((ser, i) => {
            return(
              <div className='sr' key={i}>
                <h2>{ser.name}</h2>
              </div>
              )
                })}
          </div>
          <div className='dec'>
            <h1>About The Company</h1>
            <h2>{place.description}</h2>
          </div>
          <div className='det'>
            <InfoArray place={place}/>
          </div>
          <div className='bb'>
          <button><a href={place.contact_website} target="_blank" rel="noreferrer noopener">
            <h2>HIRE</h2>
            </a></button>
          </div>
        </div>
        <EmailSect isImprovement={true} place={place}/>
        <BackButton/>
      </div>
    </>
  )
  const {helmet} = helmetData.context
}

export default ServiceDetails