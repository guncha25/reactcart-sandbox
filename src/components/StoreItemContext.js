import React, { Component } from "react";
import uuid from "uuid";
import base from "./../base";

const StoreContext = React.createContext();

export default class StoreItemContext extends Component {
  // Set items state
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    this.ref = base.syncState(`items`, {
      context: this,
      state: "items",
      defaultValue: []
    });
  }

  // Add item callback
  addItem = title => {
    this.setState({ items: [...this.state.items, { title, id: uuid() }] });
  };

  // Remove item callback
  rm = itemId =>
    this.setState({
      items: [...this.state.items].filter(item => item.id !== itemId)
    });

  render() {
    const { addItem, rm } = this;
    const { items } = this.state;
    return (
      <StoreContext.Provider value={{ items, addItem, rm }}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export { StoreContext };
