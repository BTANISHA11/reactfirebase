import {getFirestore, collection, addDoc} from "firebase/firestore"
import {app} from "./firebase";
import './App.css';

const firestore=getFirestore(app);
function App() {
  const writeData=async()=>{
    const result=await addDoc(collection(firestore, "cities"),{
      name: "delhi",
      pinCode:1234,
      lat:123,
      long:456,
    })
    console.log("Result", result)
  }

  const makeSubCollection=async()=>{
    await addDoc (collection (firestore, 'cities/5J3iWzKLsn5QZlx9LHJv/places'
  ))}
  return (
    <div className="App">
      <h1>Firebase Firestore</h1>
      <button onClick={writeData}>Put Data</button>
    </div>
  );
}

export default App;
