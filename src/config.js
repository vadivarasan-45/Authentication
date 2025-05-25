import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCc4SHhZOEeU4VTa3NkSCH4Dh7YzOMbWWw",
  authDomain: "bases-1cbf4.firebaseapp.com",
  projectId: "bases-1cbf4",
  storageBucket: "bases-1cbf4.firebasestorage.app",
  messagingSenderId: "847225670566",
  appId: "1:847225670566:web:a76259ba6340f60d711d67",
  measurementId: "G-2TCZ93FYCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth