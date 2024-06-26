import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBxkkUt-yMV2kS-F6G0CePAz_MmL8M1wrA",
    authDomain: "serrarpg-641a1.firebaseapp.com",
    projectId: "serrarpg-641a1",
    storageBucket: "serrarpg-641a1.appspot.com",
    messagingSenderId: "22266535662",
    appId: "1:22266535662:web:3e2a90d630bf24f4329dff",
    measurementId: "G-EFLRWW24C4"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };