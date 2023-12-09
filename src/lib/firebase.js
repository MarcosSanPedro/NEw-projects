// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_GET_YOUR_PARK_NAME,
    projectId: import.meta.env.VITE_GET_YOUR_PARK_NAME,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGIN_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signInUser = async (email, password) => {
    if (!email && !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signUpUser = async (email, password) => {
    if (!email && !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const userStateListener = (callback) => {
    return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);
