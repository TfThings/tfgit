import React, {useState} from 'react'
import {BsFillHeartFill, BsHeart} from 'react-icons/bs'
import {RiChat1Line} from 'react-icons/ri'
import './PostHolder.css'
import { HandleEdit } from './FirebaseUtils'
import CommentInputHolder from './CommentInputHolder'
import { useEffect } from 'react'
import { db } from './Firebase'
import { collection, query, orderBy, getDocs, onSnapshot } from 'firebase/firestore'

const PostHolder = (props) => {

    var {text, id, createdAt, likes, image} = props.post.data()

    const [nlikes, setLikes] = useState(likes)

    const [liked, setLike] = useState(false)

    const [comments, setComments] = useState([])

    useEffect(() => {
        onSnapshot(
            query(
                collection(db, 'posts', props.post.id, 'comments'), orderBy('createdAt', 'desc')), (snapshot) => setComments(snapshot.docs)
        )
    },[db])

    var sentLike = false

    const LikePost = () =>{

        const newLikes = likes += 1
        setLike(!liked)
        setLikes(newLikes)

        if(!sentLike)
        {
            console.log("LIKED")

            HandleEdit(props.post, newLikes)

            sentLike = true
        }
    }

  return (
    <li className='phc'>
        <div className='pihc'>
            {!image ? (<></>) : (<img src={image} alt="PostImageHere"/>)}
        </div>
        <p className='pht'>{text}</p>
        <div className='slc'>
            <div className='lbc'>
                <h2 className='lc'>{String(nlikes)}</h2>
                <button className='lbh' onClick={() => LikePost()}><span className={liked ? 'red' : 'notLiked'}>{liked ? <BsFillHeartFill/> : <BsHeart/>}</span></button>
            </div>
            <div className='pcb'>{comments.length > 0 ? comments.length : '0'}<RiChat1Line/></div>
        </div>
        <div className='pch'>
                {comments.length > 0 ? (
                    <div>
                        {comments.map((comment) => (
                            <p key={comment.id}>{comment.data().comment}</p>
                        ))}
                    </div>
                ): <h2>no comments yet</h2>}
        </div>
        <div>
            <CommentInputHolder post={props.post}/>
        </div>
    </li>
  )
}

export default PostHolder