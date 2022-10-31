import React from 'react'
import './Footer.css'
import "react-icons/fa"
import {FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {IoLogoYoutube} from 'react-icons/io'
import {GiPalmTree} from 'react-icons/gi'
import EmailSect from './EmailSect'
import {Link} from "react-router-dom";
const Footer = () => {

    const company=["About", "How it works","Press", "Support"]
    const cities=["Cape Coral", "Fort Myers", "Naples", "Port Charlotte", "Estero"]
    const community=["Search Things", "Submit a Thing", "Reviews"]
    const things=["Mini Golf", "Boating", "Food", "Air Boat"]

    const Tag = (props) => {
        return(
            <li><a href='#'>{props.name}</a></li>
        )
    }

    const Section = (props) =>{
        return(
            <>
            <div className=''>
            <div className='holder'>{props.title}</div>
                <ul>
                    {props.arr.map(tvalue =>{
                        return <Tag name={tvalue} key={tvalue}/>
                    })} 
                </ul>
                </div>
            </>
        )
    }

  return (
    <div className='footer'>
       <Link to="/contact" className='fli'><button className='bbfooter'>I Don't See My Business Listed</button></Link>
        {/* <EmailSect/> */}
        <footer className='gfooter'>
            <div className='footercontainer'>
                <div className='top'>
                    <div className='nav'>
                        {/* <div className='section'>
                            <Section title='Company' arr={company}/>
                            <Section title='Top Cities' arr={cities}/>
                            <Section title='Things To Do' arr={things}/>
                            <Section title='Community' arr={community}/>
                        </div> */}
                    </div>
                    <div className='connectwith'>
                        <div className='connect'>
                            <h1>CONNECT WITH US</h1>
                            <div className='socials'>
                                <a href='https://www.instagram.com/thingsflorida/?hl=en'><GrInstagram/></a>
                                <a href='https://www.facebook.com/ThingsFlorida'><FaFacebookSquare/></a>
                                <a href='#'><FaTwitterSquare/></a>
                                <a href='#'><IoLogoYoutube/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <h1><span><GiPalmTree/></span>2022 ThingsFlorida, Inc. All rights reserved.</h1>
                    <div className='copy'>
                        {/* <ul>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms of use</a></li>
                            <li><a href='#'>App</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer