import {getFirestore, collection, addDoc, doc, getDoc,
   query, where, getDocs, updateDoc} from "firebase/firestore"
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
    await addDoc (collection (firestore, 'cities/5J3iWzKLsn5QZlx9LHJv/places'),{
name:"This is a place",
desc:"Awsm Desc",
date:Date.now(),
  })
}

const getDocument = async () =>{
  const ref= doc(firestore, "cities" , "5J3iWzKLsn5QZlx9LHJv");
  const snap=await getDoc(ref);
  console.log(snap.data());
}

const getDocumentByQuery = async () =>{
  const collectionRef= collection(firestore, "users");
  const q=query(collectionRef, where("isFemale", "==", true));
  const snapshot=await getDocs(q);
  snapshot.forEach((data)=>
    console.log( data.data()))
  }

  const update =async () =>{
    const docRef= doc(firestore, 'cities', '5J3iWzKLsn5QZlx9LHJv');
    await updateDoc(docRef, {
    name:'New Delhi'
  })
  }

  return (
    <div className="App">
      <h1>Firebase Firestore</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Put Sub Data</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocumentByQuery}>Get Document By Query</button>
      <button onClick={update}>Update</button>
      </div>
  );
}

export default App;
