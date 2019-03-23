import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyCartContext } from "./CartContext";

export default () => {
  const { getTotal, getColor } = useContext(MyCartContext);
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link className="nav-item navbar-brand" to="/">
        Home
      </Link>
      <Link className="nav-item nav-link" to="/cart">
        <span className={getColor()}>Cart {getTotal() || ""}</span>
      </Link>
      <Link className="nav-item nav-link" to="/sell">
        Sell
      </Link>
    </nav>
  );
};
