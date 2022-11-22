import React from 'react'
import './ServiceDetails.css'
import InfoArray from './InfoArray'
import StarReview from './StarReview'
import EmailSect from './EmailSect'
import {Helmet, HelmetData} from 'react-helmet-async'
import BackButton from './BackButton'
import ReviewsContainer from './ReviewsContainer'

const ServiceDetails = ({place}) => {

  const soeTitle = place.name + " Lee County | Best Services, Reviews, Number and More"
  const soeDesc = place.name + " | Office Address " + place.address + " | Phone Number " + place.phone + " | Learn More and see other Qualified Services in Lee County all hand picked for you."
  // const soeDesc = place.name + "Lee County Get Services, Numbers, Reviews, and More. "  + place.address + "Hand Picked list of all Best Services in Lee County for you, View more Best Lee County Services Here."
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
            <meta name='og:desc' content={soeDesc}/>
            <meta name='og:description' content={soeDesc}/>
        </Helmet>
        <div className='ime'>
          <img src={place.photo.images.large.url} alt="PhotoGoesHere"/>
        </div>
        <div className='abC'>
          <div className='ribbon4'><h1>{place.name}</h1></div>
          <div className='srS'>
            <div className='sdsr'><StarReview rating={place.rating} count={place.num_reviews}/></div>
            <h2 className='sda'>{place.age}</h2>
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
            <h2 className='sdd'>{place.description}</h2>
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
        <ReviewsContainer placeName={place.name}/>
        <EmailSect isImprovement={true} place={place}/>
        <BackButton/>
      </div>
    </>
  )
  const {helmet} = helmetData.context
}

export default ServiceDetails