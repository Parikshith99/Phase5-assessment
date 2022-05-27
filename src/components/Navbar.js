import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ search, state, handleOnchange, handleOnSubmit }) {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light"
        style={{
          background: "linear-gradient(to right,#5dc27a,#66ed8c,#b2fec4 )",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="navbar-brand mb-0 h1">FindMyEvents</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/addEvent">
                  AddEvent
                </Link>
              </li>
            </ul>
            {search ? (
              <form className="d-flex" role="search" onSubmit={handleOnSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  value={state}
                  onChange={handleOnchange}
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
