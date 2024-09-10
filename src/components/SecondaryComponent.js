import { useSelector } from "react-redux"
import MovieList from "./MovieList";


const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);

  return (
   movies.nowPlayingMovies && (

    <div className= "bg-black">
      <div className=" m-0 md:-mt-54 relative z-20 pl-10">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.trendingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
    
</div></div>
  ));
};

export default SecondaryComponent;