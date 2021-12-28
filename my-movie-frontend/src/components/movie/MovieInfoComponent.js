import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../button/Button";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;

const client = axios.create({
  baseURL: "http://localhost:8091/iob/instances/2022a.Moshe.Yakov",
});

const MovieInfoComponent = ({ props }) => {
  // const { selectedMovie } = props;
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    async function getData() {
      const user = "user@demo.com";
      const response = await client.get("/" + user);
      setMovieInfo(response.movieInfo);
    }

    getData();
  }, []);
  if (!movieInfo) return "No Data";

  return (
    <Container>
      <CoverImage src="https://lumiere-a.akamaihd.net/v1/images/p_cruella_21672_ba40c762.jpeg" />
      <InfoColumn>
        <MovieName>
          Type: <span>{MovieInfo.type}</span>
        </MovieName>
        <MovieInfo>
          IMDB Rating: <span>"7.4"</span>
        </MovieInfo>
        <MovieInfo>
          Year: <span>"2020"</span>
        </MovieInfo>
        <MovieInfo>
          Language: <span>"English"</span>
        </MovieInfo>
        <MovieInfo>
          Director: <span>"Craig Gillespie"</span>
        </MovieInfo>
        <MovieInfo>
          Actors:{" "}
          <span>
            "Emma Thompson, Joel Fry, Paul Walter Hauser, John McCrea"
          </span>
        </MovieInfo>
        <MovieInfo>
          Plot:{" "}
          <span>
            "Before she becomes Cruella de Vil, teenage Estella has a dream. She
            wishes to become a fashion designer, having been gifted with talent,
            innovation, and ambition all in equal measures. But life seems
            intent on making sure her dreams never come true. Having wound up
            penniless and orphaned in London at 12, 10 years later Estella runs
            wild through the city streets with her best friends and
            partners-in-(petty)-crime, Horace and Jasper, two amateur thieves.
            When a chance encounter vaults Estella into the world of the young
            rich and famous, however, she begins to question the existence she's
            built for herself in London and wonders whether she might, indeed,
            be destined for more after all."
          </span>
        </MovieInfo>
        <MovieInfo>
          Origin: <span>"United States, United Kingdom"</span>
        </MovieInfo>
        <MovieInfo>
          Is watched: <span>"true"</span>
        </MovieInfo>
        <Button>Add to Watch List</Button>
      </InfoColumn>
      <Close onClick={() => props.onMovieSelect()}>X</Close>
    </Container>
  );
};
export default MovieInfoComponent;
