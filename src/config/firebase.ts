// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAOGWi0egb8xk_IqiqeT-ov89U6Ayvip54',
  authDomain: 'ibigwave-faf91.firebaseapp.com',
  projectId: 'ibigwave-faf91',
  storageBucket: 'ibigwave-faf91.appspot.com',
  messagingSenderId: '490098510390',
  appId: '1:490098510390:web:351a496078226deef0e697',
  measurementId: 'G-XB5J3Y23XY',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const fire = getFirestore(app)
export const auth = getAuth(app)
