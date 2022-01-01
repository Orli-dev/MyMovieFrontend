import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Catalog } from "./components/catalog/Catalog";

function App() {
  return (
    <Router>
      <Navbar />
      {/* 
      <Routes>
        <Route path="/WatchList" element={<WatchList />}></Route>
      </Routes> */}

      <Routes>
        <Route exact path="/" element={<Catalog />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
