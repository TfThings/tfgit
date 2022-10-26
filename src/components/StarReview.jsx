import React from 'react'
import {FaStar} from 'react-icons/fa'
import './StarReview.css'

const StarReview = ({rating, count}) => {
  return (
    <div>
        <div className='strs'>
            <h2>{rating}</h2>
            {[...Array(5)].map((star, i) => {
                return <FaStar key={i} className={i < rating ? "yel" : "clear"}/>
            })}
            <h3>| {count} Reviews</h3>
        </div>
    </div>
  )
}

export default StarReview