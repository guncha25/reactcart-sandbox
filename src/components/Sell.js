import React, { useContext, createRef, useEffect } from "react";
import { StoreContext } from "./StoreItemContext";
import { NotificationManager } from "react-notifications";

const titleRef = createRef();

export default props => {
  const { addItem, user } = useContext(StoreContext);
  if (!user) {
    props.history.push("/");
  }
  useEffect(() => {
    if (!user) {
      NotificationManager.warning("Please log in", "👮‍♂️", 3000);
    }
  }, [user]);

  const saveItem = event => {
    event.preventDefault();
    addItem(titleRef.current.value);
    event.target.reset();
    props.history.push("/");
  };

  return (
    <form className="container" onSubmit={saveItem}>
      <div className="form-group">
        <label htmlFor="title">Email address</label>
        <input
          type="text"
          ref={titleRef}
          className="form-control"
          id="title"
          aria-describedby="title"
          placeholder="Item"
        />
        <small id="emailHelp" className="form-text text-muted">
          Add items name.
        </small>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
