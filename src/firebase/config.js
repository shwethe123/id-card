import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBC19tfWfWXnicL_3DerD44p1brft9QWoc",
  authDomain: "message-form-3031e.firebaseapp.com",
  projectId: "message-form-3031e",
  storageBucket: "message-form-3031e.appspot.com",
  messagingSenderId: "184429279604",
  appId: "1:184429279604:web:bb9b926e17712d06c7d421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
