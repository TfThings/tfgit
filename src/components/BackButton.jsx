import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BackButton.css'
import {BiArrowBack} from 'react-icons/bi'
const BackButton = () => {

const navigate = useNavigate()

  return (
    <div className='bbh'>
        <button onClick={() => navigate(-1)} className='bbis'><span><BiArrowBack/></span><h2>Back</h2></button>
    </div>
  )
}

export default BackButton