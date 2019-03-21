import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Cart from "./Cart";
import Shop from "./Shop";
import Item from "./Item";

const Sell = () => <h2>Sell</h2>;

export default () => (
  <Router>
    <div>
      <Navigation />
      <Route path="/" exact component={Shop} />
      <Route path="/cart" component={Cart} />
      <Route path="/sell" component={Sell} />
      <Route path="/item/:id" component={Item} />
    </div>
  </Router>
);
