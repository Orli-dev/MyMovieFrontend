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
                <ContentModal>
                  <MoviesImg src={movie.img} alt={movie.alt} />
                </ContentModal>
                <MoviesButton>{movie.button}</MoviesButton>
              </MoviesInfo>
            </MoviesCard>
          );
        })}
      </MoviesWrapper>
    </MoviesContainer>
  );
};

export default Movies;
