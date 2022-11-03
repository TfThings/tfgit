import React from 'react'
import './Activities.css'
import assets from '../assets'

const ActivityHolder = ({subCollection}) => {
    return(
        <div>
            <div className='ash' onClick={() => GoToExternalSite()}>
                <img src={process.env.PUBLIC_URL + "/bannerImages/car-rental-01.jpg"} alt="Image Here"/>
                <h1 className='ashH'>Full Throttle Exotic Rentals</h1>
            </div>
            <div className='ashb'>
            <a className='botash' href='https://www.fullthrottlexotics.com/contact' target="_blank" rel="noreferrer noopener"><button className='' >Rent a Car</button></a>
            </div>
        </div>
    )
}

const GoToExternalSite = () => {
    window.location.href = 'https://www.fullthrottlexotics.com/contact'
    console.log("YES")
}

const Activities = () => {
  return (
    <div>
        <div className='apHeader'><h1>Activities</h1><img src={process.env.PUBLIC_URL + "/bannerImages/fortMyersBeachBanner.jpg"} alt="kfrjk"/></div>
        <div className='arholder'>
            <ul className='arow'>
                <ActivityHolder/>
            </ul>
        </div>
    </div>
  )
}

export default Activities