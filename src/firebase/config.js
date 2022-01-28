import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDJIMJ8xcurDiBELoW-RoEfdpkG3urUIz0",
  authDomain: "fiergram.firebaseapp.com",
  projectId: "fiergram",
  storageBucket: "fiergram.appspot.com",
  messagingSenderId: "117428643121",
  appId: "1:117428643121:web:cb8d9985e588c7fea87c10",
  measurementId: "G-7WW6ZPY7LZ",
};

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestemp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore,timestemp};
