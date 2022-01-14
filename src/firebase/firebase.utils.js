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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
             console.log("error creating user", error.message)
        }
    }

    return userRef

    console.log(snapShot)
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase