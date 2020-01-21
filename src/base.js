import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCKUePMLO7nKjZniUPSib5XJROHtkcbkYM",
    authDomain: "catch-of-the-day-614a8.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-614a8.firebaseio.com",
    projectId: "catch-of-the-day-614a8",
    storageBucket: "catch-of-the-day-614a8.appspot.com",
    messagingSenderId: "1093170236560",
    appId: "1:1093170236560:web:4924886aa4dc8aa0389c15",
    measurementId: "G-NX8JG18S29"
  }
);

firebaseApp.analytics();

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
