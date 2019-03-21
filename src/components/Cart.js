import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import uuid from "uuid";

export default () => {
  const [items, setIt] = useState(
    JSON.parse(localStorage.getItem("items") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  });

  const itemUpdate = (updateItem, decrease = false) => {
    setIt(
      [...items].map(item => {
        if (item.id === updateItem.id) {
          if (!decrease && item.count++);
          if (decrease && item.count-- && item.count < 1 && (item.count = 0));
        }
        return item;
      })
    );
  };

  const increment = () => {
    const id = uuid();
    const title = "Item " + id;
    setIt([...items, { title, id, count: 1 }]);
  };

  const removeAll = () => setIt([]);
  const rm = itemId => setIt([...items].filter(item => item.id !== itemId));
  const getTotal = () => items.reduce((tally, item) => tally + item.count, 0);
  const getUnique = () => items.reduce((t, i) => (i.count > 0 ? t + 1 : t), 0);
  const getColor = () => (getTotal() > 0 ? "badge-primary" : "badge-secondary");

  return (
    <>
      <span className={`badge m-1 ${getColor()}`}>Unique: {getUnique()}</span>
      <span className={`badge m-1 ${getColor()}`}>Total: {getTotal()}</span>
      <button onClick={increment} className="m-1 btn btn-dark">
        Add item
      </button>
      <button onClick={removeAll} className="m-1 btn btn-danger">
        Remove all
      </button>
      <div>
        <ul className="list-group">
          {items.map(item => (
            <CartItem {...{ key: item.id, item, itemUpdate, rm }} />
          ))}
        </ul>
      </div>
    </>
  );
};
