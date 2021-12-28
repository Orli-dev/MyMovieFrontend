import React, { useEffect, useState } from "react";
// import { moviesData } from "../movie/data";
import styled from "styled-components";
import MovieComponent from "../movie/MovieComponent";
import MovieInfoComponent from "../movie/MovieInfoComponent";
import axios from "axios";
// import Axios from "axios";

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly; ;
`;
const client = axios.create({
  baseURL: "http://localhost:8091/iob/instances/2022a.Moshe.Yakov",
});

export const Catalog = (props) => {
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

  return (
    <div>
      {data && (
        <MovieInfoComponent selectedMovie={data} onMovieSelect={setData} />
      )}

      <MovieListContainer>
        {data.map((movie, index) => (
          <MovieComponent
            key={index}
            movie={movie}
            att={movie.instanceAttributes}
            onMovieSelect={setData}
            MovieInfoComponent={movie}
          />
        ))}
      </MovieListContainer>
    </div>
  );
};

export default Catalog;
