console.log(`Connected!`);
// tìm hiểu về Firebase
// https://firebase.google.com/

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

import {
    getFirestore, collection, getDocs, addDoc, doc, deleteDoc,
    updateDoc, query, where,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

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
            console.log(doc.id + " ", doc.data());
        });
    } catch (error) {
        console.log(error);
    }
}
// readData();

// ----lesson6----

// add data into fireStore
let addAccount = {
    email: "tesst1231231@gmail.com",
    password: "asbcas"
}
let addData = async (account) => {
    try {
        const docRef = await addDoc(collection(db, "accounts"), account);
        console.log("Document written with data: ", docRef);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
// addData(addAccount);

// delete data
let deleteData = async (IdAccount) => {
    try {
        await deleteDoc(doc(db, "accounts", IdAccount));
        console.log(`Delete successful!`);
        readData();
    } catch (error) {
        console.log(error);
    }
}
// deleteData('yOECZdBoExgmwzoHijjO');

// update data

let fieldUpdate = {
    email: "Naruto@konoha.com",
    password: "daylaupdate"
}
let updateData = async (IdAccount, fieldUpdate) => {
    try {
        const accountRef = doc(db, "accounts", IdAccount);
        await updateDoc(accountRef, fieldUpdate);
    } catch (error) {
        console.log(error);
    }
}
// updateData('Bs8egbcILnwMfwKHq6CD',fieldUpdate);

// find data with query Where: truy vấn điều kiện | ứng dụng -> lọc dữ liệu
// đối với mệnh đề Where -> thường dùng cho việc lọc chính xác tuyệt đối
let filterData = async (fieldFilter, condition) => {
    try {
        const q = query(collection(db, "accounts"), where(fieldFilter, "==", condition));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.log(error);
    }
}
filterData('email', 'Naruto@konoha.com');

// Bài 1: tạo 1 form thêm tài khoản với firestore, kiểm tra email đã tồn tại
// nếu đã tồn tại -> hiển thị ra màn hình thông báo: Email đã tồn tại
// ngược lại -> thêm vào trong firestore

// Bài 2: tạo 1 form hiển thị các email đã đăng ký
// có ô input tìm kiếm, hiển thị email trùng với email tìm kiếm tại form