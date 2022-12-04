import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";

const Home = (props) => {
  const [color, setColor] = useState("");
  const [movie, setMovie] = useState("");

  const onChangeHandler = (e) => {
    if (e.target.id === "color") setColor(e.target.value);
    else setMovie(e.target.value);
  };

  return (
    <>
      <div>
        <label>
          What is your favorite color of rainbow ?
          <input id="color" value={color} onChange={onChangeHandler} />
        </label>
      </div>
      <div>
        What is your favorite movie among these ?
        <label>
          <input
            type="radio"
            name="movie"
            value="Marriage Story"
            onChange={onChangeHandler}
          />
          Marriage Story
        </label>
        <label>
          <input
            type="radio"
            name="movie"
            value="The Fast And The Furious"
            onChange={onChangeHandler}
          />
          The Fast And The Furious
        </label>
        <label>
          <input
            type="radio"
            name="movie"
            value="Avengers"
            onChange={onChangeHandler}
          />
          Avengers
        </label>
        <Info color={color} movie={movie} />
      </div>
    </>
  );
};

Home.propTypes = {};

export default Home;

const getColorKor = (color) => {
  console.log("getColorKor");
  switch (color) {
    case "red":
      return "빨강";
    case "orange":
      return "주황";
    case "yellow":
      return "노랑";
    case "green":
      return "초록";
    case "blue":
      return "파랑";
    case "navy":
      return "남";
    case "purple":
      return "보라";
    default:
      return "레인보우";
  }
};

const getMovieGenreKor = (movie) => {
  console.log("getMovieGenreKor");
  switch (movie) {
    case "Marriage Story":
      return "드라마";
    case "The Fast And The Furious":
      return "액션";
    case "Avengers":
      return "슈퍼히어로";
    default:
      return "아직 잘 모름";
  }
};

const Info = ({ color, movie }) => {
  const colorKor = useMemo(() => getColorKor(color), [color]);
  const movieGenreKor = useMemo(() => getMovieGenreKor(movie), [movie]);

  return (
    <div className="info-wrapper">
      제가 가장 좋아하는 색은 {colorKor} 이고, <br />
      즐겨보는 영화 장르는 {movieGenreKor} 입니다.
    </div>
  );
};