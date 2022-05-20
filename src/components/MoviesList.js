import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = ({ movieData }) => {
  return (
    <ul className={classes["movies-list"]}>
      {movieData.map((item) => (
        <Movie
          key={item.id}
          title={item.title}
          releaseDate={item.releaseDate}
          openingText={item.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
