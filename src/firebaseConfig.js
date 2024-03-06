import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCPU6iUtqO6O059v8uIGHaH8UcOe7qzVgs",
    authDomain: "trendyfy-24.firebaseapp.com",
    projectId: "trendyfy-24",
    storageBucket: "trendyfy-24.appspot.com",
    messagingSenderId: "1061903602481",
    appId: "1:1061903602481:web:787a2cb72989d03b375610"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)