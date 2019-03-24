import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Cart from "./Cart";
import Shop from "./Shop";
import Item from "./Item";
import Sell from "./Sell";
import CartContext from "./CartContext";
import StoreItemContext from "./StoreItemContext";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

export default () => (
  <Router>
    <div>
      <StoreItemContext>
        <CartContext>
          <Navigation />
          <NotificationContainer />
          <Route path="/" exact component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/sell" component={Sell} />
          <Route path="/item/:id" component={Item} />
        </CartContext>
      </StoreItemContext>
    </div>
  </Router>
);
