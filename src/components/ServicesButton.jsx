import React from 'react'
import {Link} from "react-router-dom";
import './ServicesButton.css'

const ServicesButton = () => {
  return (
    <Link to={"/services/"}>
        <div className='hed'>
            <img src={process.env.PUBLIC_URL + "/bannerImages/fortmyers-banner.jpg"} alt="Photogoeshere"/>
            <div className='hd'>
                <h2 className='cr'>Now Showing</h2>
                <h1 className='cer'>Lee County Services</h1>
            </div>
            <button className='bsb'>View Services</button>
        </div>
    </Link>
  )
}

export default ServicesButton