import React, {useState} from 'react'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import {db} from './Firebase'
import {v4 as uuid} from 'uuid'
import './PostInput.css'

const PostInput = () => {

    const [id, setid] = useState('')

    const [pText, setPText] = useState('')

    const [imageFile, setImage] = useState(null)

    const submitPost = (e) => {
        e.preventDefault()
        
        const ps = collection(db, "posts")

            addDoc(ps, {
                id: uuid(),
                text: pText,
                likes:0,
                createdAt: serverTimestamp()
            }).then((docRef) => {
                alert("DATA SUBMITTED")
            }).catch((error) => {
                console.error("ERROR SUBMITTING POST")
            })

        setid('')
        setPText('')

        e.target.reset()
    }

  return (
    <div className='pic'>
        <form className='picf' onSubmit={(event) => {submitPost(event)}}>
            <label className='ptt'>Create Post</label>
            <input className='pti' type='text' name='title' placeholder='Leave a message here then press send...' onChange={(e) => setPText(e.target.value)} required/>
            {/* <input type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])} /> */}
            <button className='pbs' type="submit">Post</button>
        </form>
    </div>
  )
}

export default PostInput