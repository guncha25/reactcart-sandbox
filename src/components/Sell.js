import React, { useContext, useRef, useEffect } from "react";
import { StoreContext } from "./StoreItemContext";
import { NotificationManager } from "react-notifications";
import { DivContainer, DivItem } from "./Pose";

export default props => {
  const titleRef = useRef(null);
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
    <DivContainer initialPose="exit" pose="enter">
      <form className="container" onSubmit={saveItem}>
        <DivItem initialPose="exit" pose="enter" className="form-group">
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
        </DivItem>
        <DivItem initialPose="exit" pose="enter">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </DivItem>
      </form>
    </DivContainer>
  );
};
