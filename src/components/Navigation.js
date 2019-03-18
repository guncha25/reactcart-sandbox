import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link className="nav-item navbar-brand" to="/">
      Home
    </Link>
    <Link className="nav-item nav-link" to="/items">
      Shop
    </Link>
    <Link className="nav-item nav-link" to="/cart">
      Cart
    </Link>
    <Link className="nav-item nav-link" to="/sell">
      Sell
    </Link>
  </nav>
);
