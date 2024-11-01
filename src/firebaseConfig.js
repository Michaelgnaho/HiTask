import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore} from "firebase/firestore"; // Import getDatabase from firebase/database

const firebaseConfig = {
    apiKey: "AIzaSyDHLWe-MeBn-4qrFwbEz9Ha9EyeWLNguCI",
    authDomain: "hitask-3ac16.firebaseapp.com",
    projectId: "hitask-3ac16",
    storageBucket: "hitask-3ac16.appspot.com",
    messagingSenderId: "113113376090",
    appId: "1:113113376090:web:30da801f006d85a393ff63",
    measurementId: "G-2S4BQN84JW",
    databaseURL: "https://hitask-3ac16-default-rtdb.firebaseio.com/" // Add this line
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); // Initialize the database

export { auth, googleProvider, signInWithPopup, db }; // Export db
