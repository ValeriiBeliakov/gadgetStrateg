// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUEpUbJ1OS-UfT3DukccKkitrtyeT2Qb4",
  authDomain: "gadgetstrateg.firebaseapp.com",
  projectId: "gadgetstrateg",
  storageBucket: "gadgetstrateg.appspot.com",
  messagingSenderId: "747265673435",
  appId: "1:747265673435:web:c515b98d21a57b2b00e4fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
