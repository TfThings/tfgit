import React from 'react'
import {collection, getDocs, orderBy, query} from 'firebase/firestore'
import { useEffect, useState, useRef } from 'react'
import {db} from './Firebase'
import PostInput from './PostInput'
import './Social.css'

const Social = () => {

      const [posts, setPosts] = useState()

      useEffect(() => {
        GetPosts()
        console.log(posts + " Posts Changed")
    },[db])

    async function GetPosts(){
        const postsCol = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
        const postsSnapshot = await getDocs(postsCol)
        const postList = postsSnapshot.docs.map(doc => doc.data())
        setPosts(postList)
        console.log(postList)
    }

    const PostHolder = (props) => {
        const {title, id, createdAt} = props.post
        return(
            <li className='phc'>
                <p className='pht'>{title}</p>
                {/* <p>{createdAt}</p> */}
            </li>
        )
    }

  return (
   <div className='sc'>
        <h2 className='sht'>What's Going On?</h2>
        <div className='spic'>
            <PostInput/>
        </div>
        <div className='sfc'>
            <ul className='sfl'>
                {posts && posts.map(post => <PostHolder key={post.id} post={post}/>)}
            </ul>
        </div>
    </div>
    
  )
}

export default Social