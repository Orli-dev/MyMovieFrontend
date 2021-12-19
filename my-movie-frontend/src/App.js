import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MovieComponent from "./components/movie/MovieComponent";
import MovieInfoComponent from "./components/movie/MovieInfoComponent";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import { moviesData } from "./components/movie/data";

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly; ;
`;
function App() {
  const [selectedMovie, onMovieSelect] = useState();

  return (
    <Router>
      <Navbar />

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
    </Router>
  );
}

export default App;
