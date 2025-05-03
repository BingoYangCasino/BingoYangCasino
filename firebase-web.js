import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, push, set, onValue, remove } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyA9jE8fu9UPZI-7UBx_Gy00cqYgmuY-ASs",
    authDomain: "bingo-yangg.firebaseapp.com",
    databaseURL: "https://bingo-yangg-default-rtdb.firebaseio.com",
    projectId: "bingo-yangg",
    storageBucket: "bingo-yangg.appspot.com",
    messagingSenderId: "978098281950",
    appId: "1:978098281950:web:3ec7eab66e2e486012114f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export {
    database,
    ref,
    push,
    set,
    onValue,
    remove
};
