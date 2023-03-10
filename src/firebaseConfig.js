// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaeyuNrTlbdWr7dQ6FBtH-BhavtOG6Kl0",
  authDomain: "proyecto-react-1221a.firebaseapp.com",
  projectId: "proyecto-react-1221a",
  storageBucket: "proyecto-react-1221a.appspot.com",
  messagingSenderId: "194654353989",
  appId: "1:194654353989:web:ba5492981bd301c025012c"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;