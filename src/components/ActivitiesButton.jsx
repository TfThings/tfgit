import React from 'react'
import {Link} from "react-router-dom";

const ActivitiesButton = () => {
  return (
    <Link to='/activities'>
    <div className='hed scale'>
        <img src={process.env.PUBLIC_URL + "/bannerImages/fortMyersBeachBanner.jpg"} alt="Photogoeshere"/>
        <div className='hd'>
            <h2 className='cr'>Now Showing</h2>
            <h1 className='cer'>Lee County Activities</h1>
        </div>
        <button className='bsb'>View Activities</button>
    </div>
    </Link>
  )
}

export default ActivitiesButton