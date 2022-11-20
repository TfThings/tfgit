import React from "react"
import { collection, addDoc, setDoc, doc, getDoc, updateDoc, query, getDocs, orderBy } from "firebase/firestore"
import { db } from "./Firebase"

export const HandleEdit = async (post, newlikes) => {
    // const {text, id, createdAt, likes} = props.post.data()
    console.log("SENT LIKE " + post.id + " " + newlikes);
        // const docRef = doc(db, 'posts', props.id)
        
        // const payload = {id:props.id, text: props.text, likes:newlikes, createdAt:props.createdAt}

        await updateDoc(doc(db, 'posts', post.id),{
            likes:newlikes
        })
}

export const GetComments = async (post) => {
    const commentCol = query(collection(db, 'posts', post.id, 'comments'), orderBy('createdAt', 'desc'))
    const commentSnapshot = await getDocs(commentCol)
    const commentList = commentSnapshot.docs
    console.log("GET COMMENTS " + commentList.length)
    return commentList
    // setComments(commentList)
    // console.log(postList)
}