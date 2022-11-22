import React, {useState} from 'react'
import {HiHeart, HiOutlineHeart} from 'react-icons/hi'
import {RiChat1Line} from 'react-icons/ri'
import './PostHolder.css'
import { HandleEdit } from './FirebaseUtils'
import CommentInputHolder from './CommentInputHolder'
import { useEffect } from 'react'
import { db } from './Firebase'
import { collection, query, orderBy, getDocs, onSnapshot } from 'firebase/firestore'
import {IoIosArrowDropdownCircle, IoIosArrowDropup} from 'react-icons/io'

const PostHolder = (props) => {

    var {text, id, likes, image, createdAt} = props.post.data()

    const [nlikes, setLikes] = useState(likes)

    const [liked, setLike] = useState(false)

    const [comments, setComments] = useState([])

    const [sentLike, setSentLike] = useState(false)

    const [seeMore, setSeeMore] = useState(false)
    useEffect(() => {
        onSnapshot(
            query(
                collection(db, 'posts', props.post.id, 'comments'), orderBy('createdAt', 'desc')), (snapshot) => setComments(snapshot.docs)
        )
    },[db])

    // var sentLike = false

    const LikePost = () =>{

        const newLikes = likes += 1
        setLike(!liked)
        setLikes(newLikes)

        if(!sentLike)
        {
            console.log("LIKED")

            HandleEdit(props.post, newLikes)

            setSentLike(true)
        }
    }

//     <div className='pihc'>
//     {!image ? (<></>) : (<img src={image} alt="PostImageHere"/>)}
// </div>

  return (
    <li className='lpc'>
        <div className='phc'>
            {!image ? (<></>) : (<img src={image} alt="PostImageHere"/>)}
            <div className='ptch'>
                <p className='pht'>{text}</p>
            </div>
            <div className='slc'>
                <div className='lbc'>
                    <h2 className='lc'>{String(nlikes)}</h2>
                    <button className='lbh' onClick={() => LikePost()}><span className={liked ? 'red' : 'notLiked'}>{liked ? <HiHeart/> : <HiOutlineHeart/>}</span></button>
                </div>
                <div className='psmd' onClick={() => {setSeeMore(!seeMore)}}>
                <h3>{seeMore ? 'See Less' : 'See More'} Details</h3>
                <span className='mdi'>{seeMore ? <IoIosArrowDropup/> : <IoIosArrowDropdownCircle/>}</span>
                </div>
                <div className='pcb'>
                    <p>{comments.length > 0 ? comments.length : '0'}</p>
                    <span><RiChat1Line/></span>
                </div>
            </div>
        </div>
        <div className={seeMore ? 'pdhc' : 'pdhc hidden'}>
            <p className='rhd'>{createdAt != null ? 'Posted: ' + new Date(createdAt.seconds * 1000).toLocaleDateString("en-US") : 'Just Now'}</p> 
            <div>Location</div>
            <div className='pdh'>
                <h3 className='pdt'>About The Event</h3>
                <p className='pdb'>Come and meet everyone downtown this will be a great event and everyone will have a great time! Bring snacks drinks whatever you want! Party all night long and have a good time!</p>
            </div>
        </div>
        <div>
            <div className='pch'>
                <h3>Comments</h3>
                    {comments.length > 0 ? (
                        <div className='pcc'>
                            {comments.map((comment) => (
                                <p className='pci' key={comment.id}>{comment.data().comment}</p>
                            ))}
                        </div>
                    ): <h2>no comments yet</h2>}
            </div>
            <div>
                <CommentInputHolder post={props.post}/>
            </div>
        </div>
    </li>
  )
}

export default PostHolder