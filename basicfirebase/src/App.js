// import { getDatabase, ref, set } from 'firebase/database';
import { app } from './firebase';
import { useEffect, useState } from 'react';
//import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import './App.css';
import {getAuth , onAuthStateChanged, signOut} from "firebase/auth";
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';

// const db = getDatabase(app);
const auth =getAuth(app)

function App() {
  const [user, setUser]=useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log('Hello', user);
      } else {
        console.log('User is signed out');
        setUser(null);
      }
    });
  }, []);

  if(user===null){
    return (
      <div className="App">
      <SignupPage/>
      <SigninPage/>
      </div>
  );
}
  
  return (
    <div className="App">
    <h1>Welcome {user.email}</h1>
    <button onClick={()=> signOut(auth)}>Logout</button>
 </div>
 
  );
}

export default App;
