import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

 // fetch data from TMDB site and updating the store
 const useMovies = () => {
 const dispatch = useDispatch();

const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

 const getNowPlayingMovies = async () => {
  try{
   const data = await fetch("http://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
   const json = await data.json();
   dispatch(addNowPlayingMovies(json.results));
 } catch(error){
  console.log(error);
 }};
 useEffect(() => {
  if(!nowPlayingMovies) return getNowPlayingMovies();
 } , [] )};
 
 export default useMovies;