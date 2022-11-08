import React from 'react'
import './ShowcaseCard.css'

const ShowcaseCard = () => {

    const GoToExternalSite = () => {
        window.location.href = 'https://www.fullthrottlexotics.com/contact'
        console.log("YES")
    }

  return (

    <div className='scc' onClick={() => GoToExternalSite()}>
            <img src={process.env.PUBLIC_URL + "/bannerImages/car-rental-01.jpg"} alt="Photogoeshere"/>
            <div className='scn'>
                <h2 className=''>Full Throttle</h2>
                <h1 className=''>Exoitic Rentals</h1>
            </div>
            <button className='bba'>Rent a Car Now</button>
        </div>
  )
}

export default ShowcaseCard