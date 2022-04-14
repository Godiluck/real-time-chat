import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

firebase.initializeApp({
  apiKey: "AIzaSyACqs5XZQkmWKpXpUFM6He5YLhG-DIkxbU",
  authDomain: "chat-react-79efe.firebaseapp.com",
  projectId: "chat-react-79efe",
  storageBucket: "chat-react-79efe.appspot.com",
  messagingSenderId: "173539719709",
  appId: "1:173539719709:web:912108b248a6500899a4f4",
  measurementId: "G-284Z97L0HT"
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore,
  }}>
    <App />
  </Context.Provider>
);
