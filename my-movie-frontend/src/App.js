import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Movies from "./components/movies";
import { moviesData } from "./components/movies/data";

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Movies heading="" data={moviesData} />{" "}
    </Router>
  );
}

export default App;
