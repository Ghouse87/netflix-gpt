import React from "react";
import Header from "./Header"; 
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondayContainer from "./SecondayContainer";

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondayContainer />
    </div>
  );
};

export default Browse;
