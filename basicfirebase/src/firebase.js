import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDHDvnBt4D5fFJWJRCQjwKNc0aU8DkfNg1",
    authDomain: "app-fd28d.firebaseapp.com",
    projectId: "app-fd28d",
    storageBucket: "app-fd28d.appspot.com",
    messagingSenderId: "116918435555",
    appId: "1:116918435555:web:34c55e27f26b1f640c8fd6",
    measurementId: "G-9LCXMJ3TZ1",
    databaseURL:"https://app-fd28d-default-rtdb.firebaseio.com/"
  };

  export const app = initializeApp(firebaseConfig);
