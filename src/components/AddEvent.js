import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEvents } from "../redux/actions";
import Navbar from "./Navbar";
import Alert from "./Alert";

function AddEvent() {
  const [state, setState] = useState({
    name: "",
    date: "",
    address: "",
    description: "",
  });

  const [error, setError] = useState(null);
  let history = useNavigate();
  let dispatch = useDispatch();
  const { name, date, address, description } = state;

  const handleInput = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !address) {
      setError("Please Enter all the details");
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      dispatch(addEvents(state));
      history("/");
      setError(null);
    }
  };

  return (
    <>
      <Navbar search={false} />

      <div className="container" style={{ marginTop: "90px" }}>
        <h2 className="text-center">Add Event</h2>
        <Alert error={error} />
        <form
          className="custom-centered shadow p-3 mb-5 bg-body rounded"
          onSubmit={handleSubmit}
        >
          <div className="form-floating mb-3">
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={name}
              onChange={handleInput}
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              name="date"
              type="date"
              className="form-control"
              id="date"
              placeholder="Date"
              value={date}
              onChange={handleInput}
            />
            <label htmlFor="date">Select Date</label>
          </div>

          <div className="form-floating mb-3">
            <input
              name="address"
              type="text"
              className="form-control"
              id="address"
              placeholder="Address"
              value={address}
              onChange={handleInput}
            />
            <label htmlFor="address">Location</label>
          </div>

          <div className="form-floating mb-3">
            <textarea
              name="description"
              className="form-control"
              placeholder="Leave a Descrption here"
              value={description}
              onChange={handleInput}
              id="desc"
              style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="desc">Description</label>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddEvent;
