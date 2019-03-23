import React, { useContext } from "react";
import styled from "styled-components";
import { MyCartContext } from "./CartContext";
import { StoreContext } from "./StoreItemContext";

const Count = styled.span`
  font-size: 1.75rem;
  align-items: center;
  margin-left: 2em;
`;

export default ({ cid }) => {
  const { items } = useContext(StoreContext);
  const { itemUpdate, rm, cartItems } = useContext(MyCartContext);
  const item = items.find(item => item.id === cid);
  const cartItem = cartItems.find(item => item.id === cid);
  const count = e => {
    itemUpdate(cid, e.target.getAttribute("data-type") !== "add-one");
  };
  const handleRemove = () => {
    rm(cid);
  };
  if (!item) {
    return (
      <li>
        <h3>Item no longer available</h3>
        <button
          data-type="remove"
          onClick={handleRemove}
          className="btn btn-danger m-1 float-right"
        >
          Remove
        </button>
      </li>
    );
  }
  return (
    <li>
      <h3>{item.title}</h3>
      <div className="btn-group">
        <button data-type="add-one" onClick={count} className="btn btn-success">
          +
        </button>
        <button
          disabled={cartItem.count < 1}
          data-type="remove-one"
          onClick={count}
          className="btn btn-warning"
        >
          -
        </button>
      </div>
      <Count>
        {cartItem.count === 0 ? "No" : cartItem.count} Item
        {cartItem.count !== 1 ? "s" : ""}
      </Count>
      <button
        data-type="remove"
        onClick={handleRemove}
        className="btn btn-danger m-1 float-right"
      >
        Remove
      </button>
    </li>
  );
};
