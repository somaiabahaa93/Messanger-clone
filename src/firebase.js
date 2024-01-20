// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';




const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCGvhvvGdDMXkY2endgkxyDdJmtxMMppVg",
    authDomain: "messanger-clone-96a48.firebaseapp.com",
    projectId: "messanger-clone-96a48",
    storageBucket: "messanger-clone-96a48.appspot.com",
    messagingSenderId: "648940092539",
    appId: "1:648940092539:web:bbfb2cb899eadfacd336de",
    measurementId: "G-0K739N8G1D"
})

const db = firebaseApp.firestore()

export default db