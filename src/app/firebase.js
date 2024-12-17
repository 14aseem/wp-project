// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCJCUYdNTbfWlsJoJ2SdXqU66B3pt_Mfy8",
    authDomain: "art-emporium.firebaseapp.com",
    projectId: "art-emporium",
    storageBucket: "art-emporium.firebasestorage.app",
    messagingSenderId: "822138878845",
    appId: "1:822138878845:web:ee8616d9b5fc09a4daaa14",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, };
export {db} ; // Export Firestore


