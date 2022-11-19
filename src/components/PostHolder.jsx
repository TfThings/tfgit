import React, {useState} from 'react'
import {BsFillHeartFill} from 'react-icons/bs'
import './PostHolder.css'
import { HandleEdit } from './FirebaseUtils'

const PostHolder = (props) => {

    var {text, id, createdAt, likes} = props.post.data()

    console.log(likes)

    const [nlikes, setLikes] = useState(likes)

    const [liked, setLike] = useState(false)

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
        <p className='pht'>{text}</p>
        <div className='slc'>
            <h2 className='lc'>{String(nlikes)}</h2>
            <button className='lbh' onClick={() => LikePost()}><span className={liked ? 'red' : 'notLiked'}><BsFillHeartFill/></span></button>
        </div>
        {/* <p>{createdAt}</p> */}
    </li>
  )
}

export default PostHolder