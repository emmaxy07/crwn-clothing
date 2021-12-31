import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyDXSkPoJMm636mgcEvUlZb50xT5nvW-1mw",
    authDomain: "crwn-db-e96f4.firebaseapp.com",
    projectId: "crwn-db-e96f4",
    storageBucket: "crwn-db-e96f4.appspot.com",
    messagingSenderId: "747586400976",
    appId: "1:747586400976:web:1b726a3a189c01ecd364d5",
    measurementId: "G-P4G3JNZCMS"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase