import React, { useContext } from "react";
import CartItem from "./CartItem";
import { MyCartContext } from "./CartContext";

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
        <ul className="list-group">
          {cartItems.map(item => (
            <CartItem {...{ key: item.id, cid: item.id }} />
          ))}
        </ul>
      </div>
    </>
  );
};
