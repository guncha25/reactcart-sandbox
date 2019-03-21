import React from "react";
import styled from "styled-components";

const Count = styled.span`
  font-size: 1.75rem;
  align-items: center;
  margin-left: 2em;
`;

export default props => {
  const item = props.children;
  const count = e => {
    props.itemUpdate(item, e.target.getAttribute("data-type") !== "add-one");
  };
  const handleRemove = () => {
    props.rm(item.id);
  };
  return (
    <li>
      <h3>{item.title}</h3>
      <div className="btn-group">
        <button data-type="add-one" onClick={count} className="btn btn-success">
          +
        </button>
        <button
          disabled={item.count < 1}
          data-type="remove-one"
          onClick={count}
          className="btn btn-warning"
        >
          -
        </button>
      </div>
      <Count>
        {item.count === 0 ? "No" : item.count} Item
        {item.count !== 1 ? "s" : ""}
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
