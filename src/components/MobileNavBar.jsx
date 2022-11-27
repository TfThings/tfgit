import React from 'react'
import {HiHome} from "react-icons/hi"
import {MdDesignServices, MdFastfood} from 'react-icons/md'
import {GiPalmTree} from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import './MobileNavBar.css'
const MobileNavBar = () => {

    const navigate = useNavigate()

    const GoToLink =(path) =>{
       navigate(path)
    }

  return (
    <div className='mnbc'>
        <div className='mnbl'>
           <HiHome className='hib' onClick={() => {GoToLink('/')}}/>
           <MdDesignServices className='hib' onClick={() => {GoToLink('/services')}}/>
           <GiPalmTree className='hib' onClick={() => {GoToLink('/')}}/>
           <MdFastfood className='hib re' onClick={() => {GoToLink('/')}}/>
        </div>
    </div>
  )
}

export default MobileNavBar