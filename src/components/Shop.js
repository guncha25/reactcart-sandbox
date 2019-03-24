import React, { useContext } from "react";
import ShopItem from "./ShopItem";
import { StoreContext } from "./StoreItemContext";

export default () => {
  const { items } = useContext(StoreContext);
  if (items === "loading") {
    return <h1>Loading...</h1>;
  }
  if (items.length === 0) {
    return <h1>No items</h1>;
  }
  return (
    <div className="row">
      {items.map(item => (
        <ShopItem item={item} key={item.id} />
      ))}
    </div>
  );
};
