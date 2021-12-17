import axios from "axios";
import React from "react";
import ContentModal from "../modal/ContentModal";

import {
  MoviesContainer,
  MoviesWrapper,
  MoviesHeading,
  MoviesTitle,
  MoviesCard,
  MoviesImg,
  MoviesInfo,
  MoviesButton,
} from "./MoviesElements";
//  <MoviesDesc>{movie.desc}</MoviesDesc>
const Movies = ({ heading, data }) => {
  return (
    <MoviesContainer>
      <MoviesHeading>{heading}</MoviesHeading>
      <MoviesWrapper>
        {data.map((movie, index) => {
          return (
            <MoviesCard key={index}>
              <MoviesInfo>
                <MoviesTitle>{movie.name}</MoviesTitle>

                <MoviesImg src={movie.img} alt={movie.alt} />

                <MoviesButton
                  onClick={() =>
                    axios
                      .get("http://localhost:8091/iob/instances/ggg/rrr")
                      .then((res) => {
                        console.log(res);
                      })
                  }
                >
                  {movie.button}
                </MoviesButton>
              </MoviesInfo>
            </MoviesCard>
          );
        })}
      </MoviesWrapper>
    </MoviesContainer>
  );
};

export default Movies;
