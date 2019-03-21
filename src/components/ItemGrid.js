import React, { Component } from "react";
import ItemGridItem from "./ItemGridItem";

class ItemGrid extends Component {
  constructor(props, context) {
    super(props, context);
    let items = localStorage.getItem("items");
    items = items ? JSON.parse(items) : [];
    this.state = {
      items
    };
  }
  render() {
    return (
      <div className="row">
        {this.state.items.map(item => (
          <ItemGridItem item={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default ItemGrid;
