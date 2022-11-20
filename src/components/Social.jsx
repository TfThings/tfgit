import React from 'react'
import {collection, getDocs, orderBy, query, onSnapshot} from 'firebase/firestore'
import { useEffect, useState} from 'react'
import {db} from './Firebase'
import PostInput from './PostInput'
import PostHolder from './PostHolder'
import './Social.css'

const Social = () => {

      const [posts, setPosts] = useState()

      useEffect(() => {
        onSnapshot(
            query(
                collection(db, 'posts'), orderBy('createdAt', 'desc')), (snapshot) => setPosts(snapshot.docs)
        )
        console.log(posts + " Posts Changed")
    },[db])

    async function GetPosts(){
        const postsCol = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
        const postsSnapshot = await getDocs(postsCol)
        const postList = postsSnapshot.docs.map(doc => doc)
        setPosts(postList)
        console.log(postList)
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