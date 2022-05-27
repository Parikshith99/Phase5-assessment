import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { getSingleEvent } from "../redux/actions";
function Viewevent() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleEvent(id));
  }, []);
  const { event } = useSelector((state) => state.reducer);
  return (
    <div>
      <Navbar search={false} />

      <div
        className="card col-md-6 offset-md-3"
        style={{ width: "34rem", marginTop: "90px" }}
      >
        <img
          src={require("../images/image.jpg")}
          className="card-img-top"
          alt="yo"
        />
        <div className="card-body">
          <h5 className="card-title">{event.name}</h5>
          <p className="card-text">{event.address}</p>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Read more
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {!event.description ? (
                    <p>No description available</p>
                  ) : (
                    event.description
                  )}
                </div>
              </div>
              <div className="card-footer text-muted">{event.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewevent;
