import React from "react";
import styled from "styled-components";

const Count = styled.span`
  font-size: 1.75rem;
  align-items: center;
  margin-left: 2em;
`;

const Item = props => {
  const item = props.data;
  const handleCountClick = e => {
    props.updateItemCount(item, e.target.getAttribute("data-type") !== "add");
  };
  const handleRemove = () => {
    props.removeItem(item.id);
  };
  return (
    <>
      <h3>{item.title}</h3>
      <div className="btn-group">
        <button
          data-type="add"
          onClick={handleCountClick}
          className="btn btn-success"
        >
          +
        </button>
        <button
          data-type="remove"
          onClick={handleCountClick}
          className="btn btn-warning"
        >
          -
        </button>
      </div>
      <Count>
        {item.count === 0 ? "No" : item.count} Item
        {item.count !== 1 ? "s" : ""}
      </Count>
      <button onClick={handleRemove} className="btn btn-danger m-1 float-right">
        Remove
      </button>
    </>
  );
};

export default Item;
