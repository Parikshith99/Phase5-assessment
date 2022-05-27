import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadEvents, searchEvents } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  let dispatch = useDispatch();
  let history = useNavigate();
  useEffect(() => {
    dispatch(loadEvents());
  }, []);

  const [state, setState] = useState("");

  const handleOnchange = (e) => {
    setState(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(searchEvents(state));
  };

  const { events } = useSelector((state) => state.reducer);

  return (
    <>
      <Navbar
        search={true}
        handleOnchange={handleOnchange}
        handleOnSubmit={handleOnSubmit}
        state={state}
      />

      <div className="container">
        <div className="text-center">
          <h2 style={{ marginTop: "95px", marginBottom: "35px" }}>
            List Of Events
          </h2>
        </div>
        <table className="table mt-4 table-hover shadow-lg p-3 mb-5 bg-body rounded">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr
                key={event.id}
                onClick={() => history(`/viewEvent/${event.id}`)}
              >
                <th className="col-md-1">{event.id}</th>
                <td className="col-md-5">{event.name}</td>
                <td className="col-md-2">{event.date}</td>
                <td className="col-md-4">{event.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
