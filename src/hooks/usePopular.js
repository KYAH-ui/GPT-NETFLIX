import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

 // fetch data from TMDB site and updating the store
 const usePopular = () => {
 const dispatch = useDispatch();

 const popularMovies = useSelector((store) => store.movies.popularMovies);

 const getPopularMovies = async () => {
   const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
   const json = await data.json();
   dispatch(addPopularMovies(json.results));
 };
 
 useEffect(() => {
   if (!popularMovies) return getPopularMovies();
 } , [] )};
 
 export default usePopular;