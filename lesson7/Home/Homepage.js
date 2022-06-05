
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

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
// Init auth
const auth = getAuth(app);
if (localStorage.getItem('keepLogin') == "false") {
    window.location.assign('../index.html');
}

let btnSignOut = document.querySelector('button');
btnSignOut.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert('Sign-out successful.');
        window.location.assign('../index.html');
        localStorage.setItem("keepLogin", false);
    }).catch((error) => {
        // An error happened.
    });
})