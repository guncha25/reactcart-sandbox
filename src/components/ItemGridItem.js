import React, { Component } from "react";
import { Link } from "react-router-dom";

class ItemGridItem extends Component {
  render() {
    return (
      <figure className="col-md-4">
        <Link to={`item/${this.props.item.id}`}>
          <img
            alt={this.props.item.title}
            src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(150).jpg"
            className="img-fluid"
          />
          <h2>{this.props.item.title}</h2>
        </Link>
      </figure>
    );
  }
}

export default ItemGridItem;
