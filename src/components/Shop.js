import React, { useState } from "react";
import ShopItem from "./ShopItem";

export default () => {
  const [items] = useState(JSON.parse(localStorage.getItem("items") || "[]"));
  return (
    <div className="row">
      {items.map(item => (
        <ShopItem item={item} key={item.id} />
      ))}
    </div>
  );
};
