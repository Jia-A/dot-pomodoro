import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB_HgdelGCjDgeo0cMbMhntrVoYOQA4_8c",
  authDomain: "dot-pomodoro-67f79.firebaseapp.com",
  projectId: "dot-pomodoro-67f79",
  storageBucket: "dot-pomodoro-67f79.appspot.com",
  messagingSenderId: "596843751553",
  appId: "1:596843751553:web:373207b74a8650a0fc0580",
  measurementId: "G-1Y5S4LZ7PN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);