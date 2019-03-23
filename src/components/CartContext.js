import React, { useState, useEffect } from "react";

const MyCartContext = React.createContext();

export default props => {
  const { items, setIt, addToCart, itemUpdate } = useItems();
  const removeAll = () => setIt([]);
  const rm = itemId => setIt([...items].filter(item => item.id !== itemId));
  const getTotal = () => items.reduce((tally, item) => tally + item.count, 0);
  const getUnique = () => items.reduce((t, i) => (i.count > 0 ? t + 1 : t), 0);
  const getColor = () =>
    getTotal() > 0 ? "badge badge-success" : " badge badge-secondary";

  return (
    <MyCartContext.Provider
      value={{
        cartItems: items,
        setIt,
        addToCart,
        itemUpdate,
        removeAll,
        rm,
        getTotal,
        getUnique,
        getColor
      }}
    >
      {props.children}
    </MyCartContext.Provider>
  );
};

function useItems() {
  const [items, setIt] = useState(
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  });
  const itemUpdate = (id, decrease = false) => {
    setIt(
      [...items].map(item => {
        if (item.id === id) {
          if (!decrease && item.count++);
          if (decrease && item.count-- && item.count < 1 && (item.count = 0));
        }
        return item;
      })
    );
  };
  const addToCart = id => {
    const item = items.find(item => item.id === id);
    if (!item && setIt([...items, { id, count: 1 }]));
    if (item && itemUpdate(item.id));
  };
  return { items, itemUpdate, addToCart, setIt };
}

export { MyCartContext };
