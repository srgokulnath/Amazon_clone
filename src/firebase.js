// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq1KS_ur5sE-lMYODZPx3EG2n62jHBR78",
  authDomain: "clone-5b535.firebaseapp.com",
  projectId: "clone-5b535",
  storageBucket: "clone-5b535.appspot.com",
  messagingSenderId: "184248492337",
  appId: "1:184248492337:web:434222b4db8c0378ee1010",
  measurementId: "G-SRTYDT1T01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const auth = getAuth();
auth.languageCode = 'it';
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});
export default getFirestore();
export {provider};