import React, {useState} from 'react'
import {collection, addDoc, serverTimestamp, updateDoc, doc} from 'firebase/firestore'
import {db, storage} from './Firebase'
import {v4 as uuid} from 'uuid'
import './PostInput.css'
import { async } from '@firebase/util'
import {ref, getDownloadURL, uploadString} from '@firebase/storage'

const PostInput = () => {

    const [id, setid] = useState('')

    const [pText, setPText] = useState('')

    const [imageFile, setSelectedFile] = useState(null)

    const [loading, setLoading] = useState(false)

    const submitPost = async (e) => {
        e.preventDefault()
        
        if(loading){return}

        setLoading(true)

           await addDoc(collection(db, "posts"), {
                id: uuid(),
                text: pText,
                likes:0,
                image: '',
                createdAt: serverTimestamp()
            }).then(async (docRef) => {
                console.log("DATA SUBMITTED " + docRef.id)
                if(imageFile){
                const imageRef = ref(storage, `posts/${docRef.id}/image`)

                 await uploadString(imageRef, imageFile, "data_url").then(async snapshot => {
                const downloadURL = await getDownloadURL(imageRef)

                await updateDoc(doc(db, 'posts', docRef.id),{
                    image: downloadURL
                })
            })
                }
            }).catch((error) => {
                console.error("ERROR SUBMITTING POST " + error)
            })

        setid('')
        setPText('')
        setSelectedFile(null)
        setLoading(false)

        e.target.reset()
    }

    const addImageToPost = (e) => {
        const reader = new FileReader()

        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }

  return (
    <div className='crh'>
        <div className='pic'>
        {imageFile ? (<img src={imageFile} alt='userImage'/>) : (<p>No Image</p>)}
        </div>
        <form className='picf' onSubmit={(event) => {submitPost(event)}}>
            <label className='ptt'>Create Post</label>
            <input className='pti' type='text' name='title' placeholder='Leave a message here then press send...' onChange={(e) => setPText(e.target.value)} required/>
            <input type='file' accept='image/*' onChange={(e) => addImageToPost(e)} />
            <button className='pbs' type="submit">Post</button>
        </form>
    </div>
  )
}

export default PostInput