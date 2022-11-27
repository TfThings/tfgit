import React from 'react'
import {Navbar, Footer} from "./index"
import {useEffect} from 'react';
import ReactGA from 'react-ga4'
import Router from './Router'
import MobileNavBar from './MobileNavBar'
ReactGA.initialize('G-ZMDTVMWFRY')
const Manager = () => {

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: JSON.stringify(window.location.pathname + window.location.search)});
    })

    return (
        <>
        <Navbar/>
        <Router/>
        <Footer/>
        <MobileNavBar/>
        </>
    )
}

export default Manager