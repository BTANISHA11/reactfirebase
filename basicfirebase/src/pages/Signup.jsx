import React , {useState} from 'react';
import { getAuth , createUserWithEmailAndPassword,
     GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {app} from '../firebase';

const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider()
const SignupPage=() =>{
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const createUser=() => {
createUserWithEmailAndPassword(auth , email , password).then((value)=>
alert("sucess"));
    }

    const signupWithGoogle=() =>{
        signInWithPopup(auth, googleProvider)
    }
    return (
        <div className='signup-page'>
        <label>Email</label>
        <input onChange={e=>setEmail(e.target.value)} 
        value={email}  
        type='email'
        required 
        placeholder='Enter your email here'/>
        <label>Password</label>
        <input onChange={e=>setPassword(e.target.value)}
        value={password}
         type='password' 
         required 
         placeholder='Enter your password here'/>

         <br/>
         <button onClick={signupWithGoogle}>Sign in with Google</button>
        <button onClick={createUser}>Signup</button>
        </div>

    )
}

export default SignupPage;