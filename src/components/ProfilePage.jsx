import React, {useEffect, useState} from 'react'
import { collection, onSnapshot, query, orderBy, getDoc, doc } from 'firebase/firestore'
import { db } from './Firebase'
const ProfilePage = () => {

    const [userPlaces, setPlaces] = useState(null)

    useEffect(() => {
        GetUserDetails()    
    },[db])

    const GetUserDetails = async () => {
         await getDoc(doc(db, 'users', 'user0')).then((newDoc) => { setPlaces(newDoc.data())
            // if(docSnap.exists())
            // {
            //     setPlaces(docSnap.data())
            // }
        })
    }

  return (
    <div>
        {console.log(userPlaces)}
        <p>Profile information : Contains name, id, [places]</p>
        <p>business page listings : Get id of place to display</p>
        {/* <Card place={place} subCollection={rests ? "Restaurants" : "Attractions"} cityName={cityName} collectionPName={cityCollection.Attractions[0].collectionParentName} index= {i}/> */}
        <p>event listings : Store creator id on event then get</p>
        <p>ad listings</p>

    </div>
  )
}

export default ProfilePage