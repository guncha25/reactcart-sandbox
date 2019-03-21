import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <figure className="col-md-4">
      <Link to={`item/${props.item.id}`}>
        <img
          alt={props.item.title}
          src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(150).jpg"
          className="img-fluid"
        />
        <h2>{props.item.title}</h2>
      </Link>
    </figure>
  );
};
