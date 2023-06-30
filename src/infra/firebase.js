import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa-g9xaU1pSQCVfximZkMPviQkVgAuX4g",
  authDomain: "crud-ff170.firebaseapp.com",
  projectId: "crud-ff170",
  storageBucket: "crud-ff170.appspot.com",
  messagingSenderId: "512370672095",
  appId: "1:512370672095:web:af7f641e85abafeaa4046a"
};

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);