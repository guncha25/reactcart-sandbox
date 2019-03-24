import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database

const fbase = firebase.initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId
});

export default fbase;
