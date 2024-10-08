import React , {useState} from 'react';
import { getAuth , signInWithEmailAndPassword} from "firebase/auth";
import {app} from '../firebase';

const auth=getAuth(app);
const SigninPage=() =>{
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const signinUser=() => {
signInWithEmailAndPassword(auth , email , password).then((value)=>
console.log("Sign in success"))
.catch((error)=> console.log(error));
    }
    return (
        <div className='signin-page'>
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
        <button onClick={signinUser}>Signin</button>
        </div>

    )
}

export default SigninPage;