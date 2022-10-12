// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDocs, collection, deleteDoc,
 setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { //database constants; apikey, authdomain, projectId, appId, etc
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

const ref = collection(db, 'countries')

console.log(getDocs(ref));

getDocs(ref)
    .then((snapshot) => {
        let countries = [];
        snapshot.docs.forEach((doc) => {
          countries.push({ ...doc.data()})
        })
        console.log(countries) //displays documents when the page was loaded
    })


document.getElementById("add").addEventListener('click', (e) => {
  let name = document.getElementById("doc").value
  let data = { name: name, field1: document.getElementById("field1").value, field2: document.getElementById("field2").value}
  let docum = doc(db, 'countries', name)
  setDoc(docum, data)
  .then(() => {
    console.log("Document has been added/modified successfully");
  })
  .catch(error => {
    console.log(error);
  })
})
document.getElementById("del").addEventListener('click', (e) => {
  let name = document.getElementById("deldoc").value
  let docum = doc(db, 'countries', name)
  deleteDoc(docum)
  .then(() => {
    console.log("Document has been deleted successfully");
  })
  .catch(error => {
    console.log(error);
  })
})
document.getElementById("check").addEventListener('click', (e) => {
    getDocs(ref)
    .then((snapshot) => {
        let countries = [];
        snapshot.docs.forEach((doc) => {
          countries.push({ ...doc.data()})
        })
        console.log(countries)
    })
  
})