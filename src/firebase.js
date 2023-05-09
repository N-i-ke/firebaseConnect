import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_aaRiZnTeBp3wj-VRVNLwnPOJS38xifo",
  authDomain: "fir-connect-deeec.firebaseapp.com",
  projectId: "fir-connect-deeec",
  storageBucket: "fir-connect-deeec.appspot.com",
  messagingSenderId: "945507677912",
  appId: "1:945507677912:web:f002fe2198674b631209ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const DB = getFirestore(app);

//App.js使う
export default DB

