import React, { useContext } from "react";
import CartItem from "./CartItem";
import { MyCartContext } from "./CartContext";
import { UlContainer, LiItem } from "./Pose";

export default () => {
  const { cartItems, removeAll, getTotal, getUnique, getColor } = useContext(
    MyCartContext
  );

  return (
    <>
      <span className={`badge m-1 ${getColor()}`}>Unique: {getUnique()}</span>
      <span className={`badge m-1 ${getColor()}`}>Total: {getTotal()}</span>
      <button onClick={removeAll} className="m-1 btn btn-danger">
        Remove all
      </button>
      <div>
        <UlContainer initialPose="exit" pose="enter" className="list-group">
          {cartItems.map(item => (
            <LiItem
              initialPose="exit"
              pose="enter"
              {...{ key: item.id, cid: item.id }}
            >
              <CartItem {...{ cid: item.id }} />
            </LiItem>
          ))}
        </UlContainer>
      </div>
    </>
  );
};
