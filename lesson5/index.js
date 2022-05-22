console.log(`Connected!`);
// tìm hiểu về Firebase
// https://firebase.google.com/

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc-Pe6bdWcG8w2BAf3X62ByfDpHWJAFxI",
    authDomain: "jsi08-onl.firebaseapp.com",
    projectId: "jsi08-onl",
    storageBucket: "jsi08-onl.appspot.com",
    messagingSenderId: "762489928978",
    appId: "1:762489928978:web:7487cf9dbab6f4641cc7cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let readData = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "accounts"));

        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().password}`);
        });
    } catch (error) {
        console.log(error);
    }
}
readData();

