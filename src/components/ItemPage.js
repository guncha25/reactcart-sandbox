import React from "react";

export default props => {
  const item = JSON.parse(localStorage.getItem("items") || "[]").find(
    item => item.id === props.match.params.id
  );

  return (
    <div className="container">
      <h1>{(item && item.title) || "Item not found"}</h1>
    </div>
  );
};
