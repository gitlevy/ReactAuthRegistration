import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp({

  // Your web app's Firebase configuration
    apiKey: "AIzaSyA8uDocQuJW-LdKZUbIcxceN9Gt9jU5X8k",
    authDomain: "auth-react-2c2f6.firebaseapp.com",
    projectId: "auth-react-2c2f6",
    storageBucket: "auth-react-2c2f6.appspot.com",
    messagingSenderId: "218113398314",
    appId: "1:218113398314:web:c3f0226ec4ee42ebdfd553"
})

export const auth = firebaseConfig.auth()

export default firebaseConfig