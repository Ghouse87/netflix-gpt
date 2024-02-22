import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailorVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  console.log(" going into useMovieTrailer ");

  const getMovieVideos = async () => {
    console.log(" getMovieVideos ");
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailor = json.results.filter((video) => video.type === "Trailer")[0];

    if (!trailor) return;
    dispatch(addTrailorVideo(trailor));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
