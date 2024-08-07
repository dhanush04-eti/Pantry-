// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLXot9rmQIcR19U17ip3C3ewDMQqhw",
  authDomain: "management-app-92167.firebaseapp.com",
  projectId: "management-app-92167",
  storageBucket: "management-app-92167.appspot.com",
  messagingSenderId: "51176015721",
  appId: "1:51176015721:web:f3c1b0e11ad47d36119ff8",
  measurementId: "G-Q6ZQ7J4GHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
