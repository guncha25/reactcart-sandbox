import React, { useEffect, useState } from "react";
import uuid from "uuid";
import fbase from "./../base";

const StoreContext = React.createContext();

export default props => {
  // Set items state
  const [items, setItems] = useState("loading");
  const [doReload, reload] = useState(false);

  const itemSnapshot = fbase.ref();

  // Update item storage on change
  useEffect(() => {
    itemSnapshot.child("items").on("value", snapshot => {
      if (snapshot.val() !== null && setItems([...snapshot.val()]));
    });
    if (doReload && itemSnapshot.child("items").set(items) && reload(false));
    return () => {
      itemSnapshot.child("items").off("value");
    };
  }, [doReload]);

  // Add item callback
  const addItem = title => {
    setItems([...items, { title, id: uuid() }]);
    reload(true);
  };

  // Remove item callback
  const rm = itemId => {
    setItems([...items].filter(item => item.id !== itemId));
    reload(true);
  };

  return (
    <StoreContext.Provider value={{ items, addItem, rm }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
