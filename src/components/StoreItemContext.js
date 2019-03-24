import React, { useEffect, useState } from "react";
import uuid from "uuid";
import fbase from "./../base";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const StoreContext = React.createContext();

export default props => {
  // Set items state
  const [items, setItems] = useState("loading");
  const [doReload, reload] = useState(false);
  const itemSnapshot = fbase.database().ref();
  const { user } = useAuthState(firebase.auth());
  const authProvider = new firebase.auth.GoogleAuthProvider();
  const login = () => {
    firebase.auth().signInWithPopup(authProvider);
  };
  const logout = () => {
    firebase.auth().signOut();
  };

  // Update item storage on change
  useEffect(() => {
    itemSnapshot.child("items").on("value", snapshot => {
      if (snapshot.val() !== null && setItems([...snapshot.val()]));
      if (snapshot.val() === null && setItems([]));
    });
    if (doReload && itemSnapshot.child("items").set(items));
    reload(false);
    return () => {
      itemSnapshot.child("items").off("value");
    };
  }, [doReload, user]);

  // Add item callback
  const addItem = title => {
    const uid = user.uid;
    setItems([...items, { title, id: uuid(), uid }]);
    reload(true);
  };

  // Remove item callback
  const rm = itemId => {
    setItems([...items].filter(item => item.id !== itemId));
    reload(true);
  };

  return (
    <StoreContext.Provider
      value={{ items, addItem, rm, login, user, logout, reload }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
