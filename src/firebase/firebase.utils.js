import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyDbc1KPMpy2dglb1mYqCIgQl5J-n-Nqeqw",
    authDomain: "crown-clothing-db-8f8d2.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-8f8d2.firebaseio.com",
    projectId: "crown-clothing-db-8f8d2",
    storageBucket: "crown-clothing-db-8f8d2.appspot.com",
    messagingSenderId: "801415234388",
    appId: "1:801415234388:web:a1da31f6bc8a31aee57ec1",
    measurementId: "G-G8DQT8VGSM"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

