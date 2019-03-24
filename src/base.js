import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database

const fbase = firebase.initializeApp({
  apiKey: "AIzaSyCQOTvONvrgFW174xd3TOVk-_gxbwLYRAU",
  authDomain: "mycart-sandbox.firebaseapp.com",
  databaseURL: "https://mycart-sandbox.firebaseio.com",
  projectId: "mycart-sandbox"
});

export default fbase;
