import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Counter from "./Counter";

const Index = () => <h2>Home</h2>;
const Items = () => <h2>Shop</h2>;
const Sell = () => <h2>Sell</h2>;

export default () => (
  <Router>
    <div>
      <Navigation />
      <Route path="/" exact component={Index} />
      <Route path="/cart" component={Counter} />
      <Route path="/items" component={Items} />
      <Route path="/sell" component={Sell} />
    </div>
  </Router>
);
