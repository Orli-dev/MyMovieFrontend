import React, { useState } from "react";
import { moviesData } from "../movie/data";
import styled from "styled-components";
import MovieComponent from "../movie/MovieComponent";
import MovieInfoComponent from "../movie/MovieInfoComponent";
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly; ;
`;

export const Catalog = () => {
  const [selectedMovie, onMovieSelect] = useState();

  return (
    <div>
      {selectedMovie && (
        <MovieInfoComponent
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}

      <MovieListContainer>
        {moviesData.map((movie, index) => (
          <MovieComponent
            key={index}
            movie={movie}
            onMovieSelect={onMovieSelect}
            MovieInfoComponent={movie}
          />
        ))}
      </MovieListContainer>
    </div>
  );
};

export default Catalog;
