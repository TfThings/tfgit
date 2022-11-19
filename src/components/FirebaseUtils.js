import React from "react"
import { collection, addDoc, setDoc, doc, getDoc, updateDoc } from "firebase/firestore"
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