import firebase from "firebase/app";
import "firebase/auth"

const app=firebase.initializeApp({
    apiKey: "AIzaSyDJIMJ8xcurDiBELoW-RoEfdpkG3urUIz0",
    authDomain: "fiergram.firebaseapp.com",
    projectId: "fiergram",
    storageBucket: "fiergram.appspot.com",
    messagingSenderId: "117428643121",
    appId: "1:117428643121:web:cb8d9985e588c7fea87c10",
    measurementId: "G-7WW6ZPY7LZ",   
})

export const auth = app.auth()
export default app