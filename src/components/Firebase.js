import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
        apiKey: "AIzaSyAQm9hOlmsIozGLypvYFMTeuZibIx9PVrE",
        authDomain: "tffirebase-570c2.firebaseapp.com",
        projectId: "tffirebase-570c2",
        storageBucket: "tffirebase-570c2.appspot.com",
        messagingSenderId: "264783787474",
        appId: "1:264783787474:web:65baf56e0f2292f7be440b"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      export const db = getFirestore(app);

      export const storage = getStorage(app);

