import React, {useState, useEffect} from 'react'
import {FaStar, FaRegStarHalf} from 'react-icons/fa' 
import './StarArray.css'

const StarArray = ({sRating, exportRating, newAvg}) => {

    let [rating, setRating] = useState(sRating)

    if(newAvg != null){rating = newAvg}

    const HandleRating = (nRating) =>{
        setRating(nRating)
        exportRating(nRating)
    }

  return (
    <div>
        {newAvg != null ? <span className='lrrc'><h3 className='lrar'>{newAvg}</h3><FaStar className='lrbs'/></span> : <></>}
    {/* {newAvg != null ? <h3 className='saa'>{newAvg}</h3> : <></>} */}
        <div className={newAvg == null ? exportRating == null ? 'sah srl sred' : 'sah srl strans' : 'sah stl sred'}>
            {[...Array(5)].map((star ,i) => {
                {return exportRating ? 
                (<FaStar key={i} className={i < rating ? "sas yel" : "sas clear"} onClick={() => HandleRating(i + 1)}/>) 
                :
                (<FaStar key={i} className={i < rating ? "sas yel" : "sas clear"}/>)}
        })}
        </div>
    </div>
  )
}

export default StarArray