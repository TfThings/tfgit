import React, {useState} from 'react'
import { db } from './Firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import StarArray from './StarArray'
import './ReviewInput.css'
const ReviewInput = ({placeName}) => {

    const [rComment, setRComment] = useState('')

    const [rating, setRating] = useState(0)

    const [loading, setLoading] = useState(false)

    const [sentReview, didSendReview] = useState(false)

    const SubmitReview = async (e) => {
        e.preventDefault()

        if(sentReview) {return}

        if(rating === 0) {return}

        if(loading){return}

        setLoading(true)

        const reviewToSend = rComment
        const uRating = rating

        await addDoc(collection(db, 'places', placeName, 'reviews'),{
            review: reviewToSend,
            rating: uRating,
            createdAt: serverTimestamp()
        }).then((docRef) => {
            didSendReview(true)
            console.log("Sent Review!")
        })

        setLoading(false)
        setRating(0)
        setRComment('')

        e.target.reset()
    }

  return (
    <div className='ric'>
        <h2>Leave A Review!</h2>
        <div className='risa'>
        <StarArray exportRating={setRating}/>
        </div>
        <form className='rif' onSubmit={(event) => {SubmitReview(event)}}>
            <input className='rfi' type='text' placeholder='Leave a review here then press send...' onChange={(e) => setRComment(e.target.value)} required/>
            <button className='rfb' type="submit">Post Review</button>
        </form>
    </div>
  )
}

export default ReviewInput