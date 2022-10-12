// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFHq56SEDG1bRcgcukM3e-r4ALKPbeVBE",
  authDomain: "test-9c720.firebaseapp.com",
  projectId: "test-9c720",
  storageBucket: "test-9c720.appspot.com",
  messagingSenderId: "713410910480",
  appId: "1:713410910480:web:6c9835d45ad2f6180aed95",
  measurementId: "G-171SJR0VCD"
};
// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

const ref = collection(db, 'Questions')

console.log(ref);

getDocs(ref)
    .then((snapshot) => {
        console.log(snapshot.docs);
    })