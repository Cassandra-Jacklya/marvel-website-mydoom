// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAdP8xCLb_-4WZCLb40RXV9IqN1cfzXOuA",

  authDomain: "marvel-webapp-react.firebaseapp.com",

  databaseURL:
    "https://marvel-webapp-react-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "marvel-webapp-react",

  storageBucket: "marvel-webapp-react.appspot.com",

  messagingSenderId: "687162562303",

  appId: "1:687162562303:web:f53c1bb1c0ef7596f39eca",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
