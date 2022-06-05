
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

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
const provider = new GoogleAuthProvider();
localStorage.setItem("keepLogin", false);
// DOM btn 
let btnSignIn = document.querySelector('button');
btnSignIn.addEventListener('click', (e) => {
    console.log('hello world');
    signInWithPopup(auth, provider)
        .then((result) => {

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            console.log('token: ', token);
            const user = result.user;
            console.log('This is user ', user);
            window.location.assign('./Home/Homepage.html')
            localStorage.setItem("keepLogin", true);
        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;

            const email = error.customData.email;

            const credential = GoogleAuthProvider.credentialFromError(error);

        });
})