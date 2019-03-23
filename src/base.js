import firebase from "firebase/app";
import "firebase/database";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
  databaseURL: "https://mycart-sandbox.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
