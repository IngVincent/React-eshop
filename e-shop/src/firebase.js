import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDspQ0YH_BNEZlgFKASgJDQLMMcbi2mW7w",
    authDomain: "eshop-27e51.firebaseapp.com",
    projectId: "eshop-27e51",
    storageBucket: "eshop-27e51.appspot.com",
    messagingSenderId: "435135332211",
    appId: "1:435135332211:web:424e2973a8a15238b40f06",
    measurementId: "G-N7MH043CJ2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

