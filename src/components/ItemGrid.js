import React, { useState } from "react";
import ItemGridItem from "./ItemGridItem";

export default () => {
  let [items] = useState(JSON.parse(localStorage.getItem("items") || "[]"));
  return (
    <div className="row">
      {items.map(item => (
        <ItemGridItem item={item} key={item.id} />
      ))}
    </div>
  );
};
