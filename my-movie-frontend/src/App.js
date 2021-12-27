import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import { WatchList } from "./components/pages/WatchList";

import { Catalog } from "./components/pages/Catalog";
import MovieComponent from "./components/movie/MovieComponent";

const client = axios.create({
  baseURL: "http://localhost:8091/iob/instances/2022a.Moshe.Yakov",
});

function App() {
  // const [searchQuery, updateSearchQuery] = useState("");
  // const [movieList, updateMovieList] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const user = "user@demo.com";
      const response = await client.get("/" + user);
      setData(response.data);
    }

    getData();
  }, []);
  if (!data) return "No Data";

  console.log(data[0].name);
  // useEffect(() => {
  //   getData();
  // }, []);
  // async function getData() {
  //   await Axios(
  //   "http://localhost:8091/iob/instances/2022a.Moshe.Yakov/user@demo.com"
  // )
  // .then((response) => {
  // if (response.ok) {
  //   return response.json();
  // }
  //   // })
  //   .then((data) => setData(data));
  // console.log({ movie });

  // });
  // useEffect()
  //   .json()
  //   .then((data) => setData(data));
  // fetchData = async (searchString) => {
  //   const response = await Axios.get(
  //     "http://localhost:8091/iob/instances/2022a.Moshe.Yakov/user@demo.com"
  //   );
  //   updateMovieList(response.data.Search);
  // };
  // console.log(movieList);

  return (
    <>
      <div>
        {data.length > 0 &&
          data.map((data, key) => (
            <MovieComponent
              movie={data}
              att={data.instanceAttributes}
              key={key}
            />
          ))}
      </div>

      <Router>
        <Navbar />

        <Routes>
          <Route path="/WatchList" element={<WatchList />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/Catalog" element={<Catalog />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
