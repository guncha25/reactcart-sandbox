import React, { Component } from "react";
import Item from "./item";
import styled from "styled-components";

const ListItem = styled.li`
  background: #d8c7c7 !important;
`;

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
    const items = localStorage.getItem("items");
    console.log(JSON.parse(items));
    if (items) {
      this.state = {
        items: JSON.parse(items)
      };
    } else {
      this.state = {
        items: []
      };
    }
  }

  updateLocalStorage() {
    localStorage.setItem("items", JSON.stringify(this.state.items));
  }

  increment = () => {
    const newState = { ...this.state };
    const id =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);
    const newItem = {
      title: "Item " + id,
      id: id,
      count: 1
    };
    newState.items = [...newState.items, newItem];
    this.setState(newState, this.updateLocalStorage);
  };
  updateItemCount = (updateItem, decrease = false) => {
    const newState = { ...this.state };
    const newItems = newState.items.map((item, index) => {
      if (item.id === updateItem.id) {
        const newItem = { ...item };
        if (!decrease) {
          newItem.count++;
        } else {
          newItem.count--;
          if (newItem.count < 1) {
            newItem.count = 0;
          }
        }
        return newItem;
      }
      return item;
    });
    newState.items = newItems;
    this.setState(newState, this.updateLocalStorage);
  };

  removeItem = itemId => {
    const newState = { ...this.state };
    const newItems = newState.items.filter((item, index) => item.id !== itemId);
    newState.items = newItems;
    this.setState(newState, this.updateLocalStorage);
  };
  removeAll = () => {
    const newState = { ...this.state };
    newState.items = [];
    this.setState(newState, this.updateLocalStorage);
  };
  getTotalItems = () => {
    return this.state.items.reduce((tally, item) => tally + item.count, 0);
  };
  getUniqueItems = () =>
    this.state.items.reduce(
      (tally, item) => (item.count > 0 ? tally + 1 : tally),
      0
    );
  getCountColor = () =>
    this.getTotalItems() > 0
      ? "badge m-2 badge-primary"
      : "badge m-2 badge-secondary";
  render() {
    return (
      <>
        <span className={this.getCountColor()}>
          Unique items: {this.getUniqueItems()}
        </span>
        <span className={this.getCountColor()}>
          Total items: {this.getTotalItems()}
        </span>
        <button onClick={this.increment} className="m-2 btn btn-dark">
          Add item
        </button>
        <button onClick={this.removeAll} className="m-2 btn btn-danger">
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
