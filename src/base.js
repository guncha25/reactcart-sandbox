import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database

const fbase = firebase
  .initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: "https://mycart-sandbox.firebaseio.com",
    projectId: process.env.PROJECT_ID
  })
  .database();

export default fbase;
