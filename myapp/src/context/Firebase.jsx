import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDHDvnBt4D5fFJWJRCQjwKNc0aU8DkfNg0",
    authDomain: "app-fd28d.firebaseapp.com",
     databaseURL:"https://app-fd28d-default-rtdb.firebaseio.com/",
    projectId: "app-fd28d",
    storageBucket: "app-fd28d.appspot.com",
    messagingSenderId: "116918435555",
    appId: "1:116918435555:web:d4292fddd7d0566a0c8fd6",
    measurementId: "G-M35EBEEQFC",
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

// Create a context for Firebase
const FirebaseContext = createContext(null);

// Custom hook to use the Firebase context
export const useFirebase = () => useContext(FirebaseContext);

// Firebase provider component
export const FirebaseProvider = ({ children }) => {
  const signUpUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const logInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const putData = (key, data) => set(ref(database, key), data);

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        logInWithEmailAndPassword,
        putData
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};