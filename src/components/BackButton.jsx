import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BackButton.css'
import {BiArrowBack} from 'react-icons/bi'
const BackButton = () => {

const navigate = useNavigate()

const CheckBack = () => {
  if(navigate(-1))
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