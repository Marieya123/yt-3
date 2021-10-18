import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyAOzGZe78mlbYaeXseY40pws5TCe4xfK2s",
   authDomain: "clone-c4a54.firebaseapp.com",
   projectId: "clone-c4a54",
   storageBucket: "clone-c4a54.appspot.com",
   messagingSenderId: "1010922886506",
   appId: "1:1010922886506:web:bf0e3069e50936d016c113",
   measurementId: "G-JVDTZCMJRK"
 };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()