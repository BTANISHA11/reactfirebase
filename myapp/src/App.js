import {useState} from 'react';
import {useFirebase} from './context/Firebase'
import './App.css';

function App() {
  const firebase=useFirebase();
  console.log('Firebase', firebase)
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

const putDataNew=() => {
  // firebase.putData("root/a/b", {id:1});
  firebase.putData("grandfater/father/child", {id:1, name:'Tanisha',age:21, });
}

  return (
    <div className="App">
      <h1>Firebase</h1>
      <input onChange={e=>setEmail(e.target.value)} 
        value={email}  
        type='email'
        required 
        placeholder='Enter your email here'/>
        <input onChange={e=>setPassword(e.target.value)} 
        value={password}  
        type='password'
        required 
        placeholder='Enter your password here'/>
      <button onClick={() =>{
        firebase.signUpUserWithEmailAndPassword
        (email,password);
        firebase.putData("users/" + "tanishabansal", {email,password});
      } }>Signup
      </button>
      <button onClick={putDataNew}>Trigger</button>
    </div>
  );
}

export default App;
