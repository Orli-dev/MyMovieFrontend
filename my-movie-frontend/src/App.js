import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import { WatchList } from "./components/pages/WatchList";
import { SignIn } from "./components/pages/SignIn";
import { Catalog } from "./components/pages/Catalog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/WatchList" element={<WatchList />}></Route>
      </Routes>
      <Routes>
        <Route path="/SignIn" element={<SignIn />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Catalog" element={<Catalog />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
