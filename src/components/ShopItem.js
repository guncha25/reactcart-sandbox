import React from "react";
import { Link } from "react-router-dom";
import { FigureItem } from "./Pose";

export default props => {
  return (
    <FigureItem className="col-md-4">
      <Link to={`item/${props.item.id}`}>
        <img
          alt={props.item.title}
          src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(150).jpg"
          className="img-fluid"
        />
        <h2>{props.item.title}</h2>
      </Link>
    </FigureItem>
  );
};
