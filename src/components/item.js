import React, { useContext } from "react";
import { MyCartContext } from "./CartContext";
import { StoreContext } from "./StoreItemContext";

export default props => {
  const { addToCart } = useContext(MyCartContext);
  const { rm, items } = useContext(StoreContext);
  const item = items.find(item => item.id === props.match.params.id);
  if (!item) {
    return (
      <div className="container">
        <h1>"Item not found"</h1>
      </div>
    );
  }

  const addItemToCart = () => addToCart(item.id);
  const remove = () => {
    rm(item.id);
    props.history.push("/");
  };

  return (
    <div className="container">
      <h1>item.title</h1>
      <button className="btn btn-success" onClick={addItemToCart}>
        Add to cart{" "}
        <span role="img" aria-label="cart">
          🛒
        </span>
      </button>
      <button className="btn btn-warning" onClick={remove}>
        Remove{" "}
        <span role="img" aria-label="stop">
          🛑
        </span>
      </button>
    </div>
  );
};
