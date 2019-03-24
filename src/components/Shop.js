import React, { useContext } from "react";
import ShopItem from "./ShopItem";
import { StoreContext } from "./StoreItemContext";
import { DivContainer } from "./Pose";

export default () => {
  const { items } = useContext(StoreContext);
  if (items === "loading") {
    return <h1>Loading...</h1>;
  }
  if (items.length === 0) {
    return <h1>No items</h1>;
  }
  return (
    <DivContainer
      className="row"
      key={items ? "on" : "off"}
      initialPose="exit"
      pose="enter"
    >
      {items.map(item => (
        <ShopItem item={item} key={item.id} initialPose="exit" pose="enter" />
      ))}
    </DivContainer>
  );
};
