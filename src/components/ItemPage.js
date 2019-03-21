import React, { Component } from "react";

class ItemPage extends Component {
  items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  item = this.items.find(item => item.id === this.props.match.params.id);

  render() {
    return (
      <div className="container">
        <h1>{(this.item && this.item.title) || "Item not found"}</h1>
      </div>
    );
  }
}

export default ItemPage;
