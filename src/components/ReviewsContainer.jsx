import React, {useEffect, useState} from 'react'
import ReviewInput from './ReviewInput'
import './ReviewsContainer.css'
import { db } from './Firebase'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import StarArray from './StarArray'
const ReviewsContainer = ({placeName}) => {

    const [reviews, setReviews] = useState(null)
    const [avgReview, setAvgReview] = useState(0)

    useEffect(() => {
        onSnapshot(
            query(
                collection(db, 'places', placeName, 'reviews'), orderBy('createdAt', 'desc')), 
                (snapshot) => setReviews(snapshot.docs)
        )
        // console.log("Reviews Changed " + reviews)
        
    },[db, window.location.pathname])

    useEffect(() => {
        if(reviews){CalcAvgReview()}
    },[reviews])
    

    const CalcAvgReview = () =>{

        if(reviews.length == 0){setAvgReview(0) 
            return}

        let newA = 0
        let newR = 0
        reviews.map((review) => {
            newR += review.data().rating
        } )
        newA = newR / reviews.length
        
         setAvgReview(newA)

        //  console.log("CALCING " + newR + " " + newA)
    }

    const ReviewsHolder = () => {
       return(
        <li className='rhl'>
            {reviews.map((review, i) => ( 
            <ul key={i} className='rhrc'>
                <p className='rhd'>{review.data().createdAt != null ? new Date(review.data().createdAt.seconds * 1000).toLocaleDateString("en-US") : 'Just Now'}</p>
                <p className='rhr'>{review.data().review}</p>
                <StarArray sRating={review.data().rating}/>
            </ul>
        ))}
        </li>
       )
    }

    // if(!isNaN(reviews)){setReviews(null)}

  return (
    <div className='rc'>
        <div className='rcmc'>
            <div className='rsc'>
                <div><StarArray newAvg={avgReview}/></div>
                <h2 className='rct'>Reviews From Locals</h2>
                <div className='rcrc'>
                    {isNaN(reviews) ? <ReviewsHolder/> : <h2>No Reviews Yet... Be the First One!</h2>}
                </div>
            </div>
            <div className='rci'>
                <ReviewInput placeName={placeName}/>
            </div>
        </div>
    </div>
  )
}

export default ReviewsContainer