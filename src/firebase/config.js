import {initializeApp} from "firebase/app";

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBir4qouGN-PNClkHqEE_9J0NvT23oaa8k",
  authDomain: "benature-56a7b.firebaseapp.com",
  projectId: "benature-56a7b",
  storageBucket: "benature-56a7b.appspot.com",
  messagingSenderId: "320398630415",
  appId: "1:320398630415:web:8b5c072df59c03dc4b4d7a"
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};