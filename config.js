  
import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyB1MnIBUs0W2LnPHr3iNTczv1-yYS4qYeU",
  authDomain: "pro-c71-ae78f.firebaseapp.com",
  projectId: "pro-c71-ae78f",
  storageBucket: "pro-c71-ae78f.appspot.com",
  messagingSenderId: "121134255907",
  appId: "1:121134255907:web:8e2dccd9dc12657886c696"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export default  firebase.firestore();