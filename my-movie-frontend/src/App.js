import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import { WatchList } from "./components/pages/WatchList";

import { Catalog } from "./components/pages/Catalog";
// import MovieComponent from "./components/movie/MovieComponent";

function App() {
  // const [searchQuery, updateSearchQuery] = useState("");
  // const [movieList, updateMovieList] = useState([]);

  return (
    // <>
    //   <div>
    //     {data.length > 0 &&
    //       data.map((data, key) => (
    //         <Catalog movie={data} att={data.instanceAttributes} key={key} />
    //       ))}
    //   </div>

    <Router>
      <Navbar />

      <Routes>
        <Route path="/WatchList" element={<WatchList />}></Route>
      </Routes>

      <Routes>
        <Route exact path="/Catalog" element={<Catalog />}></Route>
      </Routes>
    </Router>
    // </>
  );
}

export default App;
