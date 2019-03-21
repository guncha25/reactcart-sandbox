import React, { Component } from "react";
import Item from "./Item";

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
    let items = localStorage.getItem("items");
    items = items ? JSON.parse(items) : [];
    this.state = {
      items
    };
  }

  increment = () => {
    const id = Math.random()
      .toString(30)
      .substring(2, 6);
    const items = [
      ...this.state.items,
      {
        title: "Item " + id,
        id,
        count: 1
      }
    ];
    this.setState({ items }, this.refreshStorage);
  };

  itemUpdate = (updateItem, decrease = false) => {
    const items = [...this.state.items].map(item => {
      if (item.id === updateItem.id) {
        if (!decrease && item.count++);
        if (decrease && item.count-- && item.count < 1 && (item.count = 0));
      }
      return item;
    });
    this.setState({ items }, this.refreshStorage);
  };

  rm = itemId => {
    const items = [...this.state.items].filter(item => item.id !== itemId);
    this.setState({ items }, this.refreshStorage);
  };
  refreshStorage = () =>
    localStorage.setItem("items", JSON.stringify(this.state.items));
  removeAll = () =>
    this.setState({ ...this.state, items: [] }, this.refreshStorage);
  getTotalItems = () =>
    this.state.items.reduce((tally, item) => tally + item.count, 0);
  getUniqueItems = () =>
    this.state.items.reduce((t, i) => (i.count > 0 ? t + 1 : t), 0);
  getCountColor = () =>
    this.getTotalItems() > 0 ? "badge-primary" : "badge-secondary";

  render() {
    const { items } = this.state;
    return (
      <>
        <span className={`badge m-1 ${this.getCountColor()}`}>
          Unique: {this.getUniqueItems()}
        </span>
        <span className={`badge m-1 ${this.getCountColor()}`}>
          Total: {this.getTotalItems()}
        </span>
        <button onClick={this.increment} className="m-1 btn btn-dark">
          Add item
        </button>
        <button onClick={this.removeAll} className="m-1 btn btn-danger">
          Remove all
        </button>
        <div>
          <ul className="list-group">
            {items.map(item => (
              <Item key={item.id} itemUpdate={this.itemUpdate} rm={this.rm}>
                {item}
              </Item>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
