// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChQHS2gG7MBF40Vyc6jJB1eKzCVYfiF7M",
    authDomain: "proyectoreact-e56c9.firebaseapp.com",
    projectId: "proyectoreact-e56c9",
    storageBucket: "proyectoreact-e56c9.appspot.com",
    messagingSenderId: "1084293664685",
    appId: "1:1084293664685:web:e2a7c699ab207f63a19b24",
    measurementId: "G-NGY28BZXWE"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app);