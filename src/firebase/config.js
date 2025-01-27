// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvTVzKXpYpIYzHmhljJSxGngYQ1ULbzU4",
  authDomain: "vuckoblog.firebaseapp.com",
  projectId: "vuckoblog",
  storageBucket: "vuckoblog.firebasestorage.app",
  messagingSenderId: "675996037593",
  appId: "1:675996037593:web:10be7b45e02ddf807d69c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Inicijalizacija Firestore-a
const projectFirestore = getFirestore(app);

// Eksportuj timestamp funkciju
export { projectFirestore, serverTimestamp };
