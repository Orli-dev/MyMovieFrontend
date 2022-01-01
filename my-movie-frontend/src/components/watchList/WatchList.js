import React, { useEffect, useState } from "react";
import styled from "styled-components";

import MovieComponent from "../movie/MovieComponent";

import axios from "axios";

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;

const client = axios.create({
  baseURL:
    "http://localhost:8091/iob/instances/2022a.Moshe.Yakov/user@demo.com/2022a.Moshe.Yakov/",
});
export const WatchList = () => {
  const [dataMovies, setMovies] = useState(null);
  const [selectMovie, onMovieSelect] = useState();

  useEffect(() => {
    async function getDataMovies() {
      let address = "61d0a76522af4026dceeea23/children";
      const response = await client.get(address);

      setMovies(response.data);
    }
    // console.log(dataMovies);
    getDataMovies();
  }, []);

  if (!dataMovies) return "No Data";

  return (
    //  {selectMovie && (
    //     <MovieInfoComponent
    //       selectMovie={selectMovie}
    //       onMovieSelect={onMovieSelect}
    //     />
    //   )}
    <MovieListContainer>
      {dataMovies.map((movie, index) => (
        <MovieComponent
          key={index}
          movie={movie}
          att={movie.instanceAttributes}
          onMovieSelect={onMovieSelect}
          // onClicked={movie}
          // MovieInfoComponent={movie.name}
        />
      ))}
    </MovieListContainer>
  );
};
