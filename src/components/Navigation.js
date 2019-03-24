import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyCartContext } from "./CartContext";
import { StoreContext } from "./StoreItemContext";

export default () => {
  const { getTotal, getColor } = useContext(MyCartContext);
  const { user, logout, login } = useContext(StoreContext);
  let button = user || <button onClick={login}>Login</button>;
  if (user) {
    button = (
      <button className="nav-item badge" onClick={logout}>
        Log out
      </button>
    );
  }
  const getUsername = () => (
    <h4>
      <span className="nav-item badge badge-info">Hi, {user.displayName}</span>
    </h4>
  );
  return (
    <nav className="navbar bg-dark">
      <Link className="nav-item navbar-brand" to="/">
        Home
      </Link>
      <Link className="nav-item nav-link" to="/cart">
        <span className={getColor()}>Cart {getTotal() || ""}</span>
      </Link>
      {user && (
        <Link className="nav-item nav-link" to="/sell">
          Sell
        </Link>
      )}
      {button}
      {user && getUsername()}
    </nav>
  );
};
