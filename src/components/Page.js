import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Cart from "./Cart";
import Shop from "./Shop";
import Item from "./Item";
import Sell from "./Sell";
import CartContext from "./CartContext";
import StoreItemContext from "./StoreItemContext";

export default () => (
  <Router>
    <div>
      <StoreItemContext>
        <CartContext>
          <Navigation />
          <Route path="/" exact component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/sell" component={Sell} />
          <Route path="/item/:id" component={Item} />
        </CartContext>
      </StoreItemContext>
    </div>
  </Router>
);
