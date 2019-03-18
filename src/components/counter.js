import React, { Component } from "react";
import Item from "./item";
import styled from "styled-components";

const ListItem = styled.li`
  background: #d8c7c7 !important;
`;

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
    const newState = { ...this.state };
    const id = Math.random()
      .toString(30)
      .substring(2, 6);
    newState.items = [
      ...newState.items,
      {
        title: "Item " + id,
        id,
        count: 1
      }
    ];
    this.setState(newState, this.refreshStorage);
  };

  updateItemCount = (updateItem, decrease = false) => {
    const newState = { ...this.state };
    newState.items = newState.items.map((item, index) => {
      if (item.id === updateItem.id) {
        if (!decrease) {
          item.count++;
        } else {
          item.count--;
          if (item.count < 1) {
            item.count = 0;
          }
        }
      }
      return item;
    });
    this.setState(newState, this.refreshStorage);
  };

  removeItem = itemId => {
    const newState = { ...this.state };
    newState.items = newState.items.filter(item => item.id !== itemId);
    this.setState(newState, this.refreshStorage);
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
            {this.state.items.map(item => (
              <ListItem className="list-group-item" key={item.id}>
                <Item
                  updateItemCount={this.updateItemCount}
                  removeItem={this.removeItem}
                  data={item}
                />
              </ListItem>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
