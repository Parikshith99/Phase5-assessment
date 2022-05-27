import React from "react";

import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AddEvent from "./components/AddEvent";
import Viewevent from "./components/Viewevent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addEvent" element={<AddEvent />} />
        <Route exact path="/viewEvent/:id" element={<Viewevent />} />
      </Routes>
    </div>
  );
}

export default App;
