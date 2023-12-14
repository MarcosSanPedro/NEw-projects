// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
	getAuth,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY,
	authDomain: import.meta.env.VITE_AUTHDOMAIN,
	databaseURL: import.meta.env.VITE_GETYOURPARKNAME,
	projectId: import.meta.env.VITE_GETYOURPARKNAME,
	storageBucket: import.meta.env.VITE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGINSENDERID,
	appId: import.meta.env.VITE_APPID,
	measurementId: import.meta.env.VITE_MEASUREMENTID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export const signInUser = async (email, password) => {
	if (!email && !password) return

	return await signInWithEmailAndPassword(auth, email, password)
}

export const signUpUser = async (email, password) => {
	if (!email && !password) return

	return await createUserWithEmailAndPassword(auth, email, password)
}

export const userStateListener = (callback) => {
	return onAuthStateChanged(auth, callback)
}

export const SignOutUser = async () => await signOut(auth)
