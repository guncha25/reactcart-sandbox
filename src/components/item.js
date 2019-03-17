import React, { Component } from "react";
import styled from "styled-components";

const Count = styled.span`
  font-size: 1.75rem;
  align-items: center;
  margin-left: 2em;
`;

class Item extends Component {
  handleIncrementClick = () => {
    this.props.updateItemCount(this.props.data);
  };
  handleDecrementtClick = () => {
    this.props.updateItemCount(this.props.data, true);
  };
  handleRemove = () => {
    this.props.removeItem(this.props.data.id);
  };
  render() {
    const item = this.props.data;
    return (
      <>
        <h3>{item.title}</h3>
        <div className="btn-group">
          <button
            onClick={this.handleIncrementClick}
            className="btn btn-success"
          >
            +
          </button>
          <button
            onClick={this.handleDecrementtClick}
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
          onClick={this.handleRemove}
          className="btn btn-danger m-1 float-right"
        >
          Remove
        </button>
      </>
    );
  }
}

export default Item;
