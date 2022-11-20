import React, {useState} from 'react'
import { addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { db } from './Firebase'

const CommentInputHolder = ({post}) => {

    const [userComment, setUComment] = useState('')

    const sendComment = async(e) =>{
        e.preventDefault()

        const commentToSend = userComment
        setUComment('')

        await addDoc(collection(db, 'posts', post.id, 'comments'),{
            comment: commentToSend,
            createdAt: serverTimestamp(),
            likes: 0
        })

        console.log("COMMENT Sent! " + post.id)
    }

  return (
    <form>
        <input type='text' value={userComment} onChange={e => setUComment(e.target.value)} placeholder='Add a comment...' required/>
        <button type='submit' onClick={(e) => sendComment(e)}>Post</button>
    </form>
  )
}

export default CommentInputHolder