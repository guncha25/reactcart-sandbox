import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Counter from "./Counter";
import ItemGrid from "./ItemGrid";
import ItemPage from "./ItemPage";

const Sell = () => <h2>Sell</h2>;

export default () => (
  <Router>
    <div>
      <Navigation />
      <Route path="/" exact component={ItemGrid} />
      <Route path="/cart" component={Counter} />
      <Route path="/sell" component={Sell} />
      <Route path="/item/:id" component={ItemPage} />
    </div>
  </Router>
);
