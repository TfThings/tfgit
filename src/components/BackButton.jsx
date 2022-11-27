import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BackButton.css'
import {BiArrowBack} from 'react-icons/bi'
import { GetUserVisits } from './GlobVars'
const BackButton = () => {

const navigate = useNavigate()

const CheckBack = () => {

  window.scrollTo(0, 0)
  if(GetUserVisits() >= 3)
  {
    navigate(-1)
  }else{
    navigate("/")
  }
}

  return (
    <div className='bbh'>
        <button onClick={() => CheckBack()} className='bbis'><span><BiArrowBack/></span><h2>Back</h2></button>
    </div>
  )
}

export default BackButton